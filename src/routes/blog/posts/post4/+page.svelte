<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Secure HTML Output with Sanitization | AxelBase Blog</title>
  <meta name="description" content="Understand how AxelBase uses sanitization to protect against XSS while delivering clean, safe HTML from Markdown input." />
  <meta property="og:title" content="Secure HTML Output with Sanitization | AxelBase Blog" />
  <meta property="og:description" content="Understand how AxelBase uses sanitization to protect against XSS while delivering clean, safe HTML from Markdown input." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Secure HTML Output with Sanitization</p>
  </div>

  <article class="prose">
    <h1>Secure HTML Output with Sanitization</h1>
   
    <p class="post-meta">Published: January 07, 2026</p>
   
    <p>Security is a cornerstone of AxelBase, especially when rendering user-provided content in the browser. The sanitization process ensures that converted HTML remains safe even if input contains risky patterns.</p>
   
    <p>After the Markdown parser generates HTML, the output passes through a robust cleaning library. This step removes or escapes any code that could execute unwanted scripts or alter page behavior.</p>
   
    <p>Common threats like script tags, onclick attributes, or javascript: URLs get stripped automatically. Only a whitelist of safe tags and attributes related to standard Markdown output pass through.</p>
   
    <h2>Balanced Protection</h2>
    <p>For example, legitimate elements such as p, h1-h6, ul, ol, li, a, img, code, pre, blockquote, table, and strong remain intact with their appropriate attributes like href, src, and alt.</p>
   
    <p>This balanced approach preserves formatting fidelity while eliminating dangers. An image tag with a normal src continues to work, but one attempting a data URI with embedded scripts gets blocked.</p>
   
    <p>The sanitization configuration is conservative yet practical, allowing style attributes for basic inline styling if present, but removing potentially abusive properties.</p>
   
    <p>During real-time preview, the cleaned HTML renders safely in the display pane. The same sanitized version is used for clipboard copying and file exports, ensuring consistency.</p>
   
    <p>Even if malicious input attempts to inject iframes, svg onload handlers, or other vectors, they are neutralized before display.</p>
   
    <p>This client-side protection means no vulnerable data ever reaches external services, aligning with the privacy-first design.</p>
   
    <p>Users can confidently process untrusted Markdown sources, such as copied documentation or collaborative drafts, without risking browser compromise.</p>
   
    <p>The process adds negligible overhead, maintaining the responsive feel of the converter.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why is sanitization necessary in a client-side tool?</summary>
      <p>It protects against self-XSS if processing unknown or copied content.</p>
    </details>
    <details>
      <summary>Does it remove all styles?</summary>
      <p>Only unsafe style properties; basic ones may persist if needed.</p>
    </details>
    <details>
      <summary>Can I bypass sanitization?</summary>
      <p>No, it is enforced for security.</p>
    </details>
    <details>
      <summary>How does it handle embedded HTML?</summary>
      <p>Allowed safe raw HTML passes if whitelisted; others strip.</p>
    </details>
    <details>
      <summary>Is the exported file safe?</summary>
      <p>Yes, it contains only cleaned output.</p>
    </details>
   
    <p class="italic-note">Security through sanitization lets you convert freely.</p>
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