#!/usr/bin/env bash
# Usage: scripts/transcribe.sh raw/<clip>  -> transcript/words.json (skips if it exists)
set -euo pipefail
cd "$(dirname "$0")/.."
RAW="$1"; OUT=transcript/words.json; WAV=transcript/audio16k.wav
[ -f "$OUT" ] && { echo "words.json exists, not re-transcribing"; exit 0; }
ffmpeg -y -loglevel error -i "$RAW" -vn -ac 1 -ar 16000 -c:a pcm_s16le "$WAV"
~/.cache/video-editor/whisperx-venv/bin/python scripts/transcribe.py "$WAV" "$OUT"
