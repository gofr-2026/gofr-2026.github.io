<script setup>
defineProps({
  stats: { type: Array, required: true },
  panels: { type: Array, required: true },
})
</script>

<template>
  <section id="overview" class="section">
    <div class="section-heading">
      <p class="eyebrow">Why GOFR</p>
      <h2>Built for the daily friction points of modern grocery operations.</h2>
    </div>

    <div class="stats-grid">
      <article v-for="stat in stats" :key="stat.value" class="stat-card">
        <h3>{{ stat.value }}</h3>
        <p class="stat-label">{{ stat.label }}</p>
        <p class="stat-detail">{{ stat.detail }}</p>
        <a class="stat-source" :href="stat.sourceHref" target="_blank" rel="noreferrer">
          {{ stat.sourceLabel }} ↗
        </a>
      </article>
    </div>

    <div class="two-column-intro">
      <div v-for="panel in panels" :key="panel.title">
        <h3>{{ panel.title }}</h3>
        <p>{{ panel.text }}</p>
      </div>
    </div>
  </section>
</template>
