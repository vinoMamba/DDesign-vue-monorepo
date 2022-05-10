<template>
  <main>
    <h1>Site</h1>
    <DPopover>
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
