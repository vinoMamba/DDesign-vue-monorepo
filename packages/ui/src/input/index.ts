import type { App, Plugin } from 'vue'
import Input from './Input'

Input.install = (app: App) => {
  app.component(Input.name, Input)
  return app
}

export default Input as typeof Input & Plugin
