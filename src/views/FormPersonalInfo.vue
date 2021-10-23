<template>
  <app-stepper>
    <template #header>
      <app-stepper-header :steps="steps"></app-stepper-header>
    </template>
    <template #default>
      <form>
        <div class="between">
          <div class="stepper-content-top">
            <h2 class="stepper-title">Personal info</h2>

            <div class="form-field">
              <label for="First-name" class="form-label">First name</label>
              <input id="First-name" type="text" class="form-control">
            </div>

            <div class="form-field">
              <label for="Last-name" class="form-label">Last name</label>
              <input id="Last-name" type="text" class="form-control">
            </div>

            <div class="form-field">
              <label for="E-mail" class="form-label">E-mail</label>
              <input id="E-mail" type="text" class="form-control">
            </div>


            <div class="form-field">
              <label for="Phone-work" class="form-label">Phone</label>
              <div class="form-field-group">
                <button type="button" class="btn btn-outline dropdown-toggle _show">Work</button>
                <ul class="dropdown-menu _show">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
                <input id="Phone-work" type="text" class="form-control">
              </div>
            </div>

            <div class="button-group">
              <button type="submit" class="btn link">+ Add phone</button>
            </div>

          </div>

          <div class="stepper-content-footer">
            <div class="to-column">
              <button @click="$router.push('/form/membership')" type="button" class="btn primary s-lg">Continue</button>
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

export default {
  name: "FormPersonalInfo",
  components: {AppStepperHeader, AppStepper},
  inject: ['steps'],
}
</script>

<style scoped>

</style>
