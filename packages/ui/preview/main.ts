import { createApp } from 'vue'
import messagePlugin from '../src/message/messagePlugin'
import App from './Preview.vue'

const app = createApp(App)

app.use(messagePlugin)

app.mount('#app')
