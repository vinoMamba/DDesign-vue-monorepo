<script setup lang="ts">
  import { DButton, DPopover, useMessage } from '@vino/dt-design'
  import '@vino/dt-design/es/style.css'
  const message = useMessage()
  const click = () => {
    message.success('成功')
  }
</script>

<template>
  <h1>Site</h1>
  <DPopover>
    <template #content>
      <p>test</p>
    </template>
    <DButton type="primary" @click="click">确定</DButton>
  </DPopover>
  <DPopover trigger="hover">
    <template #content>
      <p>test</p>
    </template>
    <DButton type="primary">hover</DButton>
  </DPopover>
</template>
