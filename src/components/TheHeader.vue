<template>
  <n-el class="flex items-center w-full h-14 p-4">
    <app-icon icon-size="24" @click="handleClick">
      <icon-menu-fold></icon-menu-fold>
    </app-icon>
    <span class="ml-8">Vite Beer</span>
  </n-el>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

function handleClick() {
  appStore.collapsed = !appStore.collapsed
}
</script>
