import { createApp } from 'vue'
import messagePlugin from '@vino/dt-design'
import App from './App.vue'

const app = createApp(App)
app.use(messagePlugin)
app.mount('#app')
