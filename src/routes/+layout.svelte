<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { browser } from '$app/environment';
  import { base } from '$app/paths';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '../app.css';
  import { fly } from 'svelte/transition';

  if (browser) {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }

  const currentYear = new Date().getFullYear();

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="{base}">
      <img src="{base}/AxelLab-Logo.ico" alt="Logo" width="30" height="30" class="d-inline-block align-text-top" />
      AxelBase
    </a>

    <!-- Buy Me a Coffee button from File 1, adapted to Bootstrap navbar and dark-green theme -->
    <div class="position-relative me-auto" use:clickOutside on:click_outside={closeDropdown}>
      <button
        class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
        on:click={toggleDropdown}
        aria-label="Support options"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
        </svg>
        <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
        <span class="d-sm-none fw-semibold">Coffee</span>
      </button>

      {#if isDropdownOpen}
        <div class="bmac-dropdown mt-2" transition:fly={{ y: -10, duration: 250 }}>
          <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
            <span class="amount">$3</span> One Coffee
          </a>
          <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
            <span class="amount">$5</span> Two Coffees
          </a>
          <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
            <span class="amount">$10</span> Three Coffees
          </a>

          <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
            Custom Amount
          </a>

          <a
            href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
            on:click={closeDropdown}
            class="custom-amount"
          >
            Buy via Crypto (Bitcoin)
          </a>
        </div>
      {/if}
    </div>

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

<main class="container">
  <slot />
</main>

<footer class="footer">
  &copy; AxelBase Markdown to HTML Converter – {currentYear}
  <a href="{base}/privacy">Privacy Policy</a>
  <a href="{base}/terms">Terms and Conditions</a>
</footer>

<style>
  /* Adapted styles from File 1 for the button and dropdown, integrated with File 2's dark-green theme */

  .bmac-button {
    background: var(--light-green); /* Lighter green to stand out */
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .bmac-button:hover {
    background: #ffd700; /* Gold hover to match existing fancy effects */
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  }

  .bmac-button svg {
    transition: transform 0.3s ease;
  }

  .bmac-button:hover svg {
    transform: scale(1.1) rotate(-5deg);
  }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: var(--white);
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(0, 100, 0, 0.2); /* Darker green shadow */
    overflow: hidden;
    border: 1px solid rgba(34, 139, 34, 0.2);
    z-index: 1000;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--text-color);
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--light-green);
    color: var(--white);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--dark-green);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--dark-green);
    border-top: 1px solid #ddd;
    justify-content: center !important;
  }

  .bmac-dropdown .custom-amount:hover {
    background: var(--dark-green);
    color: var(--white);
  }
</style>