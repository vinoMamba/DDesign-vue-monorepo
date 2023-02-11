<script lang="ts" setup>
import { ref } from 'vue'
import { DInput, DUserTree } from '../src'
import type { TreeNode } from '../src/userTree/type'
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
      children: [
        {
          id: '2',
          name: 'child-1',
          type: 0,
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

<template>
  <main>
    {{ treeData }}
    <DInput v-model:value="inputValue" type="password" @focus="visible = !visible" />
    <DUserTree
      v-model:visible="visible" v-model:checked="checked" :tree-data="treeData" show-user-count
      mode="department" :multiple="true"
    />
  </main>
</template>

<style scoped>
main {
  padding: 100px;
}

p {
  padding: 0;
  margin: 0;
}
</style>
