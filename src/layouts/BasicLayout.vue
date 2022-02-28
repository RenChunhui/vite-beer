<template>
  <n-layout has-sider class="h-screen">
    <n-layout-sider
      class="w-64"
      bordered
      collapse-mode="width"
      :collapsed="collapsed"
      @collapse="collapsed = true"
      @expand="collapsed = false">
      <the-sidebar></the-sidebar>
    </n-layout-sider>
    <n-layout>
      <n-layout-header class="h-12 flex items-center" bordered>
        <the-header></the-header>
      </n-layout-header>
      <n-layout-content>
        <main class="p-4">
          <the-breadcrumb></the-breadcrumb>
          <router-view></router-view>
        </main>
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
