import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import RouterMap from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: RouterMap,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
