<script setup>
defineProps({
  specs: { type: Array, required: true },
})
</script>

<template>
  <section id="technical-specs" class="section section-alt">
    <div class="section-heading">
      <p class="eyebrow">Technical Specifications</p>
      <h2>Key platform details</h2>
    </div>

    <div class="spec-grid">
      <article v-for="spec in specs" :key="spec.title" class="spec-card">
        <div class="spec-icon">{{ spec.icon }}</div>
        <div>
          <h3>{{ spec.title }}</h3>
          <p class="spec-value">{{ spec.value }}</p>
          <p class="spec-detail">{{ spec.detail }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
