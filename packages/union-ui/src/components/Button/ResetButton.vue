<script lang="ts" setup>
import Button from './Button.vue'
import { RestSvg } from '../SvgIcon';
</script>

<template>
  <Button>
    <template #prefix-icon>
      <RestSvg />
    </template>
    重置
  </Button>
</template>
