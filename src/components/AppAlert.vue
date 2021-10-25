<template>
  <div
      class="alert"
      role="alert"
      :class="type"
  >
    <div>
      <h4 class="alert-heading">
        {{ title }}
      </h4>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAlert",
  props:{
    title: String,
    text: String,
    type: {
      type: String,
      default: 'primary',
      required: false,
      validator(val) {
        return ['danger', 'primary', 'success', 'info'].includes(val);
      }
    },
    closable: {
      type: Boolean,
      default: false,
      required: false,
    }
  },
}
</script>

<style scoped>

</style>
