<template lang="pug">
.field.is-grouped
    label.label.app-label 性
    .control.is-expanded.has-icons-right
        input.input(
            :class="{'is-danger': isErrorFamilyName, 'is-success': isSuccessFamilyName}"
            type="text"
            placeholder="鈴木"
            @keydown="updateFamilyName"
            @blur="blurFamilyName"
        )
        span.icon.is-small.is-right(v-if="isSuccessFamilyName")
            i.fas.fa-check
        span.icon.is-small.is-right(v-else-if="isErrorFamilyName")
            i.fas.fa-exclamation-triangle
        p.help.is-danger(v-if="isErrorFamilyName") 必須項目です。

    label.label.second-label 名
    .control.is-expanded.has-icons-right
        input.input(
            :class="{'is-danger': isErrorFirstName, 'is-success': isSuccessFirstName}"
            type="text"
            placeholder="太郎"
            @keydown="updateFirstName"
            @blur="blurFirstName"
        )
        span.icon.is-small.is-right(v-if="isSuccessFirstName")
            i.fas.fa-check
        span.icon.is-small.is-right(v-else-if="isErrorFirstName")
            i.fas.fa-exclamation-triangle
        p.help.is-danger(v-if="isErrorFirstName") 必須項目です
</template>

<script>
export default {
  name: 'name-kanji',
  props: {
    changeFamilyName: Function,
    changeFirstName: Function,
    checkStatus: Function,
    isErrorFamilyName: Boolean,
    isErrorFirstName: Boolean,
    isSuccessFamilyName: Boolean,
    isSuccessFirstName: Boolean
  },
  methods: {
    updateFamilyName(event){
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
    blurFamilyName(event) {
      if (this._timer !== -1) {
        window.clearTimeout(this._timer);
      }
      this.isTypeFamily = false;
      this.changeFamilyName(event.target.value);
      this.checkStatus();
    },
    updateFirstName(event){
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
    blurFirstName(event) {
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
        margin-right: 2.3em
    .second-label
        margin:
            left: 1em
            right: 1.5em
</style>
