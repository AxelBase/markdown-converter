// src/__tests__/FileHandler.test.js
// Vitest unit tests for FileHandler.js.
// Addresses FR5 (Export HTML), FR6 (Copy to Clipboard), FR9 (File Upload).
// Mocks browser APIs for testing.
// Can be expanded in future with more edge cases.

import { describe, it, expect, vi } from 'vitest';
import { copyToClipboard, downloadHTML, readMarkdownFile } from '$lib/FileHandler';

// Mock navigator.clipboard for copyToClipboard.
vi.stubGlobal('navigator', {
  clipboard: {
    writeText: vi.fn().mockResolvedValue(),
  },
});

// Mock document and URL for downloadHTML.
vi.stubGlobal('document', {
  createElement: vi.fn().mockReturnValue({
    href: '',
    download: '',
    click: vi.fn(),
  }),
});
vi.stubGlobal('URL', {
  createObjectURL: vi.fn().mockReturnValue('blob:url'),
  revokeObjectURL: vi.fn(),
});

// Mock File and FileReader for readMarkdownFile.
const mockFileReader = {
  onload: null,
  onerror: null,
  readAsText: vi.fn(function () {
    if (this.onload) this.onload({ target: { result: 'mock content' } });
  }),
};
vi.stubGlobal('FileReader', vi.fn().mockImplementation(() => mockFileReader));

describe('FileHandler', () => {
  // Test copyToClipboard (FR6).
  it('copies HTML to clipboard', async () => {
    await copyToClipboard('<p>Test</p>');
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('<p>Test</p>');
  });

  // Test downloadHTML (FR5).
  it('downloads HTML with basic structure', () => {
    downloadHTML('<p>Test</p>', 'test.html');
    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(URL.createObjectURL).toHaveBeenCalled();
    expect(URL.revokeObjectURL).toHaveBeenCalled();
  });

  // Test readMarkdownFile (FR9).
  it('reads valid .md file under 1MB', () => {
    const file = { size: 500 * 1024, type: 'text/markdown', name: 'test.md' };
    readMarkdownFile(file, (err, content) => {
      expect(err).toBeNull();
      expect(content).toBe('mock content');
    });
  });

  it('rejects files over 1MB', () => {
    const file = { size: 2 * 1024 * 1024, type: 'text/markdown' };
    readMarkdownFile(file, (err, content) => {
      expect(err).toBe('File size exceeds 1MB limit');
      expect(content).toBeUndefined();
    });
  });

  it('rejects invalid file types', () => {
    const file = { size: 500 * 1024, type: 'text/plain', name: 'test.txt' };
    readMarkdownFile(file, (err, content) => {
      expect(err).toBe('Invalid file type. Please upload a .md file.');
      expect(content).toBeUndefined();
    });
  });

  it('handles file reading errors', () => {
    mockFileReader.readAsText = vi.fn(function () {
      if (this.onerror) this.onerror();
    });
    const file = { size: 500 * 1024, type: 'text/markdown', name: 'test.md' };
    readMarkdownFile(file, (err, content) => {
      expect(err).toBe('Error reading file');
      expect(content).toBeUndefined();
    });
  });
});