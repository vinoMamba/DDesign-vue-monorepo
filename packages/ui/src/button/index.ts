import type { App, Plugin } from 'vue'
import Button from './Button'

Button.install = (app: App) => {
  app.component(Button.name, Button)
  return Button
}

export default Button as typeof Button & Plugin
