<template>

  <div class="modal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h2 class="modal-title">{{ title }}</h2>
          <button @click="$emit('close')" type="button" class="modal-close" aria-label="Close"></button>
        </div>
        <div class="modal-content">
          <p>---- Content ----</p>
          <button type="button" class="btn primary s-lg">Continue</button>
        </div>
      </div>
    </div>
  </div>
  <div class="backdrop" @click="$emit('close')"></div>
</template>

<script>
export default {
  name: "AppModal",
  emits: ['close'],
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>


</style>
