<template>
  <app-stepper>

    <template #header>
      <app-stepper-header :steps="steps" :active-step="activeStep"></app-stepper-header>
    </template>

    <template #alert>
      <app-alert
          v-if="getAlert.show"
          :title="getAlert.title"
          :text="getAlert.text"
          :type="getAlert.type"
          closable
          @close="alertClose"
      ></app-alert>
    </template>

    <template #default>
      <router-view></router-view>
    </template>

  </app-stepper>
</template>

<script>
import AppStepper from "@/components/AppStepper";
import AppStepperHeader from "@/components/AppStepperHeader";
import AppAlert from "@/components/AppAlert";
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: "Form",
  components: {AppAlert, AppStepperHeader, AppStepper},
  computed: {
    ...mapGetters('alert', ['getAlert']),
    activeStep(){
      return this.$router.currentRoute.value.meta['activeStep']
    }
  },
  data() {
    return {
      steps: [
        {
          title: 'Personal info',
          status: 'active',
          id: 1,
        },
        {
          title: 'Membership',
          status: 'disabled',
          id: 2,
        },
        {
          title: 'Overview',
          status: 'disabled',
          id: 3,
        },
      ],
    }
  },
  methods: {
    ...mapMutations('alert', ['setAlertContent']),
    alertClose() {
      const alert = {
        show: false,
        title: null,
        text: null,
        type: null,
      }
      this.setAlertContent({value: alert});
    },
  }
}
</script>

<style scoped>

</style>
