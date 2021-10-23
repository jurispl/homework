<template>
  <div class="step-content">
    <div class="step-icon">
      <div class="step-icon-state" :class="status">
        <div class="step-icon-label-text" :class="status">{{ id }}</div>
      </div>
    </div>

    <div class="step-label">
      <div class="step-label-text">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppStepperStep",
  props: {
    title: {
      type: String,
    },
    status: {
      type: String,
      default: '',
      validator(value) {
        return ['fulfilled', 'active', 'disabled'].includes(value);
      }
    },
    id: {
      type: Number,
    }
  }
}
</script>

<style scoped>

</style>
