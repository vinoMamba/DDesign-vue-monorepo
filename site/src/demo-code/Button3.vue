<script lang="ts" setup>
  import { DButton } from '@vino/dt-design'
</script>
<template>
  <div class="test">
    <DButton type="primary">primary</DButton>
    <DButton type="primary" disabled>primary(disabled)</DButton>
  </div>
  <div>
    <DButton type="danger">danger</DButton>
    <DButton type="danger" disabled>danger(disabled)</DButton>
  </div>
</template>
<style scoped>
  .test {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
</style>
