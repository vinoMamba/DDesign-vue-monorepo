<script lang="ts" setup>
import { DInput } from '@vino/dt-design'
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <DInput v-model:value="value" placeholder="Basic usage" />
</template>

<style scoped></style>
