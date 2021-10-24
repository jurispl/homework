<template>
  <div class="container">
    <router-view></router-view>
  </div>

</template>
<script>
export default {
  provide() {
    return {
      steps: this.steps,
      user: this.user,
      phones: this.phones,
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
      phones: [
        {
          type: 'work',
          label: 'Work',
          value: null,
          isSelected: true,
        },
        {
          type: 'home',
          label: 'Home',
          value: null,
          isSelected: false,
        },
        {
          type: 'mobile',
          label: 'Mobile',
          value: null,
          isSelected: false,
        },
        {
          type: 'main',
          label: 'Main',
          value: null,
          isSelected: false,
        },
        {
          type: 'other',
          label: 'Other',
          value: null,
          isSelected: false,
        },
      ],
    }
  },
}
</script>
<style lang="scss">
</style>
