<template>
  <app-stepper>
    <template #header>
      <app-stepper-header :steps="steps" active-step="0"></app-stepper-header>
    </template>
    <template #default>
      <form @submit.prevent="sendForm" id="bob">
        <div class="between">
          <div class="stepper-content-top">
            <h2 class="stepper-title">Personal info</h2>

            <step-one
                ref="personal"
                :formStore="formStore"
            ></step-one>

          </div>

          <div class="stepper-content-footer">
            <div class="to-column">
              <router-link to="membership">membership</router-link>
              <br>
              <router-link to="/">Go HOME</router-link>
              <br>
              <button type="button" @click="sendForm" class="btn primary s-lg">Continue</button>
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
import {mapMutations, mapGetters} from 'vuex'
import StepOne from "@/views/steps/StepOne";

export default {
  name: "FormPersonalInfo",
  components: {StepOne, AppStepperHeader, AppStepper},
  inject: ['steps'],
  computed: {
    ...mapGetters('user', ['getForm']),
    formStore(){
      return JSON.parse(JSON.stringify(this.getForm));;
    },
  },
  methods: {
    ...mapMutations('user', ['addPhone', 'deletePhones', 'setForm']),
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


      // this.deletePhones();
      // this.phones.forEach(phone => {
      //   if (phone.value) {
      //     this.addPhone({[phone.type]: phone.value})
      //   }
      // });

      // this.$router.push('/form/membership');getForm
    },
  },
}
</script>

<style scoped>

</style>
