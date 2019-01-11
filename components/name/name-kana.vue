<template lang="pug">
.field.is-grouped
    label.label.app-label セイ
    .control.is-expanded.has-icons-right
        input.input(
            :class="{'is-danger': familyNameKanaErrorMessage.length > 0, 'is-success': isSuccessFamilyNameKana}"
            type="text"
            placeholder="スズキ"
            @keydown="updateFamilyNameKana"
            @blur="blurFamilyNameKana"
        )
        span.icon.is-small.is-right(v-if="isSuccessFamilyNameKana")
            i.fas.fa-check
        span.icon.is-small.is-right(v-else-if="familyNameKanaErrorMessage.length > 0")
            i.fas.fa-exclamation-triangle
        p.help.is-danger(v-if="familyNameKanaErrorMessage.length > 0") {{familyNameKanaErrorMessage}}
    label.label.second-label メイ
    .control.is-expanded.has-icons-right
        input.input(
            :class="{'is-danger': firstNameKanaErrorMessage.length > 0, 'is-success': isSuccessFirstNameKana}"
            type="text"
            placeholder="タロウ"
            @keydown="updateFirstNameKana"
            @blur="blurFirstNameKana"
        )
        span.icon.is-small.is-right(v-if="isSuccessFirstNameKana")
            i.fas.fa-check
        span.icon.is-small.is-right(v-else-if="firstNameKanaErrorMessage.length > 0")
            i.fas.fa-exclamation-triangle
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
      if (this.isTypeFamily) {
        return;
      }
      this.isTypeFamily = true;
      if (this._timer !== -1) {
        window.clearTimeout(this._timer);
      }
      this.timer = window.setTimeout(() => {
        this.isTypeFamily = false;
        this.changeFamilyName(event.target.value);
        this.checkStatus();
      }, 600);
    },
    blurFamilyNameKana(event) {
      if (this._timer !== -1) {
        window.clearTimeout(this._timer);
      }
      this.isTypeFamily = false;
      this.changeFamilyName(event.target.value);
      this.checkStatus();
    },
    updateFirstNameKana(event) {
      if (this.isTypeFirst) {
        return;
      }
      this.isTypeFirst = true;
      if (this._timer !== -1) {
        window.clearTimeout(this._timer);
      }
      this.timer = window.setTimeout(() => {
        this.isTypeFirst = false;
        this.changeFirstName(event.target.value);
        this.checkStatus();
      }, 600);
    },
    blurFirstNameKana(event) {
      if (this._timer !== -1) {
        window.clearTimeout(this._timer);
      }
      this.isTypeFirst = false;
      this.changeFirstName(event.target.value);
      this.checkStatus();
    }
  },
  data: () => ({
    timer: -1,
    isTypeFamily: false,
    isTypeFirst: false
  })
}
</script>

<style lang="sass" scoped>
    .app-label
        margin-right: 1.2em
    .second-label
        margin:
            left: 1em
</style>
