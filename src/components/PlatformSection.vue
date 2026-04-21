<script setup>
defineProps({
  cards: { type: Array, required: true },
})
</script>

<template>
  <section id="platform" class="section section-alt">
    <div class="section-heading">
      <p class="eyebrow">Platform</p>
      <h2>Our Robot Features</h2>
    </div>

    <div class="platform-grid">
      <article v-for="card in cards" :key="card.title" class="platform-card">
        <div class="platform-card-header">
          <p class="platform-badge">{{ card.badge }}</p>
          <h3>{{ card.title }}</h3>
        </div>
        <p>{{ card.text }}</p>
        <ul>
          <li v-for="bullet in card.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
