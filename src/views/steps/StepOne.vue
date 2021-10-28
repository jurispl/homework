<template>
  <div class="to-column">
    <div class="form-field">
      <label
          for="First-name"
          class="form-label"
      >First name</label>
      <input
          :value="temporaryForm.firstName.value"
          @input="updateField('firstName', $event.target.value)"
          id="First-name"
          type="text"
          class="form-control"
      >
    </div>

    <div class="form-field">
      <label
          for="Last-name"
          class="form-label"
      >Last name</label>
      <input
          :value="temporaryForm.lastName.value"
          @input="updateField('lastName', $event.target.value)"
          id="Last-name"
          type="text"
          class="form-control">
    </div>

    <div class="form-field">
      <label
          for="E-mail"
          class="form-label"
      >E-mail</label>
      <input
          :value="temporaryForm.email.value"
          @input="updateField('email', $event.target.value)"
          id="E-mail"
          type="text"
          class="form-control">
    </div>

    <div
        class="form-field"
        v-for="(item, index) in temporaryForm.phones"
        :key="index"
    >
      <label
          :for="item.label + index"
          class="form-label"
      >{{ item.label }}</label>
      <input :value="item.value" @input="updateNews(index, $event.target.value)"
             :id="index"
             :name="index"
             type="text"
             class="form-control">
    </div>

    <button
        @click="newItem()"
        type="button"
        class="btn primary s-lg"
    >Add new field
    </button>

  </div>

</template>

<script>
import PhoneList from "@/views/steps/PhoneList";

export default {
  name: "StepOne",
  inject: ['formData'],
  expose: ['temporaryForm'],
  props: {
    formStore: {
      type: Object
    },
  },
  components: {PhoneList},
  data() {
    return {
      temporaryForm: {
        firstName: {
          id: 'firstName',
          value: null,
        },
        lastName: {
          id: 'lastName',
          value: null,
        },
        email: {
          id: 'email',
          value: null,
        },
        phones: []
      },
    }
  },
  methods: {
    newItem() {
      this.temporaryForm.phones.push({label: `Nr: ${this.temporaryForm.phones.length} label`, value: 'Bob'})
    },
    updateNews(item, e) {
      this.temporaryForm.phones[item].value = e;
    },

    updateField(id, value) {
      this.temporaryForm[id].value = value;
    },

  },
  created() {
    if (Object.keys(this.formStore).length) {
      this.temporaryForm = {...this.formStore}
    }
  },
  unmounted() {
    // this.temporaryForm = {};
  }
}
</script>

<style scoped>

</style>
