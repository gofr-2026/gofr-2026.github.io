<script setup>
defineProps({
  asset: { type: Function, required: true },
  teamMembers: { type: Array, required: true },
})
</script>

<template>
  <section id="team" class="section section-alt">
    <div class="section-heading">
      <p class="eyebrow">Team</p>
      <h2>Engineering Team</h2>
    </div>

    <div class="team-hero-photo">
      <img :src="asset('images/Team 21.jpg')" alt="GOFR team photo"/>
    </div>

    <div class="team-grid">
      <article v-for="member in teamMembers" :key="member.name" class="team-member-card">
        <div class="team-member-photo">
          <img v-if="member.photo" :src="asset(member.photo)" :alt="member.name" />
          <span v-else>Add team photo</span>
        </div>
        <h3>{{ member.name }}</h3>
        <p class="team-role">{{ member.role }}</p>
        <p class="team-contact">{{ member.contact }}</p>
        <div v-if="member.links?.length" class="team-links">
          <a
            v-for="link in member.links"
            :key="link"
            :href="link"
            target="_blank"
            rel="noreferrer"
          >
            {{ link }}
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
