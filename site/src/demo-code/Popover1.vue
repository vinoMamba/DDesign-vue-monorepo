<script lang="ts" setup>
import { DButton, DPopover } from '@vino/dt-design'
</script>

<template>
  <DPopover trigger="hover">
    <template #title>
      title
    </template>
    <template #content>
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    </template>
    <DButton>Hover me</DButton>
  </DPopover>
</template>

<style scoped></style>
