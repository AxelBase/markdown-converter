// src/__tests__/Page.test.js
// Vitest integration tests for +page.svelte.
// Addresses FR1 (Input Markdown Text), FR2 (Real-Time Conversion), FR4 (HTML Preview Display),
// FR7 (Clear Input), FR10 (Basic Syntax Highlighting).
// Uses @testing-library/svelte for DOM interactions.
// Assume @testing-library/svelte is installed; can be expanded for more UI tests in future.

import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import Page from '../routes/+page.svelte'; // Relative to __tests__.

// Mock lib imports to control behavior.
vi.mock('$lib/MarkdownParser', () => ({
  parseMarkdown: vi.fn().mockReturnValue('<p>Mock HTML</p>'),
}));

vi.mock('$lib/FileHandler', () => ({
  copyToClipboard: vi.fn().mockResolvedValue(),
  downloadHTML: vi.fn(),
  readMarkdownFile: vi.fn((file, callback) => callback(null, 'Mock Markdown')),
}));

// Cleanup after each test.
afterEach(() => {
  vi.clearAllMocks();
});

describe('Page Component', () => {
  it('renders Markdown input textarea and preview pane (FR1, FR4)', () => {
    render(Page);
    expect(screen.getByPlaceholderText('Enter Markdown here (up to 10,000 characters)...')).toBeInTheDocument();
    expect(screen.getByText('HTML Preview')).toBeInTheDocument();
  });

  it('performs real-time conversion on input change (FR2)', async () => {
    const { component } = render(Page);
    const textarea = screen.getByPlaceholderText('Enter Markdown here (up to 10,000 characters)...');

    fireEvent.input(textarea, { target: { value: '# Test' } });
    await waitFor(() => {
      expect(component.$store.html).toBe('<p>Mock HTML</p>'); // Check reactive update.
    }, { timeout: 600 }); // Wait for debounce (500ms + buffer).
  });

  it('clears input and preview on clear button click (FR7)', () => {
    render(Page);
    const textarea = screen.getByPlaceholderText('Enter Markdown here (up to 10,000 characters)...');
    fireEvent.input(textarea, { target: { value: 'Test' } });

    const clearButton = screen.getByText('Clear');
    fireEvent.click(clearButton);

    expect(textarea.value).toBe('');
    expect(screen.queryByText('Mock HTML')).not.toBeInTheDocument(); // Preview cleared.
  });

  it('handles file upload and updates Markdown (FR9)', async () => {
    render(Page);
    const fileInput = screen.getByLabelText(/file/i); // Assuming label, or use query.
    const mockFile = new File(['# Uploaded'], 'test.md', { type: 'text/markdown' });

    fireEvent.change(fileInput, { target: { files: [mockFile] } });
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Enter Markdown here...').value).toBe('Mock Markdown');
    });
  });

  // Note: FR10 (Syntax Highlighting) is CSS-based; test visual if using snapshot or visual testing tools in future.
  // For now, check class presence.
  it('applies basic syntax highlighting class to textarea (FR10)', () => {
    render(Page);
    const textarea = screen.getByPlaceholderText('Enter Markdown here (up to 10,000 characters)...');
    expect(textarea).toHaveClass('markdown-input');
  });
});