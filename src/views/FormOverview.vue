<template>
  <app-stepper>
    <template #header>
      <app-stepper-header :steps="steps" active-step="2"></app-stepper-header>
    </template>
    <template #default>

      <div class="between">
        <div class="stepper-content-top">
          <h2 class="stepper-title">Overview:</h2>

          <div>
            <ul class="list-group">
              <li class="list-group-item">
                <div class="item-label">First name:</div>
                {{ user.firstName }}
              </li>
              <li class="list-group-item">
                <div class="item-label">Last name:</div>
                {{ user.lastName }}
              </li>
              <li class="list-group-item">
                <div class="item-label">E-mail:</div>
                {{ user.email }}
              </li>
              <li class="list-group-item">
                <div class="item-label">Membership:</div>
                {{ user.membership }}
              </li>
              <template
                  v-for="phone in phones"
                  :key="phone"
              >
                <li
                    v-if="phone.value"
                    class="list-group-item"
                >
                  <div class="item-label">{{ phone.fullLabel }}</div>
                  {{ phone.value }}
                </li>
              </template>


            </ul>
          </div>

          <div class="button-group">
            <button type="submit" class="btn link">Edit</button>
          </div>

        </div>

        <div class="stepper-content-footer">
          <div class="to-column">
            <button @click="$router.push('/form/membership')" type="button" class="btn outline s-lg">Back</button>
            <button type="button" class="btn primary s-lg">Submit</button>
          </div>
        </div>
      </div>


    </template>
  </app-stepper>
</template>

<script>
import AppStepperHeader from "@/components/AppStepperHeader";
import AppStepper from "@/components/AppStepper";
import {mapGetters} from 'vuex'

export default {
  name: "FormOverview",
  components: {AppStepperHeader, AppStepper},
  inject: ['steps', 'phones'],
  computed: {
    ...mapGetters('user', ['user']),
  },
}
</script>

<style scoped>

</style>
