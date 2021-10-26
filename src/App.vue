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
      formData: {},
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
      form:{

      },
      user: {
        firstName: '',
        lastName: '',
        email: '',
        membership: '',
      },
      phones: [
        {
          type: 'work',
          label: 'Work',
          fullLabel: 'Work Phone',
          value: null,
          isSelected: true,
          sortNumber: 1,
        },
        {
          type: 'home',
          label: 'Home',
          fullLabel: 'Home Phone',
          value: null,
          isSelected: false,
          sortNumber: 2,
        },
        {
          type: 'mobile',
          label: 'Mobile',
          fullLabel: 'Mobile Phone',
          value: null,
          isSelected: false,
          sortNumber: 3,
        },
        {
          type: 'main',
          label: 'Main',
          fullLabel: 'Main Phone',
          value: null,
          isSelected: false,
          sortNumber: 4,
        },
        {
          type: 'other',
          label: 'Other',
          fullLabel: 'Other Phone',
          value: null,
          isSelected: false,
          sortNumber: 5,
        },
      ],
    }
  },
}
</script>
<style lang="scss">
</style>
