<template>
  <div @click="dropdownOpen = !dropdownOpen;" class="toggle-content">
    <slot name="toggle"></slot>

    <slot name="default" :isOpen="dropdownOpen"></slot>
  </div>
</template>

<script>
export default {
  name: "AppDropdown",
  data() {
    return {
      dropdownOpen: false,
    }
  },
}
</script>

<style scoped>

</style>
