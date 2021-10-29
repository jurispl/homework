<template>
  <teleport to="body">
    <app-modal
        title="Edit registration data"
        v-if="showModal"
        @close="closeModal"
    >
      <template #default>

        <step-one
            ref="personal"
            :getGroupFields="fromStore('personal')"
        ></step-one>
        <step-two
            ref="membership"
            :getGroupFields="fromStore('membership')"
        ></step-two>

        <div class="to-column">
          <button @click="closeModal" type="button" class="btn outline s-lg">Cancel</button>
          <button @click="sendForm" type="button" class="btn primary s-lg">Save</button>
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
                {{ field.firstName.value }}
              </li>
              <li class="list-group-item">
                <div class="item-label">Last name:</div>
                {{ field.lastName.value }}
              </li>
              <li class="list-group-item">
                <div class="item-label">E-mail:</div>
                {{ field.email.value }}
              </li>
              <li class="list-group-item">
                <div class="item-label">Membership:</div>
                {{ field.membership.value }}
              </li>
              <template
                  v-for="skill in field.skills.fields"
                  :key="skill"
              >
                <li
                    v-if="skill.value"
                    class="list-group-item"
                >
                  <div class="item-label">{{ skill.label }}</div>
                  {{ skill.value }}
                </li>
              </template>
              <template
                  v-for="phone in field.phones.fields"
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
            <button @click="openModal" type="button" class="btn link">Edit</button>
          </div>

        </div>

        <div class="stepper-content-footer">
          <div class="to-column">
            <button @click="$router.push('/form/membership')" type="button" class="btn outline s-lg">Back</button>
            <button @click="postForm(field)" type="button" class="btn primary s-lg">Submit</button>
          </div>
        </div>
      </div>


    </template>
  </app-stepper>
</template>

<script>
import AppStepperHeader from "@/components/AppStepperHeader";
import AppStepper from "@/components/AppStepper";
import {mapGetters, mapMutations} from 'vuex'
import AppAlert from "@/components/AppAlert";
import AppModal from "@/components/AppModal";
import StepOne from "@/views/steps/StepOne";
import StepTwo from "@/views/steps/StepTwo";
import formMixin from "@/mixin/formMixin";

export default {
  name: "FormOverview",
  mixins: [formMixin],
  components: {StepTwo, StepOne, AppModal, AppAlert, AppStepperHeader, AppStepper},
  inject: ['steps'],
  computed: {
    ...mapGetters('user', ['getForm']),

    field() {
      const form = JSON.parse(JSON.stringify(this.getForm));
      const field = {};
      form.forEach(group => {
        group.fields.forEach(elm => {
          field[elm.id] = elm;
        })
      })

      return field;
    }
  },
  data() {
    return {
      alert: false,
      alertContent: null,
      showModal: false,
    }
  },
  methods: {
    ...mapMutations('user', ['setForm']),
    closeModal() {
      document.body.classList.remove('modal-open');
      this.showModal = false;
    },
    openModal() {
      document.body.classList.add('modal-open');
      this.showModal = true;
    },
    async postForm(body) {
      try {
        // TEST Random error request!
        const artifact = Math.random() >= 0.5 ? 'ERR' : '';
        const url = `https://${artifact}vue-jp-http-default-rtdb.europe-west1.firebasedatabase.app/users.json`;

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset="utf-8"',
          },
          body: JSON.stringify(body)
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

    sendForm() {

      const fromPersonalRef = JSON.parse(JSON.stringify(this.$refs.personal.temporaryForm))
      this.setForm({value: fromPersonalRef});

      const fromMembershipRef = JSON.parse(JSON.stringify(this.$refs.membership.temporaryForm))
      this.setForm({value: fromMembershipRef});

      this.closeModal();
    },
  }
}
</script>

<style scoped>

</style>
