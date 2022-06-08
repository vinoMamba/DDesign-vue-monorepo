<template>
  <main>
    <DInput @focus="toggle" v-model:value="inputValue" />{{ inputValue }}
    <DUserTree
      v-model:visible="visibleRef"
      :tree-data="treeData"
      show-user-count
      showAllCheckedButton
      mode="andUser"
      :multiple="false"
      v-model:checked="checked"
    />
  </main>
</template>

<script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue'
  import { DUserTree, DInput } from '../src'
  import { mockTree } from '../src/userTree/mock'
  import { TreeNode } from '../src/userTree/type'
  const checked = ref()
  const inputValue = ref('')
  const visibleRef = ref(false)
  function toggle() {
    visibleRef.value = !visibleRef.value
  }
  const treeData = ref<TreeNode[]>([])
  onMounted(() => {
    treeData.value = mockTree
  })
  watch(checked, (val) => {
    if (val.length > 0) {
      inputValue.value = val[0].name
    } else {
      inputValue.value = ''
    }
  })
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
