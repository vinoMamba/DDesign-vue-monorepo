import type { App, Plugin } from 'vue'
import InputPassword from './InputPassword'

InputPassword.install = (app: App) => {
  app.component(InputPassword.name, InputPassword)
  return app
}

export default InputPassword as typeof InputPassword & Plugin
