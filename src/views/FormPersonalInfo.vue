<template>
  <form @submit.prevent>
    <div class="between">
      <div class="stepper-content-top">
        <h2 class="stepper-title">Personal info</h2>

        <step-one
            ref="personal"
            :getGroupFields="fromStore('personal')"
        ></step-one>
      </div>

      <div class="stepper-content-footer">
        <div class="to-column">
          <button type="button" @click="sendForm" class="btn primary s-lg">Continue</button>
        </div>
      </div>
    </div>

  </form>
</template>

<script>
import StepOne from "@/views/steps/StepOne";
import formMixin from '@/mixin/formMixin';
import {mapMutations, mapGetters} from 'vuex';

export default {
  name: "FormPersonalInfo",
  mixins: [formMixin],
  components: {StepOne},
  computed: {
    ...mapGetters('user', ['getForm']),
  },
  methods: {
    ...mapMutations('user', ['setForm']),
    sendForm() {
      const refPersonal = this.$refs.personal.temporaryForm;
      if (this.formValidation(refPersonal)) {
        // this.$refs.personal.temporaryForm
        const fromRef = JSON.parse(JSON.stringify(refPersonal));
        // const form = document.getElementById('bob');
        // const formData = new FormData(form);
        //
        // for (let [name, value] of formData.entries()) {
        //   console.log('form Data --', name, value);
        // }

        this.setForm({value: fromRef});
        this.$router.push('/form/membership');
      }
    },
  },
}
</script>

<style scoped>

</style>
