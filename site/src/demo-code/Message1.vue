<script lang="ts" setup>
  /** first you should import useMessage plugin in main.ts
   * import { messagePlugin } from '@vino/dt-design'
   * app.use(messagePlugin)
   **/
  import { DButton, useMessage } from '@vino/dt-design'

  const message = useMessage()
  const showMessge = () => {
    message.success('success')
  }
</script>
<template>
  <DButton @click="showMessge" type="primary">Display normal Message</DButton>
</template>
<style scoped></style>
