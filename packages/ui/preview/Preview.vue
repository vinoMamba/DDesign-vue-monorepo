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
    <DButton @click="toggleModalVisible">modal</DButton>
    <DModal v-model:visible="modalVisible" @ok="handleOk">
      <template #title>title</template>
      <template #content>
        <div class="wrapper">
          <div>1</div>
          <div>2</div>
        </div>
      </template>
    </DModal>
    <DInput v-model:value="inputValue" placeholder="Basic usage" />
  </main>
</template>

<script lang="ts" setup>
  import { ref, h } from 'vue'
  import { DButton, DPopover, DTooltip, DPopoconfirm, DModal, DInput } from '../src'
  import { useMessage } from '../src/message/messagePlugin'

  const inputValue = ref('')
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
    message.success('删除成功')
  }
  const cancel = () => {
    message.warning('用户取消删除')
  }
  const modalVisible = ref(false)
  const toggleModalVisible = () => {
    modalVisible.value = !modalVisible.value
  }
  const handleOk = (e: MouseEvent) => {
    console.log(e)
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
