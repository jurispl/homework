<template>
  <button
      type="button"
      class="dropdown-item"
      :class="color"
      @click="$emit('action')"
      :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppDropdownItem",
  emits: ['action'],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
      // validator(value){
      //   return [].includes(value);
      // }
    }
  }
}
</script>

<style scoped>

</style>
