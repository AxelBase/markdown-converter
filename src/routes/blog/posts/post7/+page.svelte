<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Uploading and Converting Existing .md Files | AxelBase Blog</title>
  <meta name="description" content="Learn how to upload local Markdown files in AxelBase for instant loading, conversion, and preview in the browser." />
  <meta property="og:title" content="Uploading and Converting Existing .md Files | AxelBase Blog" />
  <meta property="og:description" content="Learn how to upload local Markdown files in AxelBase for instant loading, conversion, and preview in the browser." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Uploading and Converting Existing .md Files</p>
  </div>

  <article class="prose">
    <h1>Uploading and Converting Existing .md Files</h1>
   
    <p class="post-meta">Published: January 07, 2026</p>
   
    <p>AxelBase makes it easy to work with existing Markdown files by allowing direct uploads from your device. This feature bridges the gap between local documents and instant browser-based conversion.</p>
   
    <p>The upload interface accepts standard .md files up to 1MB in size. When you select a file, AxelBase reads its contents entirely in the browser using native file APIs—no data travels to any server.</p>
   
    <p>Once loaded, the file's text automatically populates the input textarea. The real-time conversion kicks in immediately, displaying the rendered HTML in the preview pane.</p>
   
    <h2>Smooth File Handling</h2>
    <p>This process supports common use cases like reviewing documentation drafts, preparing blog posts, or converting notes stored locally. You can upload, verify formatting, make quick edits in the textarea, and export updated HTML.</p>
   
    <p>File reading happens asynchronously to avoid freezing the interface. A progress indicator may appear for larger files, though most complete instantly.</p>
   
    <p>Only text-based Markdown files process correctly. Attempting other formats results in a gentle error message without disrupting the session.</p>
   
    <p>After upload, you can clear the content or upload a different file at any time. The tool remembers no history—each session remains independent for privacy.</p>
   
    <p>This capability works alongside manual typing or pasting, giving flexibility in how you input content. Many users maintain Markdown files in their projects and use AxelBase for quick HTML previews before commit or publish.</p>
   
    <p>The size limit ensures smooth performance across devices, including mobile browsers where memory is more constrained.</p>
   
    <p>Uploaded content receives the same sanitization and styling as typed input, guaranteeing consistent output quality.</p>
   
    <p>For repetitive tasks, you can upload, export, clear, and repeat efficiently.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>What file types are supported?</summary>
      <p>Only .md files; others show an error.</p>
    </details>
    <details>
      <summary>Is there a size limit?</summary>
      <p>Yes, 1MB to maintain performance.</p>
    </details>
    <details>
      <summary>Does upload send data anywhere?</summary>
      <p>No, everything stays local in your browser.</p>
    </details>
    <details>
      <summary>Can I edit after uploading?</summary>
      <p>Yes, modify freely in the textarea.</p>
    </details>
    <details>
      <summary>What about encoding?</summary>
      <p>Standard UTF-8 text files work best.</p>
    </details>
   
    <p class="italic-note">Upload feature brings your local files into the conversion workflow instantly.</p>
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