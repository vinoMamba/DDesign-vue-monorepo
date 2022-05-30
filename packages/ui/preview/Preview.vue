<template>
  <main>
    <DDingTree v-model:visible="visibleRef" />
    <DButton @click="toggle">按钮</DButton>
  </main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { DDingTree, DButton } from '../src'
  const visibleRef = ref(false)
  function toggle() {
    visibleRef.value = !visibleRef.value
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
