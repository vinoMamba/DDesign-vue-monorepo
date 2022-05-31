import type { App, Plugin } from 'vue'
import UserTree from './UserTree'

UserTree.install = (app: App) => {
  app.component(UserTree.name, UserTree)
  return app
}

export default UserTree as typeof UserTree & Plugin
