// src/lib/FileHandler.js
// Updated to use styled HTML by default for download (issue 4).
// Naming handled in +page.svelte (issue 3).

// src/lib/FileHandler.js
// This module provides utilities for file handling, downloads, and clipboard operations.
// Addresses FR5 (Export HTML), FR6 (Copy to Clipboard), FR9 (File Upload).
// Exports functions that can be imported in other files like +page.svelte or tests.
// Uses browser APIs for client-side operations.

/**
 * Copies the provided HTML text to the clipboard.
 * @param {string} html - The HTML string to copy.
 * @returns {Promise<void>}
 */
export async function copyToClipboard(html) {
  try {
    await navigator.clipboard.writeText(html);
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
  }
}

/**
 * Downloads the HTML as a .html file.
 * @param {string} html - The HTML content.
 * @param {string} [filename='Markdown-to-HTML-Converted.html'] - The filename for the download.
 */
export function downloadHTML(html, filename = 'Markdown-to-HTML-Converted.html') {
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * Reads a .md file and calls the callback with content or error.
 * Validates file type and size (up to 1MB).
 * @param {File} file - The uploaded file.
 * @param {Function} callback - Callback function(err, content).
 */
export function readMarkdownFile(file, callback) {
  if (!file) {
    callback('No file selected');
    return;
  }
  if (file.size > 1024 * 1024) {
    callback('File size exceeds 1MB limit');
    return;
  }
  if (file.type !== 'text/markdown' && !file.name.endsWith('.md')) {
    callback('Invalid file type. Please upload a .md file.');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => callback(null, reader.result);
  reader.onerror = () => callback('Error reading file');
  reader.readAsText(file);
}