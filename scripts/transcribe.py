import json, sys
import whisperx

wav, out = sys.argv[1], sys.argv[2]
device, compute = "cpu", "int8"
audio = whisperx.load_audio(wav)
model = whisperx.load_model("large-v3", device, compute_type=compute)
result = model.transcribe(audio, batch_size=8)
lang = result["language"]
align_model, meta = whisperx.load_align_model(language_code=lang, device=device)
result = whisperx.align(result["segments"], align_model, meta, audio, device, return_char_alignments=False)
words = [
    {"word": w["word"], "start": w.get("start"), "end": w.get("end")}
    for s in result["segments"] for w in s.get("words", [])
]
json.dump({"language": lang, "segments": result["segments"], "words": words},
          open(out, "w"), ensure_ascii=False, indent=1)
print(f"{len(words)} words, language={lang}")
