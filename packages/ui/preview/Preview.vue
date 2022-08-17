<template>
  <main> <DInput v-model:value="inputValue" type="password" /></main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { DInput } from '../src'
  const inputValue = ref('')
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
