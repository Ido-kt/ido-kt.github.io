#!/usr/bin/env bash
# Install matching Chrome + chromedriver from Chrome for Testing (Stable).
# Selenium on Linux often resolves /usr/bin/google-chrome (runner image) while chromedriver
# tracks CfT — export CHROME_BIN so tests use the same binary as the driver.
set -euo pipefail

sudo apt-get update
sudo apt-get install -y wget unzip jq

CFT_JSON=$(wget -qO- "https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions-with-downloads.json")
CHROME_URL=$(echo "$CFT_JSON" | jq -r '.channels.Stable.downloads.chrome[] | select(.platform=="linux64") | .url')
DRIVER_URL=$(echo "$CFT_JSON" | jq -r '.channels.Stable.downloads.chromedriver[] | select(.platform=="linux64") | .url')
CFT_VERSION=$(echo "$CFT_JSON" | jq -r '.channels.Stable.version')

if [ -z "$CHROME_URL" ] || [ -z "$DRIVER_URL" ] || [ "$CHROME_URL" = "null" ] || [ "$DRIVER_URL" = "null" ]; then
  echo "❌ Failed to resolve Chrome for Testing Stable URLs"
  exit 1
fi

echo "📦 Installing Chrome for Testing ${CFT_VERSION}"

wget -q "$CHROME_URL" -O /tmp/chrome-linux64.zip
sudo unzip -o /tmp/chrome-linux64.zip -d /opt/
sudo ln -sf /opt/chrome-linux64/chrome /usr/local/bin/google-chrome

wget -q "$DRIVER_URL" -O /tmp/chromedriver-linux64.zip
sudo unzip -o /tmp/chromedriver-linux64.zip -d /opt/
sudo ln -sf /opt/chromedriver-linux64/chromedriver /usr/local/bin/chromedriver

if [ -n "${GITHUB_ENV:-}" ]; then
  echo "CHROME_BIN=/opt/chrome-linux64/chrome" >> "$GITHUB_ENV"
fi

echo "✅ Chrome: $(/opt/chrome-linux64/chrome --version)"
echo "✅ Chromedriver: $(chromedriver --version)"
