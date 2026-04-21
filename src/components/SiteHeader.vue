<script setup>
defineProps({
  asset: { type: Function, required: true },
  navItems: { type: Array, required: true },
})
</script>

<template>
  <header class="topbar">
    <a class="brand" href="#top">
      <img :src="asset('images/Logo_black.png')" alt="GOFR logo" />
    </a>

    <nav class="nav">
      <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
    </nav>
  </header>
</template>
