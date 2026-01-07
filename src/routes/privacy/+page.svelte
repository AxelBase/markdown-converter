<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase</title>
  <meta name="description" content="AxelBase's Privacy Policy explains our strict no-data-collection approach for the client-side Markdown to HTML converter." />
  <meta name="keywords" content="AxelBase privacy policy, Markdown converter privacy, data protection, client-side tool" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Privacy Policy | AxelBase" />
  <meta property="og:description" content="Learn how AxelBase ensures complete privacy with fully client-side processing in our Markdown to HTML converter." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: January 07, 2026</p>

    <h2>1. Introduction</h2>
    <p>Welcome to <strong>AxelBase</strong>, a fully client-side Markdown to HTML converter developed with privacy as a core principle ("we," "us," or "our"). This Privacy Policy explains how we handle information when you use our tool, which enables real-time Markdown input, preview, file uploads, and HTML export. We are committed to protecting your privacy and operate on a <strong>privacy-first foundation</strong>. Since all processing occurs entirely in your browser, <strong>we do not collect, store, or transmit any personal data</strong>. This policy provides full transparency into our practices.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>AxelBase is designed to function without gathering any user information. Specifically, we do not collect:</p>
    <ul>
      <li><strong>Personal Identifiable Information (PII)</strong>: Names, email addresses, IP addresses, or any identifiers.</li>
      <li><strong>Usage Data</strong>: Browser details, device information, location, or session analytics.</li>
      <li><strong>Content Data</strong>: Any Markdown text you type, paste, or upload via .md files remains exclusively on your device and is never sent to us or third parties.</li>
      <li><strong>Analytics or Tracking Data</strong>: We do not use Google Analytics, cookies for tracking, pixels, or any monitoring tools.</li>
    </ul>
    <p>Because every operation is <strong>client-side only</strong>, your content stays completely isolated on your device.</p>

    <h2>3. How the Tool Works</h2>
    <p>When using AxelBase:</p>
    <ul>
      <li><strong>Input and Processing</strong>: Markdown is entered via textarea or uploaded as .md files. Conversion, sanitization, and preview rendering happen locally using browser-based JavaScript libraries.</li>
      <li><strong>No Data Transmission</strong>: Nothing is sent over the network to our servers. Features like real-time preview, HTML export, and clipboard copying are handled entirely by your browser.</li>
      <li><strong>Temporary Session Data</strong>: Only minimal transient data (e.g., current input during your session) may exist in browser memory and is cleared when you use the Clear button or close the tab.</li>
    </ul>
    <p>This architecture guarantees <strong>total data privacy</strong> and makes the tool ideal for sensitive or confidential content.</p>

    <h2>4. Third-Party Services</h2>
    <p>AxelBase does not integrate any third-party analytics, advertising, or tracking services. All required libraries are loaded locally or from trusted CDNs without user tracking. External links (e.g., to documentation or support) open in new tabs and are not monitored by us.</p>

    <h2>5. Cookies and Tracking Technologies</h2>
    <p>We <strong>do not use cookies</strong>, localStorage for persistence, web beacons, or any tracking technologies. Your interaction with the tool is completely <strong>stateless</strong> beyond the current browser session.</p>

    <h2>6. Data Security</h2>
    <p>Since no data leaves your device, security risks associated with transmission or server storage are eliminated. We follow secure coding practices and sanitize outputs to prevent client-side vulnerabilities. Users should maintain up-to-date browsers and secure their own devices and exported files.</p>

    <h2>7. Children's Privacy</h2>
    <p>Our tool is not directed at children under 13. We do not knowingly collect any information from children. If you believe a child has used the tool, please contact us.</p>

    <h2>8. International Users</h2>
    <p>As no personal data is collected or processed, AxelBase inherently complies with global privacy regulations including <strong>GDPR</strong>, <strong>CCPA</strong>, and similar frameworks.</p>

    <h2>9. Changes to This Privacy Policy</h2>
    <p>We may occasionally update this policy to reflect tool improvements or legal changes. Updates will appear on this page with a new effective date.</p>

    <h2>10. Contact Us</h2>
    <p>For questions about this Privacy Policy or our practices, please reach out via the Contact section on our site.</p>

    <p class="italic-note">AxelBase is built on a <strong>zero-data-collection model</strong>, giving you complete confidence when converting Markdown to HTML. By using the tool, you acknowledge this policy.</p>
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

  .prose h1, .prose h2 {
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
  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>