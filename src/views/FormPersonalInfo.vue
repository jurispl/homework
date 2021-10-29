<template>
  <app-stepper>
    <template #header>
      <app-stepper-header :steps="steps" active-step="0"></app-stepper-header>
    </template>
    <template #default>
      <form @submit.prevent>
        <div class="between">
          <div class="stepper-content-top">
            <h2 class="stepper-title">Personal info</h2>

            <step-one
                ref="personal"
                :getGroupFields="fromStore('personal')"
            ></step-one>

          </div>

          <div class="stepper-content-footer">
            <div class="to-column">
              <button type="button" @click="sendForm" class="btn primary s-lg">Continue</button>
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
import StepOne from "@/views/steps/StepOne";
import formMixin from'@/mixin/formMixin';
import {mapMutations, mapGetters} from 'vuex';
export default {
  name: "FormPersonalInfo",
  mixins:[formMixin],
  components: {StepOne, AppStepperHeader, AppStepper},
  inject: ['steps'],
  computed: {
    ...mapGetters('user', ['getForm']),
  },
  methods: {
    ...mapMutations('user', ['setForm']),
    sendForm() {
      // this.$refs.personal.temporaryForm
      const fromRef = JSON.parse(JSON.stringify(this.$refs.personal.temporaryForm))
      // const form = document.getElementById('bob');
      // const formData = new FormData(form);
      //
      // for (let [name, value] of formData.entries()) {
      //   console.log('form Data --', name, value);
      // }

      this.setForm({value: fromRef});


      this.$router.push('/form/membership');
    },
  },
}
</script>

<style scoped>

</style>
