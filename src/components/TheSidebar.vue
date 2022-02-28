<template>
  <div class="h-12 p-4">
    <a>Logo</a>
  </div>
  <div class="h-full pt-4">
    <n-menu
      :options="appStore.menus"
      :collapsed="collapsed"
      :collapsed-width="48"
      :collapsed-icon-size="16"
      :icon-size="16"
      :indent="16"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    ></n-menu>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { computed } from 'vue';

const appStore = useAppStore()
const collapsed = computed(() => { return appStore.collapsed })


</script>
