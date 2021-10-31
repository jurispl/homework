<template>
  <div class="container">
    <router-view></router-view>
  </div>

  <app-fab-menu></app-fab-menu>
</template>
<script>
import AppFabMenu from "@/components/AppFabMenu";

export default {
  components: {AppFabMenu}
}
</script>
<style lang="scss">
</style>
