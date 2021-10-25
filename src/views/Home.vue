<template>
  <div class="row">
    <h1>Home page</h1>
  </div>
  <div class="row">
    <router-link to="/form/personal">Form personal</router-link>
  </div>
</template>

<script>
import StepOne from "@/views/steps/StepOne";
export default {
  name: "Home",
  components: {StepOne}
}
</script>

<style scoped>

</style>
