<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Real-Time Preview: How Instant Rendering Works | AxelBase Blog</title>
  <meta name="description" content="Explore the mechanics behind AxelBase's live Markdown to HTML preview, including debouncing and efficient update techniques." />
  <meta property="og:title" content="Real-Time Preview: How Instant Rendering Works | AxelBase Blog" />
  <meta property="og:description" content="Explore the mechanics behind AxelBase's live Markdown to HTML preview, including debouncing and efficient update techniques." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Real-Time Preview: How Instant Rendering Works</p>
  </div>

  <article class="prose">
    <h1>Real-Time Preview: How Instant Rendering Works</h1>
   
    <p class="post-meta">Published: January 07, 2026</p>
   
    <p>One of the most appreciated features of AxelBase is the real-time preview that updates as you type. This instant feedback transforms the writing experience, allowing you to see exactly how your Markdown will appear as HTML without manual conversion steps.</p>
   
    <p>The process begins the moment you enter text in the input pane. AxelBase listens for input events on the textarea element. To avoid overwhelming the browser with constant updates, it employs a debouncing technique. Changes are batched and processed after a short delay, typically around 300 to 500 milliseconds of inactivity.</p>
   
    <p>Once the debounce period ends, the current Markdown content is passed to the parsing engine. This engine uses a standards-compliant library to transform the plain text syntax into HTML elements. Headings become proper h elements, lists turn into ul or ol structures, and emphasis markers create strong or em tags.</p>
   
    <h2>The Sanitization Step</h2>
    <p>After parsing, the raw HTML goes through a sanitization step. This crucial process removes any potentially dangerous code that could arise from complex input, ensuring the output is safe to render in the preview pane. Only allowed tags and attributes pass through, preventing security risks while preserving legitimate formatting.</p>
   
    <p>The sanitized HTML is then injected into the preview area. Rather than rebuilding the entire document, the update targets a specific container, minimizing layout shifts and maintaining scroll position where possible.</p>
   
    <p>This efficient pipeline results in near-instantaneous updates that feel seamless to the user. Even with longer documents approaching the 10,000 character limit, the conversion remains responsive.</p>
   
    <p>The preview applies basic styling to enhance readability. Fonts, margins, and spacing make the rendered content look professional without overwhelming the interface. These styles are also embedded in exported files for consistency.</p>
   
    <p>On mobile devices, the layout adapts by stacking panes vertically, but the real-time update mechanism remains identical, providing the same fluid experience across screen sizes.</p>
   
    <p>This live rendering encourages iterative writing. You can experiment with syntax, adjust heading levels, or refine list structures while immediately seeing the impact.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why is there a slight delay in updates?</summary>
      <p>The debounce delay prevents excessive processing during rapid typing, improving performance.</p>
    </details>
    <details>
      <summary>Does the preview match the exported HTML exactly?</summary>
      <p>Yes, both use the same parsing and sanitization pipeline.</p>
    </details>
    <details>
      <summary>Can real-time preview handle code blocks?</summary>
      <p>Absolutely, fenced code blocks render with preserved formatting and line breaks.</p>
    </details>
    <details>
      <summary>What happens with very long input?</summary>
      <p>Updates throttle intelligently to maintain smoothness.</p>
    </details>
    <details>
      <summary>Is the preview secure?</summary>
      <p>Sanitization ensures no malicious scripts execute in the preview.</p>
    </details>
   
    <p class="italic-note">Mastering the real-time preview helps you create better content faster.</p>
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