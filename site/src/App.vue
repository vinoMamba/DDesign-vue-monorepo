<script setup lang="ts">
  import { DButton, DPopover } from '@vino/dt-design'
  import '@vino/dt-design/es/style.css'
</script>

<template>
  <h1>Site</h1>
  <DPopover>
    <template #content>
      <p>test</p>
    </template>
    <DButton type="primary">确定</DButton>
  </DPopover>
  <DPopover trigger="hover">
    <template #content>
      <p>test</p>
    </template>
    <DButton type="primary">hover</DButton>
  </DPopover>
</template>
