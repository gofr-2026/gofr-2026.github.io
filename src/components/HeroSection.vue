<script setup>
defineProps({
  asset: { type: Function, required: true },
  content: { type: Object, required: true },
  repoLinks: { type: Array, required: true },
})
</script>

<template>
  <section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">{{ content.eyebrow }}</p>
      <h1>
        {{ content.titlePrefix }}
        <span>{{ content.titleHighlight }}</span>
      </h1>
      <p class="hero-text">{{ content.text }}</p>

      <div class="hero-actions">
        <a class="button primary" href="#technical-specs">Technical Specs</a>
        <a class="button secondary" href="#resources">Open Resources</a>
      </div>

      <ul class="hero-links">
        <li v-for="link in repoLinks" :key="link.label">
          <a :href="link.href" :target="link.href.startsWith('http') ? '_blank' : '_self'">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>

    <div class="hero-visual">
      <div class="hero-card hero-card-main">
        <img :src="asset('images/GOFR.png')" alt="GOFR wordmark" />
      </div>
      <div class="hero-card hero-card-side">
        <img :src="asset('images/workflow.png')" alt="GOFR workflow" />
        <p>From order intake to in-aisle execution.</p>
      </div>
    </div>
  </section>
</template>
