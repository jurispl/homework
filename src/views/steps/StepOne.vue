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
        v-for="(item, index) in field.skills.fields"
        :key="index"
    >
      <label
          :for="item.label + index"
          class="form-label"
      >Skill</label>
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
      >+ Add skill
      </button>
    </div>

    <phone-list
        :phones="field.phones.fields"
    ></phone-list>
  </div>

</template>

<script>
import PhoneList from "@/views/steps/PhoneList";
import formFieldMixin from '@/mixin/formFieldMixin'

export default {
  name: "StepOne",
  mixins: [formFieldMixin],
  expose: ['temporaryForm'],
  components: {PhoneList},
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
            id: 'skills',
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
    // Dynamic adding field
    newItem() {
      this.field['skills'].fields.push({label: `Skill`, value: ''})
    },
    updateNews(item, e) {
      this.field['skills'].fields[item].value = e;
    },
  },
}
</script>

<style scoped>

</style>
