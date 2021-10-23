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
                <app-dropdown>
                  <template #default="{status}">
                    <app-dropdown-menu :status="status">
                      <app-dropdown-item>Action</app-dropdown-item>
                      <app-dropdown-item>Action</app-dropdown-item>
                      <app-dropdown-item>Action</app-dropdown-item>
                      <app-dropdown-item>Action</app-dropdown-item>
                      <app-dropdown-item>Action</app-dropdown-item>

                    </app-dropdown-menu>
                  </template>
                </app-dropdown>
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
import AppDropdown from "@/components/AppDropdown";
import AppDropdownMenu from "@/components/AppDropdownMenu";
import AppDropdownItem from "@/components/AppDropdownItem";

export default {
  name: "FormPersonalInfo",
  components: {AppDropdownItem, AppDropdownMenu, AppDropdown, AppStepperHeader, AppStepper},
  inject: ['steps'],
}
</script>

<style scoped>

</style>
