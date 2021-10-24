<template>
  <ul class="dropdown-menu" :class="{show:isOpen}">
    <li
        v-for="(item, index) in items"
        :key="item"
    >
      <slot name="default" :iter="item" :idx="index"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AppDropdownMenu",
  props: {
    isOpen: {
      type: Boolean,
    },
    items: {
      type: Array,
    }
  },
}
</script>

<style scoped>

</style>
