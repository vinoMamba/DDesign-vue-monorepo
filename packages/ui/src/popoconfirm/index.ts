import type { App, Plugin } from 'vue'
import Popoconfirm from './Popoconfirm'

Popoconfirm.install = (app: App) => {
  app.component(Popoconfirm.name, Popoconfirm)
  return app
}

export default Popoconfirm as typeof Popoconfirm & Plugin
