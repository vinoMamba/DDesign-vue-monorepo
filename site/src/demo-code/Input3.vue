<script lang="ts" setup>
  import { DInput } from '@vino/dt-design'
  import { ref } from 'vue'
  const value = ref('')
</script>
<template>
  <DInput v-model:value="value" placeholder="input with clear icon" allow-clear />
</template>
<style scoped></style>
