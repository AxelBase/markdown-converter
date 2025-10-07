<!-- src/routes/+layout.svelte -->
<!-- Global layout for the app. Imports Bootstrap CSS/JS and global styles. -->
<!-- Added: Navbar with links, logo, brand name, Buy Me a Coffee button with dropdown. -->
<!-- Footer with copyright and links. -->
<!-- Dark green theme integrated via app.css. -->
<!-- Fix: Use {base}/static/AxelLab-Logo.ico for favicon path. -->
<!-- Enhanced: Added fade-in animations to navbar and footer. -->
<!-- Updated: Footer set to position: fixed to stay at bottom of viewport. -->

<script>
  import { browser } from '$app/environment';
  import { base } from '$app/paths'; // Import base for correct asset paths.
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '../app.css'; // Global styles.

  // Dynamically import Bootstrap JS only in browser.
  if (browser) {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }

  const currentYear = new Date().getFullYear(); // Dynamic current year for footer.
</script>

<!-- Navbar: Fixed top, dark green theme, hovering effects. -->
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <!-- Left: Logo and Brand Name. -->
    <a class="navbar-brand" href="{base}">
      <img src="{base}/AxelLab-Logo.ico" alt="Logo" width="30" height="30" class="d-inline-block align-text-top" />
      AxelBase
    </a>

    <!-- Buy Me a Coffee button with dropdown. -->
    <div class="dropdown me-auto">
      <button class="btn buy-coffee-btn dropdown-toggle" type="button" id="coffeeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        Buy Me a Coffee
      </button>
      <ul class="dropdown-menu" aria-labelledby="coffeeDropdown">
        <li><a class="dropdown-item" href="https://paypal.me/AxelLab427/amount=1" target="_blank" rel="noopener noreferrer">$1</a></li>
        <li><a class="dropdown-item" href="https://paypal.me/AxelLab427/amount=3" target="_blank" rel="noopener noreferrer">$3</a></li>
        <li><a class="dropdown-item" href="https://paypal.me/AxelLab427/amount=5" target="_blank" rel="noopener noreferrer">$5</a></li>
        <li><a class="dropdown-item" href="https://paypal.me/AxelLab427/amount=10" target="_blank" rel="noopener noreferrer">$10</a></li>
      </ul>
    </div>

    <!-- Right: Nav links. -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="{base}">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{base}#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{base}#how-to-use">How to Use</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{base}#faq">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{base}/blog">Blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Slot for page content. -->
<main class="container">
  <slot />
</main>

<!-- Footer: Fixed bottom, dark green theme. -->
<footer class="footer">
  &copy; AxelBase Markdown to HTML Converter – {currentYear}
  <a href="{base}/privacy">Privacy Policy</a>
  <a href="{base}/terms">Terms and Conditions</a>
</footer>