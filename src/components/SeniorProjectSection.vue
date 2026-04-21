<script setup>
defineProps({
  panels: { type: Array, required: true },
  futureItems: { type: Array, required: true },
})
</script>

<template>
  <section id="senior-project" class="section">
    <div class="section-heading">
      <p class="eyebrow">Senior Project</p>
      <h2>Our Current Progress & Future Plans</h2>
    </div>

    <div class="senior-grid">
      <article v-for="panel in panels" :key="panel.heading" class="senior-card">
        <h3>{{ panel.heading }}</h3>
        <p>{{ panel.text }}</p>
      </article>
    </div>

    <div class="future-panel">
      <div>
        <p class="eyebrow">Future Development</p>
        <h3>Where GOFR goes next</h3>
      </div>
      <ul>
        <li v-for="item in futureItems" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>
