<script setup>
defineProps({
  asset: { type: Function, required: true },
  awards: { type: Array, required: true },
})
</script>

<template>
  <section class="section section-alt">
    <div class="section-heading">
      <p class="eyebrow">Awards &amp; Achievement</p>
      <h2>Recognition</h2>
    </div>

    <div class="awards-grid">
      <article v-for="award in awards" :key="award.title" class="award-card">
        <div class="award-photo-placeholder">
          <img v-if="award.photo" :src="asset(award.photo)" :alt="award.title" />
          <span v-else>Add award photo</span>
        </div>
        <p>{{ award.title }}</p>
        <p v-if="award.detail" class="award-detail">{{ award.detail }}</p>
      </article>
    </div>
  </section>
</template>
