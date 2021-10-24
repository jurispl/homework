<template>
  <div class="form-field">

    <slot name="label" v-if="$slots.label"></slot>

    <div class="form-field-group">
      <slot name="left"></slot>
      <slot name="input"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFormFieldGroup",
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
