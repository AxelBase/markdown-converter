<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Supported Markdown Syntax and CommonMark Compliance | AxelBase Blog</title>
  <meta name="description" content="A comprehensive overview of Markdown elements supported by AxelBase, ensuring reliable conversion through CommonMark standards." />
  <meta property="og:title" content="Supported Markdown Syntax and CommonMark Compliance | AxelBase Blog" />
  <meta property="og:description" content="A comprehensive overview of Markdown elements supported by AxelBase, ensuring reliable conversion through CommonMark standards." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Supported Markdown Syntax and CommonMark Compliance</p>
  </div>

  <article class="prose">
    <h1>Supported Markdown Syntax and CommonMark Compliance</h1>
   
    <p class="post-meta">Published: January 07, 2026</p>
   
    <p>AxelBase adheres closely to the CommonMark specification, ensuring consistent and predictable conversion of Markdown to HTML. This compliance means your documents render the same way across different tools and platforms.</p>
   
    <p>Headings are supported from level 1 to 6 using hash prefixes. Each heading translates to the corresponding h1 through h6 tag with proper hierarchy for accessibility and SEO.</p>
   
    <p>Emphasis handling includes bold text via double asterisks or underscores, and italics with single markers. Nested emphasis, such as bold within italics, works as expected.</p>
   
    <h2>List and Link Support</h2>
    <p>Lists come in both unordered and ordered varieties. Bullet points use dashes, asterisks, or plus signs, while numbered lists accept any starting number. Nested lists maintain correct indentation and tagging.</p>
   
    <p>Links follow the standard bracketed text with parenthetical URL format. The converter generates proper a tags with href attributes. Relative links preserve their paths for use in static sites.</p>
   
    <p>Images use the exclamation mark prefix, producing img elements with src and alt attributes. The alt text becomes accessible descriptions, improving inclusivity.</p>
   
    <p>Inline code spans wrap text in backticks, resulting in code tags for monospaced display. Fenced code blocks with triple backticks allow language specification for potential highlighting in downstream tools, though preserved as pre and code elements.</p>
   
    <p>Blockquotes use the greater-than symbol, rendering as blockquote tags that can contain other elements like paragraphs or lists for rich quoted content.</p>
   
    <p>Tables are supported through the pipe syntax, converting to proper table, tr, th, and td structures with optional alignment specifiers.</p>
   
    <p>Horizontal rules created by three or more dashes, asterisks, or underscores become hr elements for section separation.</p>
   
    <p>The converter handles edge cases gracefully, such as lazy continuation lines in lists and proper escaping of special characters.</p>
   
    <p>This broad syntax support covers most everyday writing needs, from technical documentation to blog posts and educational materials.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Does it support task lists?</summary>
      <p>Standard checkbox syntax renders as plain list items without interactive checkboxes.</p>
    </details>
    <details>
      <summary>What about footnotes?</summary>
      <p>Basic inline links serve similar purposes, though dedicated footnote syntax is not implemented.</p>
    </details>
    <details>
      <summary>Are HTML embeds allowed?</summary>
      <p>Direct HTML input gets sanitized for security, allowing only safe elements.</p>
    </details>
    <details>
      <summary>How are line breaks handled?</summary>
      <p>Two trailing spaces or double newlines create br or p separations appropriately.</p>
    </details>
    <details>
      <summary>Does it support emojis?</summary>
      <p>Yes, emoji shortcodes and Unicode characters render directly.</p>
    </details>
   
    <p class="italic-note">Understanding supported syntax helps you write confidently.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2{
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose details {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;
  }

  .prose details[open] {
    background-color: var(--card-bg);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--accent-secondary);
    list-style: none;
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--accent-primary);
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-primary);
    color: var(--text-secondary);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>