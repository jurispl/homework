<template>
  <ul class="dropdown-menu" :class="{show:status}">
    <li>
      <slot></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AppDropdownMenu",
  props: {
    status:{
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style scoped>

</style>
