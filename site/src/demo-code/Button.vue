<script lang="ts" setup>
  import { DButton } from '@vino/dt-design'
</script>
<template>
  <DButton>default</DButton>
  <DButton type="primary">primary</DButton>
  <DButton type="danger">danger</DButton>
</template>
<style>
  :deep(.dtd-button) {
    color: red;
  }
</style>
