<template>
  <app-stepper>
    <template #header>
      <app-stepper-header :steps="steps" active-step="1"></app-stepper-header>
    </template>
    <template #default>
      <form>
        <div class="between">
          <div class="stepper-content-top">
            <h2 class="stepper-title">Membership</h2>

            <step-two></step-two>

          </div>

          <div class="stepper-content-footer">
            <div class="to-column">
              <button @click="$router.push('/form/personal')" type="button" class="btn outline s-lg">Back</button>
              <button @click="$router.push('/form/overview')" type="button" class="btn primary s-lg">Continue</button>
            </div>
          </div>
        </div>

      </form>
    </template>
  </app-stepper>
</template>

<script>
import AppStepperHeader from "@/components/AppStepperHeader";
import AppStepper from "@/components/AppStepper";
import StepTwo from "@/views/steps/StepTwo";

export default {
  name: "FormMembership",
  components: {StepTwo, AppStepperHeader, AppStepper},
  inject: ['steps'],
}
</script>

<style scoped>

</style>
