import { useAppStore } from '@/store/app'
import { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const token = localStorage.getItem('Access-Token')
    const app = useAppStore()

    if (token) {
      if (to.path === app.router.login) {
        next({ path: app.router.default })
      } else {
        next()
      }
    } else {
      if (app.router.whiteList.includes(to.name as string)) {
        next()
      } else {
        to.path === app.router.login ? next() : next({ path: app.router.login })
      }
    }
  })

  router.afterEach(() => { })

  router.onError((error: Error) => { })
}
