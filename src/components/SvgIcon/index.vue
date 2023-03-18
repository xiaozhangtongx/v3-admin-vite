<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <span :class="props.name" class="svg-icon" />
</template>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  border: none;
}
</style>
