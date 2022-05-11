import { createApp } from 'vue'
import App from './Preview.vue'
import messagePlugin from '../src/message/messagePlugin'

const app = createApp(App)

app.use(messagePlugin)

app.mount('#app')
