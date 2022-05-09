import type { App } from 'vue'
import * as components from './components'

export * from './components'

export default {
  install(app: App) {
    for (const componentKey in components) {
      // eslint-disable-next-line import/namespace
      const component = components[componentKey]
      if (component.install) component.install(app)
    }
    return app
  },
}
