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
    <DTooltip title="tooltip message">
      <p>show tooltip</p>
    </DTooltip>
    <DPopoconfirm
      title="删除此文档吗？"
      content="你可以再回收站中找到删除的文档  你可以再回收站中找到删除的文档"
      ok-text="删除"
      ok-type="danger"
      cancel-text="取消"
      @confirm="confirm"
      @cancel="cancel"
    >
      <DButton>test Popoconfirm</DButton>
    </DPopoconfirm>
  </main>
</template>

<script lang="ts" setup>
  import { ref, h } from 'vue'
  import { DButton, DPopover, DTooltip, DPopoconfirm } from '../src'
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

  const confirm = () => {
    console.log('confirm')
  }
  const cancel = () => {
    console.log('cancel')
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
