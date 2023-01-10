<template>
  <main>
    <DInput v-model:value="inputValue" type="password" @focus="visible = !visible" />
    <DUserTree
      v-model:visible="visible"
      :tree-data="treeData"
      show-user-count
      mode="andUser"
      :ok="handleSubmit"
      :multiple="false"
      v-model:checked="checked"
    />
  </main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { DInput, DUserTree } from '../src'
  import { TreeNode } from '../src/userTree/type'
  const visible = ref(false)
  const checked = ref([])
  const inputValue = ref('')
  const treeData = ref<TreeNode[]>([])
  setTimeout(() => {
    treeData.value = [
      {
        id: '1',
        name: '部门1',
        type: 0,
        checked: false,
        avatar: null,
        peopleCount: 0,
        children: [],
      },
    ]
  }, 4000)
  async function handleSubmit() {
    console.log('确定按钮')
    await new Promise((resolve) => {
      setTimeout(function () {
        resolve(true)
      }, 1000)
    })
  }
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
