<template>
  <div class="h-14 p-4">
    <span></span>
  </div>

  <div class="mt-4 fixed top-14 bottom-0 left-0">
    <n-menu
      :options="menuOptioins"
      :collapsed="collapsed"
      :collapsed-width="56"
      :collapsed-icon-size="24"
      :indent="16"
      :icon-size="24"
      @collapse="collapsed = true"
      @expand="collapsed = false"></n-menu>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import type { MenuOption } from 'naive-ui'
import { computed, h } from 'vue'
import AppIcon from './AppIcon.vue'
import IconHome from './icons/IconHome.vue'

const appStore = useAppStore()
const collapsed = computed(() => {
  return appStore.collapsed
})
const menuOptioins: MenuOption[] = [
  {
    key: 'home',
    label: '首页',
    icon: renderIcon(IconHome),
  },
  {
    key: 'per',
    label: '权限管理',
    icon: renderIcon(IconHome),
    children: [
      {
        key: 'user',
        label: '用户管理',
        icon: renderIcon(IconHome),
      },
      {
        key: 'role',
        label: '角色管理',
        icon: renderIcon(IconHome),
      },
    ],
  },
  {
    key: 'message',
    label: '消息中心',
    icon: renderIcon(IconHome),
  },
  {
    key: 'system',
    label: '系统设置',
    icon: renderIcon(IconHome),
  },
]

function renderIcon(icon: any) {
  return () => h(AppIcon, null, { default: () => h(icon) })
}
</script>
