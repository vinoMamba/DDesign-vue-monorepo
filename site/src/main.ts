import { createApp } from 'vue'
import { messagePlugin } from '@vino/dt-design'
import { App } from './App'
import { setupRouter } from './router'
import '@vino/dt-design/es/style.css'
import './index.module.scss'

function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  app.use(messagePlugin)
  app.mount('#app')
}
bootstrap()
