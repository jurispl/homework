<template>
  <app-stepper>
    <template #header>
      <app-stepper-header :steps="steps" active-step="0"></app-stepper-header>
    </template>
    <template #default>
      <form @submit.prevent="sendForm">
        <div class="between">
          <div class="stepper-content-top">
            <h2 class="stepper-title">Personal info</h2>

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


            <div class="button-group" v-if="canAddPhone">
              <button @click="addPhoneField" type="button" class="btn link">+ Add phone {{
                  countSelectedPhone
                }}
              </button>
              <router-link to="/home">Go Home</router-link>
            </div>

          </div>

          <div class="stepper-content-footer">
            <div class="to-column">
              <button type="submit" class="btn primary s-lg">Continue</button>
            </div>
          </div>
        </div>

      </form>
    </template>
  </app-stepper>
</template>

<script>
import AppStepper from "@/components/AppStepper";
import AppStepperHeader from "@/components/AppStepperHeader";
import AppDropdown from "@/components/AppDropdown";
import AppDropdownMenu from "@/components/AppDropdownMenu";
import AppDropdownItem from "@/components/AppDropdownItem";
import AppFormFieldGroup from "@/components/AppFormFieldGroup";
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: "FormPersonalInfo",
  components: {AppFormFieldGroup, AppDropdownItem, AppDropdownMenu, AppDropdown, AppStepperHeader, AppStepper},
  inject: ['steps', 'phones'],
  computed: {
    ...mapGetters('user', ['user']),
    firstName: {
      get() {
        return this.user.firstName;
      },
      set(value) {
        this.setFirstName({value: value});
      }
    },
    lastName: {
      get() {
        return this.user.lastName;
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
  mounted() {
    this.loadPhoneList();
  },
  data() {
    return {
      phoneList: [],
    }
  },
  methods: {
    ...mapMutations('user', ['setFirstName', 'setLastName', 'setEmail', 'addPhone', 'deletePhones']),
    loadPhoneList() {
      this.phones.forEach(item => {
        item.isSelected ? this.phoneList.push(item) : ''
      });
    },
    selectPhone(iter, old) {
      const oldIndex = this.phoneList.findIndex(item => item.type === old.type);
      const phone = this.phones.find(item => item.type === iter.type);
      this.phoneList.splice(oldIndex, 1);
      old.isSelected = false;
      old.value = '';
      phone.isSelected = true;
      this.phoneList.push(phone);
    },
    addPhoneField() {
      const phone = this.phones.find(i => i.isSelected !== true);
      this.phoneList.push(phone);
      console.log(this.phoneList);
      phone.isSelected = true;
    },
    sendForm() {
      if (this.phoneList.length) {
        this.deletePhones();
        this.phoneList.forEach(item => {
          if (item.value) {
            this.addPhone({[item.type]: item.value})
          }
        });
      }

      this.$router.push('/form/membership');
    },
  },
}
</script>

<style scoped>

</style>
