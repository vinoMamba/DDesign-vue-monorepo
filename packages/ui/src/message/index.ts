import type { App, Plugin } from 'vue'
import Message from './Message'
export * as messagePlugin from './messagePlugin'

Message.install = (app: App) => {
  app.component(Message.name, Message)
  return app
}

export default Message as typeof Message & Plugin
