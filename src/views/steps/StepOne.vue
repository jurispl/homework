<template>
  <div class="to-column">
    <div class="form-field">
      <label
          for="First-name"
          class="form-label"
      >First name</label>
      <input
          :value="field.firstName.value"
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
          :value="field.lastName.value"
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
          :value="field.email.value"
          @input="updateField('email', $event.target.value)"
          id="E-mail"
          type="text"
          class="form-control">
    </div>

    <div
        class="form-field"
        v-for="(item, index) in field.info.fields"
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

  <div class="button-group">
    <button
        @click="newItem()"
        type="button"
        class="btn link"
    >Add description
    </button>
  </div>

    <phone-list
        :phones="field.phones.fields"
    ></phone-list>
  </div>

</template>

<script>
import PhoneList from "@/views/steps/PhoneList";

export default {
  name: "StepOne",
  expose: ['temporaryForm'],
  props: {
    getGroupFields: {
      type: Object
    },
  },
  components: {PhoneList},
  computed: {
    field() {
      const fields = {};
      this.temporaryForm.fields.forEach(field => {
        fields[field.id] = field;
      });
      return fields;
    },
  },
  data() {
    return {
      temporaryForm: {
        fieldGroup: {
          id: 'personal',
          title: 'Personal'
        },
        fields: [
          {
            id: 'firstName',
            value: null,
          },
          {
            id: 'lastName',
            value: null,
          },
          {
            id: 'email',
            value: null,
          },
          {
            id: 'info',
            fields: [],
          },
          {
            id: 'phones',
            fields: [
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
                isSelected: true,
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
          },
        ],
      },
    }
  },
  methods: {
    // Dynamic adding a description field
    newItem() {
      this.field.info.fields.push({label: `Nr: ${this.field.info.fields.length} label`, value: 'Bob'})
    },
    updateNews(item, e) {
      this.field.info.fields[item].value = e;
    },

    updateField(id, value) {
      this.field[id].value = value;
    },
  },
  created() {
    if (Object.keys(this.getGroupFields).length) {
      this.temporaryForm = {...this.getGroupFields}
    }
  },
  unmounted() {
    // this.temporaryForm = {};
  }
}
</script>

<style scoped>

</style>
