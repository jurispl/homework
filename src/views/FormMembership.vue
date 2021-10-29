<template>
  <app-stepper>
    <template #header>
      <app-stepper-header :steps="steps" active-step="1"></app-stepper-header>
    </template>
    <template #default>
      <form @submit.prevent>
        <div class="between">
          <div class="stepper-content-top">
            <h2 class="stepper-title">Membership</h2>

            <step-two
                ref="membership"
                :getGroupFields="fromStore('membership')"
            ></step-two>

          </div>

          <div class="stepper-content-footer">
            <div class="to-column">
              <button @click="$router.push('/form/personal')" type="button" class="btn outline s-lg">Back</button>
              <button @click="sendForm" type="button" class="btn primary s-lg">Continue</button>
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
import formMixin from'@/mixin/formMixin';
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "FormMembership",
  mixins: [formMixin],
  components: {StepTwo, AppStepperHeader, AppStepper},
  inject: ['steps'],
  computed: {
    ...mapGetters('user', ['getForm']),
  },
  methods: {
    ...mapMutations('user', ['setForm']),
    sendForm() {
      const fromRef = JSON.parse(JSON.stringify(this.$refs.membership.temporaryForm))
      this.setForm({value: fromRef});
      this.$router.push('/form/overview');
    },
  },
}
</script>

<style scoped>

</style>
