<script setup>
import { computed, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import OverviewSection from './components/OverviewSection.vue'
import PlatformSection from './components/PlatformSection.vue'
import SystemSection from './components/SystemSection.vue'
import TechnicalSpecsSection from './components/TechnicalSpecsSection.vue'
import BusinessModelSection from './components/BusinessModelSection.vue'
import SeniorProjectSection from './components/SeniorProjectSection.vue'
import AwardsSection from './components/AwardsSection.vue'
import ResourcesSection from './components/ResourcesSection.vue'
import TeamSection from './components/TeamSection.vue'
import AcknowledgementSection from './components/AcknowledgementSection.vue'
import ResourceModal from './components/ResourceModal.vue'
import SiteFooter from './components/SiteFooter.vue'
import {
  acknowledgements,
  awards,
  businessModelIntro,
  businessModelRows,
  diagrams,
  footerLinks,
  futureItems,
  heroContent,
  marketStats,
  navItems,
  overviewPanels,
  photoSlides,
  platformCards,
  repoLinks,
  resourceGroups,
  seniorProjectPanels,
  teamMembers,
  technicalSpecs,
  workflowSteps,
} from './data/siteContent'

const base = import.meta.env.BASE_URL
const asset = (path) => `${base}assets/${path}`

const resolvedRepoLinks = repoLinks.map((link) => ({
  ...link,
  href: link.href.startsWith('http') || link.href.startsWith('#') ? link.href : asset(link.href),
}))

const resolvedFooterLinks = footerLinks.map((link) => ({
  ...link,
  href: link.href.startsWith('http') ? link.href : asset(link.href),
}))

const resolvedDiagrams = diagrams.map((diagram) => ({
  ...diagram,
  image: diagram.image,
}))

const currentPhotoIndex = ref(0)
const modalResource = ref(null)

const currentPhoto = computed(() => photoSlides[currentPhotoIndex.value])

const openResourceModal = (resource) => {
  modalResource.value = resource
}

const closeResourceModal = () => {
  modalResource.value = null
}

const nextPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % photoSlides.length
}

const previousPhoto = () => {
  currentPhotoIndex.value =
    (currentPhotoIndex.value - 1 + photoSlides.length) % photoSlides.length
}
</script>

<template>
  <div class="site-shell">
    <SiteHeader :asset="asset" :nav-items="navItems" />

    <main id="top">
      <HeroSection :asset="asset" :content="heroContent" :repo-links="resolvedRepoLinks" />
      <OverviewSection :stats="marketStats" :panels="overviewPanels" />
      <PlatformSection :cards="platformCards" />
      <SystemSection :asset="asset" :diagrams="resolvedDiagrams" :workflow-steps="workflowSteps" />
      <TechnicalSpecsSection :specs="technicalSpecs" />
      <BusinessModelSection :intro="businessModelIntro" :rows="businessModelRows" />
      <SeniorProjectSection :panels="seniorProjectPanels" :future-items="futureItems" />
      <AwardsSection :asset="asset" :awards="awards" />
      <ResourcesSection
        :asset="asset"
        :current-photo="currentPhoto"
        :resource-groups="resourceGroups"
        @open-resource="openResourceModal"
        @next-photo="nextPhoto"
        @previous-photo="previousPhoto"
      />
      <TeamSection :asset="asset" :team-members="teamMembers" />
      <AcknowledgementSection :acknowledgements="acknowledgements" />
    </main>

    <ResourceModal :asset="asset" :modal-resource="modalResource" @close="closeResourceModal" />
    <SiteFooter :footer-links="resolvedFooterLinks" />
  </div>
</template>
