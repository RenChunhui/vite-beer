<template>
  <picture>
    <source type="image/webp" srcset="" />
    <img :src="src" :alt="alt" loading="lazy" />
  </picture>
</template>

<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
})
</script>
