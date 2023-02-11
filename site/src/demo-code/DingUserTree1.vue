<script lang="ts" setup>
import { DButton, DUserTree } from '@vino/dt-design'
import type { TreeNode } from '@vino/dt-design/es/userTree/type'
import { onMounted, ref } from 'vue'

const mockTree: TreeNode[] = [
  {
    id: '1',
    name: '安徽网钉企业服务中心',
    type: 0,
    peopleCount: 0,
    avatar: null,
    checked: false,
    children: [
      {
        id: '11',
        name: 'a',
        type: 0,
        peopleCount: 0,
        avatar: null,
        checked: false,
        children: [],
      },
      {
        id: '12',
        name: 'b',
        type: 0,
        peopleCount: 0,
        avatar: null,
        checked: false,
        children: [],
      },
      {
        id: '13',
        name: 'c',
        type: 0,
        peopleCount: 0,
        avatar: null,
        checked: false,
        children: [],
      },
      {
        id: '14',
        name: 'd',
        type: 0,
        peopleCount: 0,
        avatar: null,
        checked: false,
        children: [],
      },
      {
        id: '15',
        name: 'user1',
        type: 1,
        peopleCount: 0,
        avatar: null,
        checked: false,
        children: [],
      },
      {
        id: '16',
        name: 'user2',
        type: 1,
        peopleCount: 0,
        avatar: null,
        checked: false,
        children: [],
      },
      {
        id: '17',
        name: 'user3',
        type: 1,
        peopleCount: 0,
        avatar: null,
        checked: false,
        children: [],
      },
    ],
  },
]

const treeData = ref<TreeNode[]>([])
const checked = ref<TreeNode[]>([])
const visibleRef = ref(false)
const open = () => {
  visibleRef.value = true
}
onMounted(() => {
  setTimeout(() => {
    treeData.value = mockTree
  }, 3000)
})
</script>

<template>
  {{ checked }}
  <br>
  <DButton @click="open">
    open user tree
  </DButton>
  <DUserTree v-model:visible="visibleRef" v-model:checked="checked" :tree-data="treeData" />
</template>

<style scoped></style>
