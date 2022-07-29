import { createApp } from 'vue'
import './style.css'
import { App } from './App'
import { setupRouter } from './router'

function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  app.mount('#app')
}
bootstrap()
