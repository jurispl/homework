<template>
  <div class="to-column">
    <div class="field-check">
      <input v-model="field.membership.value" value="regular" class="field-check-input" type="radio" name="membership"
             id="Membership-regular">
      <label class="field-check-label" for="Membership-regular">
        Regular
      </label>
    </div>
    <div class="field-check">
      <input v-model="field.membership.value" value="premium" class="field-check-input" type="radio" name="membership"
             id="Membership-premium">
      <label class="field-check-label" for="Membership-premium">
        Premium
      </label>
    </div>

    <div class="description">
      <div v-if=" field.membership.value === 'regular'">
        <strong>Regular</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release.
      </div>
      <div v-else>
        <strong>Premium</strong> It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text.
      </div>
    </div>
  </div>
</template>

<script>
import formFieldMixin from '@/mixin/formFieldMixin'

export default {
  name: "StepTwo",
  mixins: [formFieldMixin],
  expose: ['temporaryForm'],
  data() {
    return {
      temporaryForm: {
        fieldGroup: {
          id: 'membership',
          title: 'Membership'
        },
        fields: [
          {
            id: 'membership',
            value: 'premium',
          },
        ],
      },
    }
  },
}
</script>

<style scoped>

</style>
