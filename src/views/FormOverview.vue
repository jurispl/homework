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
                John
              </li>
              <li class="list-group-item">
                <div class="item-label">Last name:</div>
                Smith
              </li>
              <li class="list-group-item">
                <div class="item-label">E-mail:</div>
                john.smith@email.com
              </li>
              <li class="list-group-item">
                <div class="item-label">Membership:</div>
                Regular
              </li>
              <li class="list-group-item">
                <div class="item-label">Home Phone:</div>
                99568453
              </li>

            </ul>
          </div>

          <div class="button-group">
            <button type="submit" class="btn link">Edit</button>
          </div>
          <pre>{{this.phones}}</pre>
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

export default {
  name: "FormOverview",
  components: {AppStepperHeader, AppStepper},
  inject: ['steps', 'phones'],
}
</script>

<style scoped>

</style>
