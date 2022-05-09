import type { App } from 'vue'
import * as components from './components'

export * from './components'

export default {
  install(app: App) {
    for (const componentKey in components) {
      // @ts-expect-error @ts-expect-error
      const component = components[componentKey]
      if (component.install) {
        component.install(app)
      }
    }
    return app
  },
}
