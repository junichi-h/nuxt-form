<template lang="pug">
.field.is-grouped
    label.label.app-label セイ
    .control.is-expanded
        input.input(
            :class="{'is-danger': familyNameKanaErrorMessage.length > 0, 'is-success': isSuccessFamilyNameKana}"
            type="text"
            placeholder="スズキ"
            @input="updateFamilyNameKana"
            @blur="updateFamilyNameKana"
        )
        p.help.is-danger(v-if="familyNameKanaErrorMessage.length > 0") {{familyNameKanaErrorMessage}}
    label.label.second-label メイ
    .control.is-expanded
        input.input(
            :class="{'is-danger': firstNameKanaErrorMessage.length > 0, 'is-success': isSuccessFirstNameKana}"
            type="text"
            placeholder="タロウ"
            @input="updateFirstNameKana"
            @blur="updateFirstNameKana"
        )
        p.help.is-danger(v-if="firstNameKanaErrorMessage.length > 0") {{firstNameKanaErrorMessage}}
    
</template>

<script>
export default {
  name: 'name-kana',
  props: {
    changeFamilyName: Function,
    changeFirstName: Function,
    checkStatus: Function,
    familyNameKanaErrorMessage: String,
    isSuccessFamilyNameKana: Boolean,
    firstNameKanaErrorMessage: String,
    isSuccessFirstNameKana: Boolean
  },
  methods: {
    updateFamilyNameKana(event) {
      this.changeFamilyName(event.target.value);
      this.checkStatus();
    },
    updateFirstNameKana(event) {
      this.changeFirstName(event.target.value);
      this.checkStatus();
    }
  }
}
</script>

<style lang="sass" scoped>
    .app-label
        margin-right: 1.2em
    .second-label
        margin:
            left: 1em
</style>
