<script lang="ts" setup>

withDefaults(defineProps<{ type?: 'primary' }>(), {
  type: undefined
})


</script>

<template>
  <button class="union-button" :class="type">
    <span class="prefix-icon" v-if="$slots['prefix-icon']">
      <slot name="prefix-icon"></slot>
    </span>
    <span v-if="$slots.default">
      <slot />
    </span>
    <span class="suffix-icon" v-if="$slots['suffix-icon']">
      <slot name="suffix-icon"></slot>
    </span>
  </button>
</template>

<style lang="less" scoped>
@primary-color : #2275FF;

.union-button {
  height: 30px;
  padding: 0 28px 0 28px;
  line-height: 30px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(25, 36, 41, 0.4);
  border-radius: 4px;

  &.primary {
    background-image: linear-gradient(-44deg, #2275FF 0%, #6740FF 100%);
    border: 0;
    color: #FFFFFF;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);

    .prefix-icon,
    .suffix-icon {
      fill: #FFFFFF;
    }

    &:hover {
      color: #fff;
      background-image: linear-gradient(-44deg, #4e91fd 0%, #714efd 100%);

      .prefix-icon,
      .suffix-icon {
        fill: #FFFFFF;
      }
    }
  }


  &:hover {
    border-color: @primary-color ;
    color: @primary-color;

    .prefix-icon,
    .suffix-icon {
      fill: @primary-color;
    }
  }

  &:focus {
    outline: none;
  }

  .prefix-icon {
    margin-right: 8px;
  }

  .suffix-icon {
    margin-left: 8px;
  }
}
</style>
