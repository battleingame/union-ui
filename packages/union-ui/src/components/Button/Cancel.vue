<script lang="ts" setup>
import Button from './Button.vue'
import { CancelSvg } from '../SvgIcon';
</script>

<template>
  <Button>
    <template #prefix-icon>
      <CancelSvg />
    </template>
    取消
  </Button>
</template>
