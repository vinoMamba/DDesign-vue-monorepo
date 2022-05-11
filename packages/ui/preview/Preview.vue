<template>
  <main>
    <h1>title h1</h1>
    <DPopover placement="topLeft" v-model:show="showRef">
      <template #title>
        <span>Title</span>
      </template>
      <template #content>
        <span>content</span>
        <DButton @click="close">close</DButton>
      </template>
      <DButton>按钮</DButton>
    </DPopover>
    <DButton @click="showMessage">show message</DButton>
    <DButton @click="showMessage1">show message</DButton>
  </main>
</template>

<script lang="ts" setup>
  import { ref, h } from 'vue'
  import { DButton, DPopover } from '../src'
  import { useMessage } from '../src/message/messagePlugin'
  const message = useMessage()
  const showMessage = () => {
    message.success(h('span', {}, 'message success'))
  }
  const showMessage1 = () => {
    message.error(h('span', {}, 'message error'))
  }
  const close = () => {
    showRef.value = !showRef.value
  }
  const showRef = ref(false)
</script>
<style scoped>
  main {
    padding: 100px;
  }
</style>
