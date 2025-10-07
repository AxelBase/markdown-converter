// src/__tests__/MarkdownParser.test.js
// Vitest unit tests for MarkdownParser.js.
// Addresses FR2 (Real-Time Conversion), FR3 (Support Standard Markdown Elements), FR8 (Error Handling).
// Tests parsing of all required Markdown elements and error cases.
// Can be expanded in future with more test cases.

import { describe, it, expect } from 'vitest';
import { parseMarkdown } from '$lib/MarkdownParser';

describe('MarkdownParser', () => {
  // Test standard Markdown elements (FR3).
  it('parses headings', () => {
    const input = '# Heading 1\n## Heading 2';
    const output = parseMarkdown(input);
    expect(output).toContain('<h1>Heading 1</h1>');
    expect(output).toContain('<h2>Heading 2</h2>');
  });

  it('parses bold and italics', () => {
    const input = '**bold** __bold__ *italic* _italic_';
    const output = parseMarkdown(input);
    expect(output).toContain('<strong>bold</strong>');
    expect(output).toContain('<em>italic</em>');
  });

  it('parses lists (unordered and ordered)', () => {
    const input = '- Unordered\n- List\n1. Ordered\n2. List';
    const output = parseMarkdown(input);
    expect(output).toContain('<ul>');
    expect(output).toContain('<li>Unordered</li>');
    expect(output).toContain('<ol>');
    expect(output).toContain('<li>Ordered</li>');
  });

  it('parses links and images', () => {
    const input = '[Link](https://example.com) ![Image](https://example.com/img.jpg)';
    const output = parseMarkdown(input);
    expect(output).toContain('<a href="https://example.com">Link</a>');
    expect(output).toContain('<img src="https://example.com/img.jpg" alt="Image">');
  });

  it('parses code blocks and inline code', () => {
    const input = '```\ncode block\n```\n`inline code`';
    const output = parseMarkdown(input);
    expect(output).toContain('<pre><code>code block');
    expect(output).toContain('<code>inline code</code>');
  });

  it('parses blockquotes', () => {
    const input = '> Blockquote';
    const output = parseMarkdown(input);
    expect(output).toContain('<blockquote>');
    expect(output).toContain('<p>Blockquote</p>');
  });

  // Test error handling (FR8).
  it('handles invalid Markdown gracefully', () => {
    const input = 'Invalid ```unclosed code block';
    const output = parseMarkdown(input);
    expect(output).toContain('Error parsing Markdown');
  });

  // Test sanitization (prevents XSS, part of security non-functional).
  it('sanitizes malicious HTML', () => {
    const input = '<script>alert("xss")</script>';
    const output = parseMarkdown(input);
    expect(output).not.toContain('<script>');
  });

  // Test empty input (edge case for FR2).
  it('handles empty input', () => {
    const output = parseMarkdown('');
    expect(output).toBe('');
  });
});