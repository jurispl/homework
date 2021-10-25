<template>
  <app-stepper>
    <template #header>
      <app-stepper-header :steps="steps" active-step="0"></app-stepper-header>
    </template>
    <template #default>
      <form @submit.prevent="sendForm">
        <div class="between">
          <div class="stepper-content-top">
            <h2 class="stepper-title">Personal info</h2>

            <step-one></step-one>

          </div>

          <div class="stepper-content-footer">
            <div class="to-column">
              <button type="submit" class="btn primary s-lg">Continue</button>
            </div>
          </div>
        </div>

      </form>
    </template>
  </app-stepper>
</template>

<script>
import AppStepper from "@/components/AppStepper";
import AppStepperHeader from "@/components/AppStepperHeader";
import {mapMutations} from 'vuex'
import StepOne from "@/views/steps/StepOne";

export default {
  name: "FormPersonalInfo",
  components: {StepOne, AppStepperHeader, AppStepper},
  inject: ['steps', 'phones'],
  methods: {
    ...mapMutations('user', ['addPhone', 'deletePhones']),
    sendForm() {
      this.deletePhones();
      this.phones.forEach(phone => {
        if (phone.value) {
          this.addPhone({[phone.type]: phone.value})
        }
      });

      this.$router.push('/form/membership');
    },
  },
}
</script>

<style scoped>

</style>
