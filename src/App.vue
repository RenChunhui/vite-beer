<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="appStore.theme">
    <router-view></router-view>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { useAppStore } from './store/app'
import { darkTheme } from 'naive-ui'

const appStore = useAppStore()
</script>
