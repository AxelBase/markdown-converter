// src/lib/MarkdownParser.js
// Unchanged: Handles Markdown parsing and sanitization (FR3, FR8).

// src/lib/MarkdownParser.js
// This module provides a utility to parse Markdown to HTML and sanitize it.
// Addresses FR3 (Standard Markdown Elements) and FR8 (Handle Invalid Markdown).
// Exports a single function that can be imported in other files like +page.svelte or tests.
// Uses marked for parsing and DOMPurify for sanitization to prevent XSS.

import { marked } from 'marked';
import DOMPurify from 'dompurify';

/**
 * Parses Markdown to HTML and sanitizes the output.
 * @param {string} markdown - The Markdown string to parse.
 * @returns {string} Sanitized HTML string.
 */
export function parseMarkdown(markdown) {
  if (!markdown) return '';
  const rawHtml = marked.parse(markdown, { async: false }); // FR3: Supports headings, bold, italic, lists, links, images, code, blockquotes.
  return DOMPurify.sanitize(rawHtml); // FR8: Sanitizes malicious HTML (e.g., <script>).
}