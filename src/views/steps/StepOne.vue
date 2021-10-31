<template>
  <div class="to-column">
    <div class="form-field">
      <label
          :for="field.firstName.id"
          class="form-label"
      >{{ field.firstName.label }}</label>
      <input
          :value="field.firstName.value"
          @input="updateField('firstName', $event.target.value)"
          :id="field.firstName.id"
          type="text"
          :required="field.firstName.required"
          class="form-control"
      >
    </div>

    <div class="form-field">
      <label
          :for="field.lastName.id"
          class="form-label"
      >{{ field.lastName.label }}</label>
      <input
          :value="field.lastName.value"
          @input="updateField('lastName', $event.target.value)"
          :id="field.lastName.id"
          type="text"
          class="form-control">
    </div>

    <div class="form-field">
      <label
          :for="field.email.id"
          class="form-label"
      >{{ field.email.label }}</label>
      <input
          :value="field.email.value"
          @input="updateField('email', $event.target.value)"
          :id="field.email.id"
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
      <input :value="item.value" @input="updateSkill(index, $event.target.value)"
             :id="index"
             :name="index"
             type="text"
             class="form-control">
      <button @click="deleteSkill(index)" type="button" class="fab-menu-btn -red field-action">-</button>
    </div>

    <div class="button-group">
      <button
          @click="addSkill()"
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
            type: 'text',
            required: false,
            label: 'First Name',
            placeholder: null,
            fullLabel: 'Work Phone',
          },
          {
            id: 'lastName',
            value: null,
            type: 'text',
            required: false,
            label: 'Last Name',
            placeholder: null,
            fullLabel: 'Work Phone',
          },
          {
            id: 'email',
            value: null,
            type: 'text',
            required: false,
            label: 'Email',
            placeholder: null,
            fullLabel: 'Work Phone',
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
          },
        ],
      },
    }
  },
  methods: {
    // Dynamic adding field
    addSkill() {
      this.field['skills'].fields.push({label: `Skill`, value: ''})
    },
    updateSkill(item, e) {
      this.field['skills'].fields[item].value = e;
    },
    deleteSkill(index){
      this.field['skills'].fields.splice(index, 1)
    }
  },
}
</script>

<style scoped>

</style>
