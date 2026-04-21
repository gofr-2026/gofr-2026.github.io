<script setup>
defineProps({
  footerLinks: { type: Array, required: true },
})
</script>

<template>
  <footer class="footer">
    <div>
      <p class="footer-brand">GOFR</p>
      <p>Grocery Operations &amp; Fulfillment Robot</p>
    </div>
    <div class="footer-meta">
      <p>2026 © GOFR. All rights reserved.</p>
      <p><a href="mailto:gofrbu2026@gmail.com">gofrbu2026@gmail.com</a></p>
    </div>
    <div class="footer-links">
      <a v-for="link in footerLinks" :key="link.label" :href="link.href" target="_blank" rel="noreferrer">
        {{ link.label }}
      </a>
    </div>
  </footer>
</template>
