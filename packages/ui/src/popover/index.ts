import type { App, Plugin } from 'vue'
import Popover from './Popover'

Popover.install = (app: App) => {
  app.component(Popover.name, Popover)
  return app
}

export default Popover as typeof Popover & Plugin
