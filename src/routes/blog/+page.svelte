<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Introducing AxelBase: A Privacy-Focused Markdown to HTML Converter', description: 'Discover this fully client-side web tool that converts Markdown to clean HTML without sending any data to servers, perfect for developers, writers, and educators.' },
    { href: '/blog/posts/post2', title: 'Real-Time Preview: How Instant Rendering Works', description: 'Explore the mechanics of live Markdown conversion as you type, including debouncing techniques and efficient updates to the HTML preview pane.' },
    { href: '/blog/posts/post3', title: 'Supported Markdown Syntax and CommonMark Compliance', description: 'A detailed look at handled elements like headings, lists, bold/italic text, links, images, code blocks, and blockquotes in this converter.' },
    { href: '/blog/posts/post4', title: 'Secure HTML Output with Sanitization', description: 'Learn how DOMPurify prevents XSS risks by cleaning potentially malicious content while preserving valid Markdown-generated HTML.' },
    { href: '/blog/posts/post5', title: 'Exporting HTML: From Preview to Standalone File', description: 'Step-by-step on generating complete HTML documents with embedded styles, ready for download and direct use in web projects.' },
    { href: '/blog/posts/post6', title: 'Copy to Clipboard: Quick Integration Workflow', description: 'How the raw or styled HTML is copied seamlessly for pasting into blogs, documentation, or content management systems.' },
    { href: '/blog/posts/post7', title: 'Uploading and Converting Existing .md Files', description: 'Guide to importing local Markdown files (up to 1MB) and automatically loading them for instant conversion and preview.' },
    { href: '/blog/posts/post8', title: 'Input Limits and Performance Optimizations', description: 'Understanding the 10,000-character cap, real-time update throttling, and why it ensures smooth operation even on mobile devices.' },
    { href: '/blog/posts/post9', title: 'Responsive Design and Cross-Device Experience', description: 'How Bootstrap-powered layout adapts the split-view interface for desktops, tablets, and phones with consistent usability.' },
    { href: '/blog/posts/post10', title: 'Best Practices for Markdown to HTML Workflows', description: 'Tips on using this converter effectively for documentation, static site generation, blogging, and maintaining clean web-ready content.' },
  ];
</script>

<svelte:head>
  <title>Blog | AxelBase Insights</title>
  <meta name="description" content="In-depth articles, guides, and technical explanations about using AxelBase, the client-side Markdown to HTML converter." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: AxelBase Insights</h1>
    <p class="subtitle">
      Practical guides, technical deep dives, and tips for getting the most out of this privacy-first, browser-based Markdown to HTML converter.
      All processing happens locally—no data leaves your device.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>