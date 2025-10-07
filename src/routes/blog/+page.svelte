<!-- src/routes/blog/+page.svelte -->
<!-- Blog index page: Displays 7 anchor posts with previews and links to individual landing pages. -->
<!-- Uses dark green theme from app.css. -->

<script>
  import { base } from '$app/paths'; // For linking to post pages.
</script>

<section class="section">
  <h1>AxelBase Blog</h1>
  <p>Welcome to the AxelBase Blog, where we explore topics related to Markdown, HTML conversion, content creation, and web development tools. Browse our latest posts below.</p>
</section>

<section class="section">
  <h2>Featured Posts</h2>
  <ul>
    <li>
      <a href="{base}/blog/posts/post1">Introduction to Markdown Basics</a>
      <p>A beginner's guide to understanding Markdown syntax and its applications in content creation.</p>
    </li>
    <li>
      <a href="{base}/blog/posts/post2">The Benefits of Converting Markdown to HTML</a>
      <p>Explore how automated conversion tools like AxelBase can streamline your workflow and enhance productivity.</p>
    </li>
    <li>
      <a href="{base}/blog/posts/post3">Advanced Markdown Features for Power Users</a>
      <p>Dive into complex Markdown elements and how they translate to rich HTML output.</p>
    </li>
    <li>
      <a href="{base}/blog/posts/post4">Use Cases for Developers with AxelBase</a>
      <p>Real-world examples of how developers can leverage AxelBase in their projects.</p>
    </li>
    <li>
      <a href="{base}/blog/posts/post5">Tips for Efficient Markdown to HTML Conversion</a>
      <p>Best practices to optimize your conversion process and avoid common pitfalls.</p>
    </li>
    <li>
      <a href="{base}/blog/posts/post6">Common Mistakes in Markdown and How to Fix Them</a>
      <p>Identify frequent errors in Markdown usage and learn how to correct them for flawless HTML.</p>
    </li>
    <li>
      <a href="{base}/blog/posts/post7">The Future of Content Tools like AxelBase</a>
      <p>Insights into emerging trends in web content tools and what’s next for Markdown converters.</p>
    </li>
  </ul>
</section>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  li:hover {
    transform: translateY(-5px);
  }
  a {
    font-weight: bold;
    color: var(--dark-green);
    text-decoration: none;
  }
  a:hover {
    color: var(--light-green);
  }
</style>