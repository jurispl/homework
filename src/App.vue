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
      phones: this.phones,
    }
  },
  data(){
    return{
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
      phones: [
        {
          type: 'work',
          label: 'Work',
          value: '',
          isSelected: true,
        },
        {
          type: 'home',
          label: 'Home',
          value: '',
          isSelected: false,
        },
        {
          type: 'mobile',
          label: 'Mobile',
          value: '',
          isSelected: false,
        },
        {
          type: 'main',
          label: 'Main',
          value: '',
          isSelected: false,
        },
        {
          type: 'other',
          label: 'Other',
          value: '',
          isSelected: false,
        },
      ],
    }
  },
}
</script>
<style lang="scss">
</style>
