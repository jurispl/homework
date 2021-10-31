<template>
  <!--  TODO FAB Menu :: Add getting parameters for dynamic link creation-->
  <div class="fab-container">
    <div class="fab-menu" :class="{open: openMenu}">
      <button type="button" class="fab-menu-btn -green">Empty</button>

      <router-link to="/form" class="fab-menu-btn -indigo">Form</router-link>
      <router-link to="/home" class="fab-menu-btn -indigo">Home</router-link>
    </div>
    <button @click="openMenu = !openMenu" type="button" class="fab-menu-btn -red main">
      <app-icon-bars></app-icon-bars>
    </button>
  </div>
</template>

<script>
import AppIconBars from "@/components/icons/AppIconBars";
export default {
  name: "AppFabMenu",
  components: {AppIconBars},
  data() {
    return {
      openMenu: false
    }
  },
}
</script>

<style scoped lang="scss">

</style>
