import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { Nav } from './components/Nav'

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <Nav />
        <RouterView />
      </>
    )
  },
})
