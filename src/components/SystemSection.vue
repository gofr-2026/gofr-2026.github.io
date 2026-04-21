<script setup>
defineProps({
  asset: { type: Function, required: true },
  diagrams: { type: Array, required: true },
  workflowSteps: { type: Array, required: true },
})
</script>

<template>
  <section id="system" class="section">
    <div class="section-heading">
      <p class="eyebrow">System Design</p>
      <h2>Architecture, Communication, and Mechanical Package</h2>
    </div>

    <div class="diagram-grid">
      <article v-for="diagram in diagrams" :key="diagram.title" class="diagram-card">
        <img :src="asset(diagram.image)" :alt="diagram.title" />
        <div class="diagram-copy">
          <h3>{{ diagram.title }}</h3>
          <p>{{ diagram.text }}</p>
        </div>
      </article>
    </div>

    <div class="workflow-panel">
      <div class="workflow-copy">
        <p class="eyebrow">Validated Software Path</p>
        <h3>Current production-style demo flow</h3>
        <ol>
          <li v-for="step in workflowSteps" :key="step">{{ step }}</li>
        </ol>
      </div>
      <div class="workflow-image">
        <img :src="asset('images/SystemRun.png')" alt="GOFR Run" />
      </div>
    </div>
  </section>
</template>
