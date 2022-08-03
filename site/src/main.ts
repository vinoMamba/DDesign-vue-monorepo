import { createApp } from 'vue'
import { App } from './App'
import { setupRouter } from './router'
import '@vino/dt-design/es/style.css'
import './index.module.scss'

function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  app.mount('#app')
}
bootstrap()
