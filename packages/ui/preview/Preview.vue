<template>
  <main>
    <h1>title h1</h1>
    <DPopover placement="leftBottom">
      <template #title>
        <span>Title</span>
      </template>
      <template #content>
        <span>content</span>
      </template>
      <DButton>按钮</DButton>
    </DPopover>
  </main>
</template>

<script lang="ts" setup>
  import { DButton, DPopover } from '../src'
</script>
<style scoped>
  main {
    padding: 100px;
  }
</style>
