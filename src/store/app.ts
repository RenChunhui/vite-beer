import type { GlobalThemeOverrides } from 'naive-ui'
import { defineStore } from 'pinia'

const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#161616',
    infoColor: '#4589ff',
    successColor: '#24a148',
    warningColor: '#f1c21b',
    errorColor: '#da1e28',
  },
  Layout: {},
}

export const useAppStore = defineStore('app', {
  state: () => ({
    router: {
      whiteList: [],
      login: '/login',
      default: '/home',
    },
    collapsed: false,
    theme: darkThemeOverrides,
  }),
})
