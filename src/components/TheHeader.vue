<template>
  <div class="w-12 h-12 flex justify-center items-center mr-2">
    <app-icon icon-size="20" class="cursor-pointer" @click="menuClick">
      <icon-menu />
    </app-icon>
  </div>
  <div class="flex-1">
    <span>Title</span>
  </div>
  <div class="w-48 h-12 flex justify-around items-center">
    <app-icon icon-size="20" class="cursor-pointer">
      <icon-search></icon-search>
    </app-icon>
    <app-icon icon-size="20" class="cursor-pointer">
      <icon-notification></icon-notification>
    </app-icon>
    <app-icon icon-size="20" class="cursor-pointer">
      <icon-user-avatar></icon-user-avatar>
    </app-icon>
    <app-icon icon-size="20" class="cursor-pointer">
      <icon-app-switcher></icon-app-switcher>
    </app-icon>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

function menuClick() {
  appStore.collapsed = !appStore.collapsed
}
</script>
