<template>
  <div>
    <h2>step one</h2>
    <div class="form-field">
      <label for="First-name" class="form-label">First name</label>
      <input v-model="firstName" id="First-name" type="text" class="form-control">
    </div>

    <div class="form-field">
      <label for="Last-name" class="form-label">Last name</label>
      <input v-model="lastName" id="Last-name" type="text" class="form-control">
    </div>

    <div class="form-field">
      <label for="E-mail" class="form-label">E-mail</label>
      <input v-model="email" id="E-mail" type="text" class="form-control">
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "StepOne",
  computed: {
    ...mapGetters('user', ['user']),
    firstName: {
      get() {
        return this.user.firstName;
      },
      set(value) {
        this.setFirstName({value: value});
      },
    },
    lastName: {
      get() {
        return this.user.lastName
      },
      set(value) {
        this.setLastName({value: value});
      }
    },
    email: {
      get() {
        return this.user.email;
      },
      set(value) {
        this.setEmail({value: value});
      }
    }
  },
  methods: {
    ...mapMutations('user', ['setFirstName', 'setLastName', 'setEmail'])
  },
}
</script>

<style scoped>

</style>
