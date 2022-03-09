<template>
  <n-layout has-sider class="fixed top-0 right-0 bottom-0 left-0">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed="collapsed"
      @collapse="collapsed = true"
      @expand="collapsed = false">
      <the-drawer></the-drawer>
    </n-layout-sider>

    <n-layout>
      <n-layout-header>
        <the-header></the-header>
      </n-layout-header>
      <n-layout-content class="p-4">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import { computed } from 'vue'

const appStore = useAppStore()
const collapsed = computed(() => {
  return appStore.collapsed
})
</script>
