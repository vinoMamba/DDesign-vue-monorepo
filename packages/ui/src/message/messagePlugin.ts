import { inject, type App, h, createApp, type InjectionKey } from 'vue'
import DMessage from './Message'

export interface MessageContextProp {
  success: (message: string) => void
}

const messageSymbolKey: InjectionKey<MessageContextProp> = Symbol('message')

export default {
  install(app: App) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const message: MessageContextProp = {
      success: (message: string) => {
        createApp({
          render() {
            return h(DMessage, {}, message)
          },
        }).mount(div)
      },
    }
    app.provide(messageSymbolKey, message)
  },
}

export function useMessage() {
  const message = inject(messageSymbolKey)
  if (!message) {
    throw new Error('useMessage must be used in a plugin')
  }
  return message
}
