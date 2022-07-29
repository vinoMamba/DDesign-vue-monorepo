import { createApp } from 'vue'
import { App } from './App'
import { setupRouter } from './router'
import './index.module.scss'
import '@vino/dt-design/es/style.css'

function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  app.mount('#app')
}
bootstrap()
