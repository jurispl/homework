<template>
  <div
      class="alert"
      role="alert"
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
      default: 'alert-info',
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
