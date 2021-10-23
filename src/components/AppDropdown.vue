<template>
  <div @click="toggle"  class="toggle-content">
    <!--    <slot name="toggle"></slot>-->
    <button  type="button" class="btn btn-outline dropdown-toggle _show">Work</button>
    <slot name="default" :status="state"></slot>
  </div>
</template>

<script>
export default {
  name: "AppDropdown",
  // provide() {
  //   return {
  //     dropdownState: this.dropdownStates,
  //   }
  // },
  data() {
    return {
      state: false,
    }
  },
  methods: {
    toggle() {
      console.log('toggle', this.dropdownStates);
      this.state = !this.state;
    }
  },
}
</script>

<style scoped>

</style>
