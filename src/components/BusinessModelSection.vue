<script setup>
defineProps({
  intro: { type: Object, required: true },
  rows: { type: Array, required: true },
})
</script>

<template>
  <section class="section">
    <div class="section-heading">
      <p class="eyebrow">Potential Business Model</p>
      <h2>Robot-as-a-Service turn prototype into real business</h2>
    </div>

    <div class="business-overview">
      <article class="leasing-card">
        <p class="leasing-title">{{ intro.leasingTitle }}</p>
        <p class="leasing-subtitle">{{ intro.leasingSubtitle }}</p>
        <p class="leasing-price">{{ intro.leasingPrice }}</p>
      </article>

      <article class="business-summary-card">
        <div class="business-summary-column">
          <h3>Revenue Streams</h3>
          <div v-for="item in intro.revenueStreams" :key="item.title" class="business-summary-item">
            <p class="business-summary-label">{{ item.title }}</p>
            <p class="business-summary-text">{{ item.detail }}</p>
            <p v-if="item.note" class="business-summary-note">{{ item.note }}</p>
          </div>
        </div>

        <div class="business-summary-column">
          <h3>Market Potential</h3>
          <ul class="business-summary-list">
            <li v-for="item in intro.marketPotential" :key="item">{{ item }}</li>
          </ul>
          <div class="business-summary-sources">
            <p v-for="source in intro.sources" :key="source">{{ source }}</p>
          </div>
        </div>
      </article>
    </div>

    <div class="business-table-card">
      <table class="business-table">
        <thead>
          <tr>
            <th>Package Level</th>
            <th>Features</th>
            <th>Price per month</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.tier">
            <td>{{ row.tier }}</td>
            <td>{{ row.features }}</td>
            <td class="business-price-cell">
              <span v-if="row.badge" class="business-discount-badge">{{ row.badge }}</span>
              <span>{{ row.price }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
