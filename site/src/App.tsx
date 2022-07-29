import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export const App = defineComponent({
  setup() {
    return () => (
      <div>
        <RouterLink to={'/home'}>home</RouterLink>
        <RouterLink to={'/doc'}>doc</RouterLink>
        <RouterView />
      </div>
    )
  },
})
