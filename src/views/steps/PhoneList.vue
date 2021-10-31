<template>


  <app-form-field-group
      v-for="phone in selectedListPhones"
      :key="phone.type"
      :id="phone.type"
  >
    <template #label>
      <label :for="phone.type" class="form-label">Phone</label>
    </template>

    <template #left>
      <app-dropdown>
        <template #toggle>
          <button type="button" class="btn btn-outline dropdown-toggle">{{ phone.label }}</button>
        </template>
        <template #default="{isOpen}">

          <app-dropdown-menu :is-open="isOpen" :items="phones">
            <template #default="{iter, idx}">
              <app-dropdown-item
                  @click="choicePhoneType(iter, phone)"
                  :disabled="iter.isSelected"
              >{{ iter.label }}
              </app-dropdown-item>
            </template>

          </app-dropdown-menu>

        </template>
      </app-dropdown>
    </template>

    <template #input>
      <input
          :id="phone.type"
          v-model="phone.value"
          type="text"
          class="form-control">
      <button @click="deletePhone(phone)" type="button" class="fab-menu-btn field-action">
        <app-icon-trash></app-icon-trash>
      </button>
    </template>
  </app-form-field-group>

  <div
      class="button-group"
      v-if="canAddPhone">
    <button
        @click="addNewPhone"
        type="button"
        class="btn link"
    >+ Add phone
    </button>
  </div>


</template>

<script>
import AppDropdown from "@/components/AppDropdown";
import AppDropdownMenu from "@/components/AppDropdownMenu";
import AppDropdownItem from "@/components/AppDropdownItem";
import AppFormFieldGroup from "@/components/AppFormFieldGroup";
import AppIconTrash from "@/components/icons/AppIconTrash";

export default {
  name: "PhoneList",
  props: {
    phones: {
      type: Array
    }
  },
  components: {AppIconTrash, AppFormFieldGroup, AppDropdownItem, AppDropdownMenu, AppDropdown},
  computed: {
    canAddPhone() {
      return !!(this.phones.find(i => !i.isSelected));
    },
    selectedListPhones() {
      return this.phones.filter(i => i.isSelected === true).sort((a, b) => {
        return a.sortNumber - b.sortNumber
      });
    },
  },
  methods: {
    choicePhoneType(selectedPhone, currentPhone) {

      const selectedNr = selectedPhone.sortNumber;
      selectedPhone.sortNumber = currentPhone.sortNumber;
      currentPhone.sortNumber = selectedNr;

      selectedPhone.isSelected = true;
      currentPhone.isSelected = false;
    },
    addNewPhone() {
      const phone = this.phones.find(i => !i.isSelected);
      phone.sortNumber = this.selectedListPhones.length + 1;
      phone.isSelected = true;
    },
    deletePhone(phone) {
      phone.value = '';
      phone.isSelected = false;
      this.changeSortNumber();
    },
    changeSortNumber() {
      this.selectedListPhones.forEach((item, index) => {
        item.sortNumber = index + 1
      });
    },
  },
}
</script>

<style scoped>

</style>
