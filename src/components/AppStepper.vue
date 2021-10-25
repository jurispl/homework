<template>
  <div class="stepper">
    <div v-if="$slots.header" class="stepper-header">
      <slot name="header"></slot>
    </div>
    <div v-if="$slots.alert" class="stepper-alert-container">
      <slot name="alert"></slot>
    </div>

    <div class="stepper-content">
      <slot name="default"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "AppStepper"
}
</script>

<style scoped>

</style>
