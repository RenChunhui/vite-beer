<template>
  <n-config-provider>
    <router-view></router-view>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { useAppStore } from './store/app'
import { darkTheme } from 'naive-ui'

const appStore = useAppStore()
</script>
