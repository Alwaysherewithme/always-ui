<template>
  <button class="a-button" :class="[buttonType, buttonSize]">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'
// import '../../src/styles/button.scss'

const props = defineProps({
  type: {
    required: false,
    type: String,
    default: 'default'
  },
  size: {
    require: false,
    type: String,
    default: 'default'
  }
})

const buttonType = computed(() => 'a-button--' + props.type)
const buttonSize = computed(() => 'a-button-' + props.size)

</script>

<script>
export default {
  name: 'AButton'
}
</script>

<style>

</style>
