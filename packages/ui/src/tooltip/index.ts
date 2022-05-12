import type { App, Plugin } from 'vue'
import Tooltip from './Tooltip'

Tooltip.install = (app: App) => {
  app.component(Tooltip.name, Tooltip)
  return app
}

export default Tooltip as typeof Tooltip & Plugin
