<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="iconSize"
    :height="iconSize"
    viewBox="0 0 32 32"
    :aria-labelledby="iconName"
    role="presentation">
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts" setup>
/** 图标大小，单位 px */
type Size = '16' | '20' | '24' | '32' | '48' | '64' | '96'
const props = defineProps({
  iconName: {
    type: String,
    default: '',
  },
  /** 图标大小 */
  iconSize: {
    type: String as () => Size,
    default: '24',
  },
  /** 图标颜色 */
  iconColor: {
    type: String,
    default: 'currentColor',
  },
})
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>
