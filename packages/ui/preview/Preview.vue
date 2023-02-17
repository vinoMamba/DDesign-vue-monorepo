<template>
  <main>
    {{ treeData }}
    <DInput v-model:value="inputValue" type="password" @focus="visible = !visible" />
    <DUserTree
      v-model:visible="visible"
      :tree-data="treeData"
      show-user-count
      :multiple="true"
      mode="department"
      v-model:checked="checked"
      @submit="visible = false"
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
    console.log('fffff')
    treeData.value = [
      {
        id: '1',
        name: '部门1',
        type: 0,
        checked: false,
        avatar: null,
        peopleCount: 0,
        children: [
          {
            id: '2',
            name: 'child-1',
            type: 1,
            checked: false,
            avatar: null,
            peopleCount: 0,
            children: [],
          },
          {
            id: '3',
            name: 'child-2',
            type: 0,
            checked: false,
            avatar: null,
            peopleCount: 0,
            children: [],
          },
          {
            id: '4',
            name: 'child-3',
            type: 0,
            checked: false,
            avatar: null,
            peopleCount: 0,
            children: [],
          },
          {
            id: '5',
            name: 'child-5',
            type: 0,
            checked: false,
            avatar: null,
            peopleCount: 0,
            children: [],
          },
        ],
      },
    ]
  }, 0)
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
