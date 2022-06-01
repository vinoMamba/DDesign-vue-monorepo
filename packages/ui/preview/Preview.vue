<template>
  <main>
    {{ checked }}
    <DInput @focus="toggle" />
    <DUserTree
      v-model:visible="visibleRef"
      :tree-data="treeData"
      show-user-count
      mode="andUser"
      :multiple="false"
      v-model:checked="checked"
    />
  </main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { DUserTree, DInput } from '../src'
  import { mockTree } from '../src/userTree/mock'
  import { TreeNode } from '../src/userTree/type'
  const checked = ref()
  const visibleRef = ref(false)
  function toggle() {
    visibleRef.value = !visibleRef.value
  }
  const treeData = ref<TreeNode[]>(mockTree)
</script>
<style scoped>
  main {
    padding: 100px;
  }
  p {
    padding: 0;
    margin: 0;
  }
</style>
