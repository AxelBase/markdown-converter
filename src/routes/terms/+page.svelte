<!-- src/routes/terms/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | AxelBase</title>
  <meta name="description" content="Read the Terms and Conditions governing the use of AxelBase, our client-side Markdown to HTML converter." />
  <meta name="keywords" content="AxelBase terms and conditions, Markdown converter terms, usage agreement, legal terms" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Terms and Conditions | AxelBase" />
  <meta property="og:description" content="Understand the terms governing the use of AxelBase's privacy-focused Markdown to HTML converter." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: January 07, 2026</p>

    <h2>1. Introduction</h2>
    <p>Welcome to <strong>AxelBase</strong>, a free, fully client-side Markdown to HTML converter ("we," "us," or "our"). By accessing or using AxelBase, you agree to be bound by these Terms and Conditions. These terms govern your use of the web-based tool that allows real-time Markdown input, preview, file uploads, and HTML export. If you do not agree with any part of these terms, please do not use the service.</p>

    <h2>2. Service Description</h2>
    <p>AxelBase is provided as a browser-based utility that converts Markdown text to clean, sanitized HTML entirely on your device. The service includes features such as real-time preview, .md file uploads (up to 1MB), HTML export with embedded styles, and clipboard copying. All processing occurs client-side with no server-side storage or transmission of your content.</p>

    <h2>3. Acceptable Use</h2>
    <p>You agree to use AxelBase only for lawful purposes. Prohibited activities include:</p>
    <ul>
      <li>Inputting or uploading content that violates copyright, trademark, or other intellectual property rights.</li>
      <li>Attempting to introduce malicious code, viruses, or harmful scripts.</li>
      <li>Using the service in a way that interferes with its functionality or overloads browser resources excessively.</li>
      <li>Any illegal or unauthorized activity.</li>
    </ul>
    <p>You are solely responsible for the content you process through AxelBase.</p>

    <h2>4. Intellectual Property</h2>
    <p>The AxelBase application, including its source code, design, branding, and documentation, is owned by us and protected by copyright and other intellectual property laws. You may not modify, distribute, reverse-engineer, or create derivative works of the platform without explicit written permission. Content you convert or generate using AxelBase remains your property.</p>

    <h2>5. Third-Party Services</h2>
    <p>AxelBase may contain links to external services (e.g., support pages or donation platforms). We are not responsible for the availability, content, or practices of these third-party sites. Your interaction with such services is governed by their respective terms and policies.</p>

    <h2>6. Disclaimer of Warranties</h2>
    <p>AxelBase is provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of accuracy, reliability, or fitness for a particular purpose. We do not guarantee that the service will be uninterrupted, error-free, or meet specific requirements.</p>

    <h2>7. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, AxelBase and its developers shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the service, including data loss, conversion errors, or browser issues.</p>

    <h2>8. Termination</h2>
    <p>We reserve the right to restrict or terminate access to AxelBase at any time for violations of these terms or for any other reason. You may discontinue use at any time.</p>

    <h2>9. Changes to Terms</h2>
    <p>We may update these Terms and Conditions periodically. Changes will be posted on this page with an updated effective date. Continued use of the service after changes constitutes acceptance of the new terms.</p>

    <h2>10. Contact</h2>
    <p>For questions about these Terms and Conditions, please reach out via the Contact section on our site.</p>

    <p class="italic-note">Thank you for using AxelBase responsibly. These terms help ensure a safe and reliable experience for all users.</p>
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