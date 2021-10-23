<template>
  <div class="container">
    <router-view></router-view>
  </div>

</template>
<script>
export default {
  provide() {
    return {
      steps: [
        {
          title: 'Personal info',
          status: 'fulfilled',
        },
        {
          title: 'Membership',
          status: 'active',
        },
        {
          title: 'Overview',
          status: 'disabled'
        },
      ],
    }
  },
}
</script>
<style lang="scss">
</style>
