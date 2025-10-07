<!-- src/routes/+page.svelte -->
<!-- Main page: Converter UI with sections for About, How to Use, FAQ. -->
<!-- Dark green accents via app.css classes. -->
<!-- Hovering and animations integrated via CSS. -->
<!-- Enhanced: Added fade-in to converter UI, hover on sections, fade on error. -->
<!-- Updated: Filled in About, How to Use, FAQ with 350–400 words each, using bolding, italics, and bullet points for About and How to Use. -->
<!-- Added: "Markdown - HTML Converter" heading with spacing after navbar. -->

<script>
  import { parseMarkdown } from '$lib/MarkdownParser';
  import { copyToClipboard, downloadHTML, readMarkdownFile } from '$lib/FileHandler';

  let markdown = '';
  let html = '';
  let error = '';
  let fileInput;
  let downloadCounter = 0;

  let debounceTimer;
  $: {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      html = parseMarkdown(markdown);
    }, 500);
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    readMarkdownFile(file, (err, content) => {
      error = err || '';
      if (content) {
        markdown = content.slice(0, 10000);
      }
      fileInput.value = '';
    });
  }

  function clearInput() {
    markdown = '';
    html = '';
    error = '';
    fileInput.value = '';
  }

  function exportHtml() {
    downloadCounter += 1;
    const filename = downloadCounter > 1 ? `Markdown-to-HTML-Converted-${downloadCounter - 1}.html` : 'Markdown-to-HTML-Converted.html';
    const styledHtml = getStyledHtml(html);
    downloadHTML(styledHtml, filename);
  }

  async function copyHtml() {
    const styledHtml = getStyledHtml(html);
    await copyToClipboard(styledHtml);
  }

  function getStyledHtml(rawHtml) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Markdown to HTML Converted</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2, h3, h4, h5, h6 {
      margin-top: 1.5em;
      margin-bottom: 0.5em;
      color: #222;
    }
    p {
      margin-bottom: 1em;
    }
    ul, ol {
      margin-left: 20px;
      margin-bottom: 1em;
    }
    a {
      color: #007bff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 10px auto;
    }
    code {
      background-color: #f1f1f1;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
    pre {
      background-color: #f1f1f1;
      padding: 10px;
      overflow-x: auto;
      border-radius: 5px;
      margin-bottom: 1em;
      font-family: 'Courier New', monospace;
    }
    blockquote {
      border-left: 4px solid #ddd;
      padding-left: 10px;
      color: #666;
      margin: 1em 0;
    }
    @media (max-width: 600px) {
      body {
        padding: 10px;
      }
    }
  </style>
</head>
<body>
  ${rawHtml}
</body>
</html>
    `;
  }
</script>

<!-- Main heading with spacing after navbar -->
<h1 class="mt-5 pt-3" style="opacity: 0; animation: fadeIn 0.5s forwards 0.1s;">Markdown - HTML Converter</h1>

<!-- Converter UI with fade-in animation. -->
<div class="row mb-5" style="opacity: 0; animation: fadeIn 0.5s forwards 0.2s;">
  <div class="col-md-6 d-flex flex-column">
    <h3>Markdown Input</h3>
    <textarea
      class="form-control markdown-input"
      style="height: 400px; overflow-y: auto; opacity: 0; animation: fadeIn 0.5s forwards 0.3s;"
      maxlength="10000"
      bind:value={markdown}
      placeholder="Enter Markdown here (up to 10,000 characters)..."
    ></textarea>
    <label for="file-upload" class="mt-2">Upload .md file</label>
    <input
      id="file-upload"
      type="file"
      accept=".md"
      on:change={handleFileUpload}
      class="form-control"
      bind:this={fileInput}
    />
    {#if error}
      <p class="text-danger mt-2">{error}</p>
    {/if}
    <div class="mt-2">
      <button class="btn btn-primary me-2" on:click={exportHtml}>Export HTML</button>
      <button class="btn btn-secondary me-2" on:click={copyHtml}>Copy HTML</button>
      <button class="btn btn-outline-danger" on:click={clearInput}>Clear</button>
    </div>
  </div>
  <div class="col-md-6 d-flex flex-column">
    <h3>HTML Preview</h3>
    <div class="border p-3 overflow-auto preview-pane" style="height: 400px;">
      {@html html}
    </div>
  </div>
</div>

<!-- Sections for About, How to Use, FAQ. -->
<section id="about" class="section" style="opacity: 0; animation: sectionFade 0.5s forwards 0.4s;">
  <h2>About AxelBase</h2>
  <p>
    **AxelBase** is a *cutting-edge* Markdown to HTML converter designed to empower **content creators**, *developers*, and *educators* with a seamless tool for transforming *structured text* into polished HTML. Built with a focus on *simplicity* and *efficiency*, AxelBase eliminates the complexity of manual HTML coding, offering a *modern, intuitive interface* that caters to both beginners and seasoned professionals. Whether you’re drafting *technical documentation*, crafting *engaging blog posts*, or preparing *educational materials*, AxelBase streamlines the process with real-time previews and effortless exports. Its *responsive design* ensures compatibility across devices, making it a versatile choice for any project.
  </p>
  <p>Here’s why **AxelBase** stands out:</p>
  <ul>
    <li>**Real-Time Conversion**: Instantly see your Markdown rendered as *styled HTML* as you type, ensuring a smooth workflow.</li>
    <li>*Flexible Input Options*: Type Markdown directly or upload *.md files* to quickly import existing content.</li>
    <li>**Customizable Exports**: Download your HTML with *embedded styles* or copy it to your clipboard for immediate use.</li>
    <li>*Elegant UI*: The *dark green* theme, paired with *smooth animations*, provides a professional and visually appealing experience.</li>
    <li>**Broad Compatibility**: Supports a wide range of Markdown syntax, including *headings*, *lists*, *links*, *images*, and *code blocks*.</li>
  </ul>
  <p>
    AxelBase is more than just a converter—it’s a *productivity tool* that saves time and enhances creativity. By automating the conversion process, it allows users to focus on *content quality* rather than technical details. The platform is built with *modern web standards* in mind, ensuring that your HTML output is clean, semantic, and ready for integration into websites, blogs, or documentation systems. Whether you’re a *solo creator* or part of a *collaborative team*, AxelBase’s *user-friendly design* and robust functionality make it an essential tool for transforming ideas into *polished digital content*. Try AxelBase today to experience the ease of converting Markdown to HTML with *precision* and *style*.
  </p>
</section>

<section id="how-to-use" class="section" style="opacity: 0; animation: sectionFade 0.5s forwards 0.6s;">
  <h2>How to Use</h2>
  <p>
    **AxelBase** is designed to be *intuitive* and *efficient*, making Markdown to HTML conversion accessible for users of all skill levels. Whether you’re a *developer* crafting documentation, a *writer* preparing blog content, or an *educator* creating teaching materials, AxelBase simplifies the process with a *clean interface* and *real-time feedback*. Follow these steps to get started and maximize your productivity with this *powerful tool*.
  </p>
  <ul>
    <li>**Input Markdown**: In the *left pane*, type or paste your Markdown text. AxelBase supports up to *10,000 characters*, accommodating everything from short notes to *lengthy documents*.</li>
    <li>*Upload Markdown Files*: Use the *file upload* feature to import .md files directly, saving time when working with existing content.</li>
    <li>**View Real-Time Previews**: As you type, the *right pane* displays your Markdown rendered as *styled HTML*, allowing you to verify formatting instantly.</li>
    <li>**Export or Copy HTML**: Click **Export HTML** to download a fully styled HTML file, or use **Copy HTML** to transfer the output to your clipboard for quick integration.</li>
    <li>*Reset Easily*: The **Clear** button resets both the input and preview panes, letting you start fresh without hassle.</li>
  </ul>
  <p>
    AxelBase’s *responsive design* ensures a seamless experience on desktops, tablets, or mobile devices. The *dark green* theme and *smooth animations* enhance usability, making the conversion process not only efficient but also visually engaging. Whether you’re working on *technical documentation*, *blog posts*, or *educational resources*, AxelBase supports a wide range of Markdown syntax, including *headings*, *lists*, *links*, *images*, *code blocks*, and *blockquotes*. The real-time preview eliminates guesswork, ensuring your output matches your vision. For advanced users, the exported HTML includes *embedded styles* for immediate use, while the clipboard feature supports *quick integration* into other platforms. AxelBase is your go-to tool for transforming *structured text* into *professional HTML* with minimal effort, allowing you to focus on creating *high-quality content* rather than wrestling with code.
  </p>
</section>

<section id="faq" class="section" style="opacity: 0; animation: sectionFade 0.5s forwards 0.8s;">
  <h2>FAQ</h2>
  <p><strong>What Markdown features does AxelBase support?</strong><br>AxelBase supports a comprehensive set of Markdown features, including headings (H1–H6), bold and italic text, ordered and unordered lists, links, images, inline code, code blocks, and blockquotes. This ensures compatibility with standard Markdown syntax, making it ideal for creating documentation, blogs, or educational content. The real-time preview accurately reflects how your Markdown will appear as HTML, so you can verify formatting as you work.</p>
  <p><strong>Is there a limit to the Markdown input?</strong><br>Yes, AxelBase caps input at 10,000 characters to ensure optimal performance and usability. This limit supports a wide range of use cases, from short notes to detailed documentation. If you exceed this limit, you’ll receive a clear error message, and you can trim your content or split it into multiple files for conversion.</p>
  <p><strong>Can I upload Markdown files?</strong><br>Absolutely! AxelBase allows you to upload .md files directly through the file input feature. Once uploaded, the file’s content is parsed and displayed in the input pane, ready for conversion to HTML. This feature is perfect for users working with pre-existing Markdown files, streamlining the process of importing and converting content.</p>
  <p><strong>How do I export or use the converted HTML?</strong><br>After entering or uploading your Markdown, click the Export HTML button to download a styled HTML file, complete with embedded CSS for consistent formatting. Alternatively, use the Copy HTML button to copy the HTML output to your clipboard, allowing for quick pasting into other applications, websites, or content management systems.</p>
  <p><strong>Is AxelBase suitable for mobile devices?</strong><br>Yes, AxelBase’s responsive design ensures a seamless experience across desktops, tablets, and smartphones. The interface adapts to different screen sizes, maintaining functionality and visual appeal, so you can convert Markdown to HTML on the go with ease.</p>
</section>

<br/><br/><br/>

<style>
  /* Local styles for page-specific elements. */
  .preview-pane {
    background-color: #f8f9fa;
    min-height: 200px;
  }

  .markdown-input {
    font-family: monospace;
    white-space: pre-wrap;
  }

  .markdown-input::selection {
    background: yellow;
  }
</style>