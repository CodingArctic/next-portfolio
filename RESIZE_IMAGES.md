# Image Resizing Guide

## Required Sizes
For each image in `public/images/projects/`, create 3 versions:
- **640w** - mobile devices
- **1024w** - tablets/small laptops
- **Original (1200w+)** - desktop/high-res displays

## Using ImageMagick (Recommended)

### Install
**Windows (Chocolatey):**
```powershell
choco install imagemagick
```

**Windows (Direct):** Download from https://imagemagick.org/script/download.php

**Mac:**
```bash
brew install imagemagick
```

### Resize All Images
Run this from the `public/images/projects/` directory:

```powershell
# Windows PowerShell
Get-ChildItem -Filter "*.webp" | Where-Object { $_.Name -notmatch '-\d+w\.webp$' } | ForEach-Object {
    $base = $_.BaseName
    magick "$($_.Name)" -resize 640x -quality 85 "$base-640w.webp"
    magick "$($_.Name)" -resize 1024x -quality 85 "$base-1024w.webp"
}
```

```bash
# Mac/Linux
for img in *.webp; do
    if [[ ! "$img" =~ -[0-9]+w\.webp$ ]]; then
        base="${img%.webp}"
        magick "$img" -resize 640x -quality 85 "${base}-640w.webp"
        magick "$img" -resize 1024x -quality 85 "${base}-1024w.webp"
    fi
done
```