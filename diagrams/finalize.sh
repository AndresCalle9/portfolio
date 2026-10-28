#!/usr/bin/env bash
# Valida y renderiza cada candidato con Archify y copia el HTML final a public/diagrams/.
set -euo pipefail
cd "$(dirname "$0")/.."
ARCHIFY="${ARCHIFY:-$HOME/.claude/skills/archify/bin/archify.mjs}"
export ARCHIFY_CHROME="${ARCHIFY_CHROME:-$(ls -d "$HOME"/Library/Caches/ms-playwright/chromium-*/chrome-mac-arm64/"Google Chrome for Testing.app"/Contents/MacOS/"Google Chrome for Testing" 2>/dev/null | tail -1)}"
mkdir -p public/diagrams diagrams/out
status=0
for json in diagrams/candidates/*.json; do
  base="diagrams/out/$(basename "${json%.json}")"
  type=$(node -p "require('./$json').diagram_type")
  if node "$ARCHIFY" finalize "$type" "$json" "$base.html" --quality showcase --json > "$base.log" 2>&1; then
    cp "$base.html" public/diagrams/
    echo "ok    $json"
  else
    echo "FAIL  $json  (ver $base.log)"; status=1
  fi
done
exit $status
