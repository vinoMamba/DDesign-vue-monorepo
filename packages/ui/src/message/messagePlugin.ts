import { type App, type InjectionKey, type VNode, createApp, h, inject } from 'vue'
import DMessage from './Message'

export interface MessageContextProp {
  success: (message: string | VNode, duration?: number) => void
  info: (message: string | VNode, duration?: number) => void
  warning: (message: string | VNode, duration?: number) => void
  error: (message: string | VNode, duration?: number) => void
}
const messageSymbolKey: InjectionKey<MessageContextProp> = Symbol('message')

const renderMessage = (
  type: 'info' | 'success' | 'warning' | 'error',
  message: string | VNode,
  duration?: number,
) => {
  const instance = createApp({
    render() {
      return h(DMessage, { duration, type }, () => message)
    },
  })
  return instance
}
export default {
  install(app: App) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const message: MessageContextProp = {
      info: (message: string | VNode, duration?: number) => {
        renderMessage('info', message, duration).mount(div)
      },
      success: (message: string | VNode, duration?: number) => {
        renderMessage('success', message, duration).mount(div)
      },
      warning: (message: string | VNode, duration?: number) => {
        renderMessage('warning', message, duration).mount(div)
      },
      error: (message: string | VNode, duration?: number) => {
        renderMessage('error', message, duration).mount(div)
      },
    }
    app.provide(messageSymbolKey, message)
  },
}

export function useMessage() {
  const message = inject(messageSymbolKey)
  if (!message)
    throw new Error('useMessage must be used in a plugin')

  return message
}
