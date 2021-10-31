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
        <span class="todo-small">Random error request</span>
      </div>
    </div>
  </div>


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
  components: {StepTwo, StepOne, AppModal},
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
      showModal: false,
    }
  },
  methods: {
    ...mapMutations('user', ['setForm']),
    ...mapMutations('alert', ['setAlertContent']),
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
        // TODO TEST Random error request
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

          const alert = {
            show: true,
            title: 'ERROR form submission',
            text: msg,
            type: 'danger'
          }
          this.setAlertContent({value: alert});

          throw new Error(msg);
        }
        const fbData = await response.json();
        const alert = {
          show: true,
          title: 'Successful form submission',
          text: `ID in the Firebase database: ${fbData.name}`,
          type: 'primary'
        }
        this.setAlertContent({value: alert});

      } catch (e) {
        const alert = {
          show: true,
          title: 'ERROR form submission',
          text: e.message,
          type: 'danger'
        }
        this.setAlertContent({value: alert});
      }


    },

    sendForm() {
      const refPersonal = this.$refs.personal.temporaryForm;
      const refMembership = this.$refs.membership.temporaryForm;

      if (this.formValidation(refPersonal)) {
        const fromPersonalRef = JSON.parse(JSON.stringify(refPersonal))
        this.setForm({value: fromPersonalRef});

        const fromMembershipRef = JSON.parse(JSON.stringify(refMembership))
        this.setForm({value: fromMembershipRef});

        this.closeModal();
      }
    },
  }
}
</script>

<style scoped>

</style>
