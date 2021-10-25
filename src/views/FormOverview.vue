<template>
  <teleport to="body">
    <app-modal
        title="Edit registration data"
        v-if="showModal"
        @close="closeModal"
    >
      <template #default>
        <div class="form-field">
          <label for="First-name" class="form-label">First name</label>
          <input id="First-name" type="text" class="form-control">
        </div>
        <div class="to-column">
          <button type="button" class="btn outline s-lg">Cancel</button>
          <button type="button" class="btn primary s-lg">Save</button>
        </div>
      </template>


    </app-modal>
  </teleport>


  <app-stepper>
    <template #header>
      <app-stepper-header :steps="steps" active-step="2"></app-stepper-header>
    </template>

    <template #alert>
      <app-alert
          v-if="alert"
          :title="alertContent.title"
          :text="alertContent.text"
          :type="alertContent.type"
          closable
          @close="alert = false"
      ></app-alert>
    </template>
    <template #default>

      <div class="between">
        <div class="stepper-content-top">
          <h2 class="stepper-title">Overview:</h2>

          <div>
            <ul class="list-group">
              <li class="list-group-item">
                <div class="item-label">First name:</div>
                {{ user.firstName }}
              </li>
              <li class="list-group-item">
                <div class="item-label">Last name:</div>
                {{ user.lastName }}
              </li>
              <li class="list-group-item">
                <div class="item-label">E-mail:</div>
                {{ user.email }}
              </li>
              <li class="list-group-item">
                <div class="item-label">Membership:</div>
                {{ user.membership }}
              </li>
              <template
                  v-for="phone in phones"
                  :key="phone"
              >
                <li
                    v-if="phone.value"
                    class="list-group-item"
                >
                  <div class="item-label">{{ phone.fullLabel }}</div>
                  {{ phone.value }}
                </li>
              </template>


            </ul>
          </div>

          <div class="button-group">
            <button @click="showModal = true" type="button" class="btn link">Edit</button>
          </div>

        </div>

        <div class="stepper-content-footer">
          <div class="to-column">
            <button @click="$router.push('/form/membership')" type="button" class="btn outline s-lg">Back</button>
            <button @click="sendForm" type="button" class="btn primary s-lg">Submit</button>
          </div>
        </div>
      </div>


    </template>
  </app-stepper>
</template>

<script>
import AppStepperHeader from "@/components/AppStepperHeader";
import AppStepper from "@/components/AppStepper";
import {mapGetters} from 'vuex'
import AppAlert from "@/components/AppAlert";
import AppModal from "@/components/AppModal";

export default {
  name: "FormOverview",
  components: {AppModal, AppAlert, AppStepperHeader, AppStepper},
  inject: ['steps', 'phones'],
  computed: {
    ...mapGetters('user', ['user']),
  },
  data() {
    return {
      alert: false,
      alertContent: null,
      showModal: false,
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    async sendForm() {
      try {
        // TEST Random error request!
        const artifact = Math.random() >= 0.5 ? 'ERR' : '';
        const url = `https://${artifact}vue-jp-http-default-rtdb.europe-west1.firebasedatabase.app/users.json`;

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset="utf-8"',
          },
          body: JSON.stringify(this.user)
        });


        if (!response.ok && response.status !== 200) {
          const msg = `Response status: ${response.status} :: ${response.statusText}`;
          this.alert = true;
          this.alertContent = {
            title: 'ERROR form submission',
            text: msg,
            type: 'danger'
          }

          throw new Error(msg);
        }
        const fbData = await response.json();
        this.alert = true;
        this.alertContent = {
          title: 'Successful form submission',
          text: `ID in the Firebase database: ${fbData.name}`,
          type: 'primary'
        }

      } catch (e) {
        this.alert = true;
        this.alertContent = {
          title: 'ERROR form submission',
          text: e.message,
          type: 'danger'
        }
      }


    },
  }
}
</script>

<style scoped>

</style>
