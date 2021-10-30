<template>
  <form @submit.prevent>
    <div class="between">
      <div class="stepper-content-top">
        <h2 class="stepper-title">Membership</h2>

        <step-two
            ref="membership"
            :getGroupFields="fromStore('membership')"
        ></step-two>

      </div>

      <div class="stepper-content-footer">
        <div class="to-column">
          <button @click="$router.push('/form/personal')" type="button" class="btn outline s-lg">Back</button>
          <button @click="sendForm" type="button" class="btn primary s-lg">Continue</button>
        </div>
      </div>
    </div>

  </form>
</template>

<script>
import StepTwo from "@/views/steps/StepTwo";
import formMixin from '@/mixin/formMixin';
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "FormMembership",
  mixins: [formMixin],
  components: {StepTwo},
  computed: {
    ...mapGetters('user', ['getForm']),
  },
  methods: {
    ...mapMutations('user', ['setForm']),
    sendForm() {
      const fromRef = JSON.parse(JSON.stringify(this.$refs.membership.temporaryForm))
      this.setForm({value: fromRef});
      this.$router.push('/form/overview');
    },
  },
}
</script>

<style scoped>

</style>
