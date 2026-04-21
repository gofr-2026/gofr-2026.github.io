<script setup>
defineProps({
  asset: { type: Function, required: true },
  modalResource: { type: Object, default: null },
})

defineEmits(['close'])
</script>

<template>
  <div
    v-if="modalResource"
    class="resource-modal-overlay"
    role="dialog"
    aria-modal="true"
    @click.self="$emit('close')"
  >
    <div class="resource-modal-close-wrap">
      <button type="button" class="resource-modal-close" @click="$emit('close')">×</button>
    </div>
    <article class="resource-modal">
      <div class="resource-modal-header">
        <div>
          <p class="eyebrow">Documentation Card</p>
          <h3>{{ modalResource.label }}</h3>
          <p>{{ modalResource.description }}</p>
        </div>
        <a
          v-if="modalResource.type === 'pdf'"
          class="button secondary resource-open-button"
          :href="asset(modalResource.path)"
          target="_blank"
          rel="noreferrer"
        >
          Open Raw File
        </a>
      </div>

      <div class="resource-modal-body">
        <iframe
          v-if="modalResource.type === 'pdf'"
          :src="asset(modalResource.path)"
          :title="modalResource.label"
        />
        <div v-else class="resource-text-content">
          <p v-for="paragraph in modalResource.content" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>
    </article>
  </div>
</template>
