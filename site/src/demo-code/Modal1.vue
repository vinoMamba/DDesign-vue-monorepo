<script lang="ts" setup>
import { DButton, DModal } from '@vino/dt-design'
import { ref } from 'vue'
const visibleRef = ref(false)
const openModal = () => {
  visibleRef.value = !visibleRef.value
}
</script>

<template>
  <DButton @click="openModal">
    open modal
  </DButton>
  <DModal v-model:visible="visibleRef">
    <template #title>
      提示
    </template>
    <template #content>
      <p>告诉用户当前状态，遇到的问题解决办法，接下来的操作会发生什么</p>
    </template>
  </DModal>
</template>

<style scoped></style>
