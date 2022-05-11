import { inject, type App, h, createApp, type InjectionKey, type VNode } from 'vue'
import DMessage from './Message'

export interface MessageContextProp {
  success: (message: string | VNode, duration?: number) => void
  info: (message: string | VNode, duration?: number) => void
  warning: (message: string | VNode, duration?: number) => void
  error: (message: string | VNode, duration?: number) => void
}
const messageSymbolKey: InjectionKey<MessageContextProp> = Symbol('message')

export default {
  install(app: App) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const message: MessageContextProp = {
      info: (message: string | VNode, duration?: number) => {
        createApp({
          render() {
            return h(DMessage, { duration, type: 'info' }, () => message)
          },
        }).mount(div)
      },
      success: (message: string | VNode, duration?: number) => {
        createApp({
          render() {
            return h(DMessage, { duration, type: 'success' }, () => message)
          },
        }).mount(div)
      },
      warning: (message: string | VNode, duration?: number) => {
        createApp({
          render() {
            return h(DMessage, { duration, type: 'warning' }, () => message)
          },
        }).mount(div)
      },
      error: (message: string | VNode, duration?: number) => {
        createApp({
          render() {
            return h(DMessage, { duration, type: 'error' }, () => message)
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
