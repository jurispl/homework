<template>
  <div class="to-column">
    <div class="form-field">
      <label for="First-name" class="form-label">First name</label>
      <input :value="firstName" @input="updateField('firstName', $event.target.value)" id="First-name" type="text" class="form-control">
    </div>

    <div class="form-field">
      <label for="Last-name" class="form-label">Last name</label>
      <input :value="lastName" @input="updateField('lastName', $event.target.value)"  id="Last-name" type="text" class="form-control">
    </div>

    <div class="form-field">
      <label for="E-mail" class="form-label">E-mail</label>
      <input :value="email" @input="updateField('email', $event.target.value)"  id="E-mail" type="text" class="form-control">
    </div>


    <template
        v-for="phone in phoneList"
        :key="phone.type"
    >
      <app-form-field-group
          v-if="phone.isSelected"
          :id="phone.type"
      >
        <template #label>
          <label :for="phone.type" class="form-label">Phone</label>
        </template>
        <template #left>
          <app-dropdown>
            <template #toggle>
              <button type="button" class="btn btn-outline dropdown-toggle _show">{{ phone.label }}</button>
            </template>
            <template #default="{isOpen}">

              <app-dropdown-menu :is-open="isOpen" :items="phones">

                <template #default="{iter, idx}">
                  <app-dropdown-item
                      @action="selectPhone(iter, phone)"
                      :disabled="iter.isSelected"
                  >{{ iter.label }}
                  </app-dropdown-item>
                </template>

              </app-dropdown-menu>

            </template>
          </app-dropdown>
        </template>
        <template #input>
          <input :id="phone.type" v-model="phone.value" type="text" class="form-control">
        </template>
      </app-form-field-group>
    </template>

    <app-test></app-test>

    <div class="button-group" v-if="canAddPhone">
      <button @click="addPhoneField" type="button" class="btn link">+ Add phone {{
          countSelectedPhone
        }}
      </button>
    </div>
  </div>

</template>

<script>
import AppDropdown from "@/components/AppDropdown";
import AppDropdownMenu from "@/components/AppDropdownMenu";
import AppDropdownItem from "@/components/AppDropdownItem";
import AppFormFieldGroup from "@/components/AppFormFieldGroup";
import {mapGetters, mapMutations} from 'vuex';
import AppTest from "@/components/AppTest";

export default {
  name: "StepOne",
  inject: ['phones', 'formData'],
  components: {AppTest, AppFormFieldGroup, AppDropdownItem, AppDropdownMenu, AppDropdown},
  computed: {
    ...mapGetters('user', ['user']),
    firstName() {
      return this.user.firstName;
    },
    lastName() {
      return this.user.lastName;
    },
    email() {
      return this.user.email;
    },
    countSelectedPhone() {
      return this.phones.reduce((counter, item) => {
        if (item.isSelected) {
          return counter + 1;
        } else {
          return counter
        }
      }, 0);
    },
    canAddPhone() {
      return this.phones.length !== this.countSelectedPhone;
    }
  },
  data() {
    return {
      phoneList: [],
    }
  },
  mounted() {
    this.loadPhoneList();
  },
  methods: {
    ...mapMutations('user', ['setFirstName', 'setLastName', 'setEmail']),
    updateField(type, e){
      this.formData[type] = e;
    },
    loadPhoneList() {
      this.phones.forEach(item => {
        item.isSelected ? this.phoneList.push(item) : ''
      });
    },
    selectPhone(iter, old) {
      const oldIndex = this.phoneList.findIndex(item => item.type === old.type);
      const phone = this.phones.find(item => item.type === iter.type);
      old.isSelected = false;
      old.value = '';
      phone.isSelected = true;
      this.phoneList.splice(oldIndex, 1, phone);
    },
    addPhoneField() {
      const phone = this.phones.find(i => i.isSelected !== true);
      this.phoneList.push(phone);
      console.log(this.phoneList);
      phone.isSelected = true;
    },
  },
}
</script>

<style scoped>

</style>
