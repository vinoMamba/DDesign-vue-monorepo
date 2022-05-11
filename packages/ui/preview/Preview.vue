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
  </main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { DButton, DPopover } from '../src'
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
