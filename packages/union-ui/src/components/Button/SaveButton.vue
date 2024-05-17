<script lang="ts" setup>
import Button from './Button.vue'
import { SaveSvg } from '../SvgIcon';
</script>

<template>
  <Button type="primary">
    <template #prefix-icon>
      <SaveSvg />
    </template>
    保存
  </Button>
</template>
