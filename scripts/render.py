"""Render transcript/cuts.json from the raw clip into ./cut.mp4 and verify it."""
import json, subprocess, sys
from fractions import Fraction

raw = sys.argv[1]
cuts = json.load(open("transcript/cuts.json"))["segments"]

def probe(path, *entries):
    r = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-count_packets",
                        "-show_entries", "stream=" + ",".join(entries), "-of", "json", path],
                       capture_output=True, text=True, check=True)
    return json.loads(r.stdout)["streams"][0]

fps = Fraction(probe(raw, "r_frame_rate")["r_frame_rate"])
frames = [(round(Fraction(c["start"]).limit_denominator(100000) * fps),
           round(Fraction(c["end"]).limit_denominator(100000) * fps)) for c in cuts]
parts, labels = [], []
for i, (a, b) in enumerate(frames):
    s, e = float(a / fps), float(b / fps)
    parts.append(f"[0:v]trim=start_frame={a}:end_frame={b},setpts=PTS-STARTPTS[v{i}];"
                 f"[0:a]atrim=start={s:.6f}:end={e:.6f},asetpts=PTS-STARTPTS[a{i}];")
    labels.append(f"[v{i}][a{i}]")
graph = "".join(parts) + "".join(labels) + f"concat=n={len(frames)}:v=1:a=1[v][a]"
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", raw, "-filter_complex", graph,
                "-map", "[v]", "-map", "[a]", "-c:v", "libx264", "-crf", "18", "-preset", "medium",
                "-c:a", "aac", "-b:a", "192k", "-fps_mode", "passthrough", "-movflags", "+faststart",
                "cut.mp4"], check=True)

want = sum(b - a for a, b in frames)
got = int(probe("cut.mp4", "nb_read_packets")["nb_read_packets"])
print(f"pieces={len(frames)} fps={fps} expected_frames={want} got_frames={got} "
      f"expected_dur={float(want / fps):.3f}s")
sys.exit(0 if want == got else 1)
