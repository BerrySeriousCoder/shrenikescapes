#!/usr/bin/env node

/**
 * Image Compression Script
 * Uses sharp to compress all images in public/images/ in-place.
 * - JPEG: quality 80, progressive, mozjpeg
 * - PNG: quality 80, compression level 9
 * - WebP: quality 80
 * - Resizes images wider than 1920px to 1920px (maintaining aspect ratio)
 */

import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGE_DIR = join(__dirname, 'public', 'images');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;
const WEBP_QUALITY = 80;

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function getAllImageFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllImageFiles(fullPath)));
    } else if (IMAGE_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const originalStats = await stat(filePath);
  const originalSize = originalStats.size;

  const tempPath = filePath + '.tmp';

  try {
    let pipeline = sharp(filePath).rotate(); // auto-rotate based on EXIF

    // Resize if wider than MAX_WIDTH
    const metadata = await sharp(filePath).metadata();
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    // Apply format-specific compression
    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({
        quality: JPEG_QUALITY,
        progressive: true,
        mozjpeg: true,
      });
    } else if (ext === '.png') {
      pipeline = pipeline.png({
        quality: PNG_QUALITY,
        compressionLevel: 9,
        palette: true,
      });
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({
        quality: WEBP_QUALITY,
        effort: 6,
      });
    }

    // Write to temp file first, then replace original
    await pipeline.toFile(tempPath);

    const newStats = await stat(tempPath);
    const newSize = newStats.size;

    // Only replace if the new file is actually smaller
    if (newSize < originalSize) {
      await unlink(filePath);
      await rename(tempPath, filePath);
      return { originalSize, newSize, saved: originalSize - newSize, skipped: false };
    } else {
      // New file is larger or same — keep original
      await unlink(tempPath);
      return { originalSize, newSize: originalSize, saved: 0, skipped: true };
    }
  } catch (err) {
    // Clean up temp file on error
    try { await unlink(tempPath); } catch {}
    console.error(`  ✗ Error processing ${filePath}: ${err.message}`);
    return { originalSize, newSize: originalSize, saved: 0, skipped: true, error: true };
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

async function main() {
  console.log('🔍 Scanning for images in public/images/...\n');

  const files = await getAllImageFiles(IMAGE_DIR);
  console.log(`Found ${files.length} images to process.\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  let totalSaved = 0;
  let processedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const file of files) {
    const relativePath = file.replace(__dirname + '/', '');
    process.stdout.write(`[${processedCount + 1}/${files.length}] ${relativePath}...`);

    const result = await compressImage(file);

    totalOriginal += result.originalSize;
    totalNew += result.newSize;
    totalSaved += result.saved;

    if (result.error) {
      errorCount++;
      console.log(' ✗ ERROR');
    } else if (result.skipped) {
      skippedCount++;
      console.log(` already optimized (${formatBytes(result.originalSize)})`);
    } else {
      processedCount++;
      const pct = ((result.saved / result.originalSize) * 100).toFixed(1);
      console.log(` ${formatBytes(result.originalSize)} → ${formatBytes(result.newSize)} (${pct}% saved)`);
    }
  }

  console.log('\n' + '═'.repeat(60));
  console.log('📊 COMPRESSION SUMMARY');
  console.log('═'.repeat(60));
  console.log(`  Total images:      ${files.length}`);
  console.log(`  Compressed:        ${processedCount}`);
  console.log(`  Already optimized: ${skippedCount}`);
  if (errorCount > 0) console.log(`  Errors:            ${errorCount}`);
  console.log(`  Original size:     ${formatBytes(totalOriginal)}`);
  console.log(`  New size:          ${formatBytes(totalNew)}`);
  console.log(`  Total saved:       ${formatBytes(totalSaved)} (${((totalSaved / totalOriginal) * 100).toFixed(1)}%)`);
  console.log('═'.repeat(60));
}

main().catch(console.error);
