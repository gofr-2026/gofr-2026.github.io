<script setup>
defineProps({
  asset: { type: Function, required: true },
  currentPhoto: { type: Object, required: true },
  resourceGroups: { type: Array, required: true },
})

defineEmits(['open-resource', 'next-photo', 'previous-photo'])
</script>

<template>
  <section id="resources" class="section">
    <div class="section-heading">
      <p class="eyebrow">Resources</p>
      <h2>Reports, Documentations, and Galleries</h2>
    </div>

    <div class="resource-list-grid">
      <article v-for="group in resourceGroups" :key="group.category" class="resource-list-card">
        <h3>{{ group.category }}</h3>
        <ul class="resource-link-list">
          <li v-for="item in group.links" :key="item.label">
            <button type="button" class="resource-link-button" @click="$emit('open-resource', item)">
              {{ item.label }}
            </button>
          </li>
        </ul>
      </article>
      <p></p>
    </div>

    <div class="resource-media-grid">
      <article class="gallery-card">
        <div class="gallery-header">
          <div>
            <p class="eyebrow">Photos</p>
            <h3>Photo Gallery</h3>
          </div>
          <div class="gallery-controls">
            <button type="button" @click="$emit('previous-photo')">←</button>
            <button type="button" @click="$emit('next-photo')">→</button>
          </div>
        </div>

        <div class="gallery-stage">
          <img v-if="currentPhoto.image" :src="asset(currentPhoto.image)" :alt="currentPhoto.title" />
          <div v-else class="gallery-placeholder">
            <span>{{ currentPhoto.title }}</span>
          </div>
        </div>

        <p class="gallery-caption">{{ currentPhoto.caption }}</p>
      </article>

      <article class="video-card">
        <p class="eyebrow">Video</p>
        <h3>GOFR demo video</h3>
        <div class="video-embed">
          <iframe
            src="https://www.youtube.com/embed/yoCo3-0eruo"
            title="GOFR demo video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
        <p>
          Watch the project demo and follow our team updates on
          <a href="https://www.youtube.com/@GOFR-team21" target="_blank" rel="noreferrer">YouTube</a>.
        </p>
      </article>
    </div>
  </section>
</template>
