<template>
  <div class="stepper-header">

    <div
        class="step-header"
        v-for="({title, status}, index) in steps"
        :key="index"
    >
      <div
          class="step-horizontal-line"
          :class="status"
          v-if="index !== 0"
      ></div>
      <app-stepper-step
          :title="title"
          :status="status"
          :id="index+1"
      ></app-stepper-step>
    </div>

  </div>
</template>

<script>
import AppStepperStep from "@/components/AppStepperStep";

export default {
  name: "AppStepperHeader",
  components: {AppStepperStep},
  props: ['steps'],
}
</script>

<style scoped>

</style>
