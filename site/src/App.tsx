import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { Nav } from './components/Nav'
import Button3Vue from './demo-code/Button3.vue'

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <Nav />
        <RouterView />
        <Button3Vue />
      </>
    )
  },
})
