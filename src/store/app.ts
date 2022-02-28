import { TreeOption } from 'naive-ui'
import { defineStore } from 'pinia'

type AppOptions = {
  router: {
    /** 白名单 */
    whiteList: string[],
    /** 登录页地址 */
    login: string,
    /** 默认页 */
    default: string
  },
  /** 侧栏开关 */
  collapsed: boolean,
  menus: TreeOption[]
}

export const useAppStore = defineStore('app', {
  state: () => ({
    router: {
      whiteList: [],
      login: '/login',
      default: '/home'
    },
    collapsed: false,
    menus: []
  } as AppOptions)
})
