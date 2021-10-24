<template>
  <div class="stepper-header">

    <div
        class="step-header"
        v-for="({title, id}, index) in steps"
        :key="id"
    >
      <div
          class="step-horizontal-line"
          :class="getStatus(index)"
          v-if="index !== 0"
      ></div>
      <app-stepper-step
          :title="title"
          :status="getStatus(index)"
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
  props: ['steps', 'activeStep'],
  methods: {
    getStatus(index) {
      if (index === +this.activeStep) {
        return 'active'
      } else if (index > +this.activeStep) {
        return 'disabled'
      } else {
        return 'fulfilled';
      }
    }
  },
}
</script>

<style scoped>

</style>
