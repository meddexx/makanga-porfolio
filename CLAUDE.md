# Video editor notes

- Setup: runs in a Claude Code cloud container (Ubuntu 24.04, 4 CPU, no GPU). No live app control possible from here.
- Finishing app: CapCut -> render ./cut.mp4 with ffmpeg (trim/atrim + concat, -fps_mode passthrough).
- Transcription: WhisperX large-v3, CPU int8, venv at ~/.cache/video-editor/whisperx-venv (container cache is ephemeral; recreate only if missing).
- Folders: raw/ (source clip), transcript/ (words.json, cuts.json), scripts/, vendor/.
