import { App } from 'vue'
import RouterMap from './routes'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: RouterMap,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
