#!/bin/bash

# 🚀 Quick Image Optimization Script for Senat Consulting
# This script will automatically optimize all images in your project

echo "🚀 Starting Image Optimization..."
echo ""

# Check if imagemagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found!"
    echo ""
    echo "📦 Installing ImageMagick via Homebrew..."
    echo "Run: brew install imagemagick"
    echo ""
    echo "If you don't have Homebrew, install it first:"
    echo "Run: /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    exit 1
fi

echo "✅ ImageMagick found!"
echo ""

# Create backup directory
BACKUP_DIR="src/images_backup_$(date +%Y%m%d_%H%M%S)"
echo "📁 Creating backup at: $BACKUP_DIR"
cp -r src/images "$BACKUP_DIR"
echo "✅ Backup created!"
echo ""

# Count images
TOTAL_IMAGES=$(find src/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | wc -l)
echo "📸 Found $TOTAL_IMAGES images to optimize"
echo ""

# Get original size
ORIGINAL_SIZE=$(du -sh src/images | awk '{print $1}')
echo "📊 Original size: $ORIGINAL_SIZE"
echo ""

echo "🔄 Optimizing images..."
echo "This may take a few minutes..."
echo ""

# Optimize JPG/JPEG images
find src/images -type f \( -name "*.jpg" -o -name "*.jpeg" \) -print0 | while IFS= read -r -d '' file; do
    echo "  Optimizing: $(basename "$file")"
    convert "$file" -quality 80 -strip "$file"
done

# Optimize PNG images
find src/images -type f -name "*.png" -print0 | while IFS= read -r -d '' file; do
    echo "  Optimizing: $(basename "$file")"
    convert "$file" -quality 85 -strip "$file"
done

echo ""
echo "✅ Image optimization complete!"
echo ""

# Get new size
NEW_SIZE=$(du -sh src/images | awk '{print $1}')
echo "📊 New size: $NEW_SIZE"
echo "📊 Original size: $ORIGINAL_SIZE"
echo ""

echo "✨ Done! Your images are now optimized."
echo ""
echo "⚠️  IMPORTANT: Test your website to ensure images still look good!"
echo "If any issues, restore from backup: $BACKUP_DIR"
echo ""
echo "Next steps:"
echo "1. Test website locally: npm run dev"
echo "2. Check images in browser"
echo "3. If all good, delete backup: rm -rf $BACKUP_DIR"
echo "4. Build and deploy: npm run build"
echo ""
