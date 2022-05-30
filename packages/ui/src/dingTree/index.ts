import type { App, Plugin } from 'vue'
import DingTree from './DingTree'

DingTree.install = (app: App) => {
  app.component(DingTree.name, DingTree)
  return app
}

export default DingTree as typeof DingTree & Plugin
