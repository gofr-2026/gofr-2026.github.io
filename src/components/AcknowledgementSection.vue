<script setup>
defineProps({
  acknowledgements: { type: Array, required: true },
})
</script>

<template>
  <section class="section">
    <div class="section-heading">
      <p class="eyebrow">Acknowledgement</p>
      <h2>Support behind the project</h2>
    </div>

    <div class="ack-grid">
      <article v-for="item in acknowledgements" :key="item.title" class="ack-card">
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
      </article>
    </div>
  </section>
</template>
