<template lang="pug">
.field.is-grouped
    label.label.app-label 性
    .control.is-expanded
        input.input(
            :class="{'is-danger': isErrorFamilyName, 'is-success': isSuccessFamilyName}"
            type="text"
            placeholder="鈴木"
            @input="updateFamilyName"
            @blur="updateFamilyName"
        )
        p.help.is-danger(v-if="isErrorFamilyName") 必須項目です。

    label.label.second-label 名
    .control.is-expanded
        input.input(
            :class="{'is-danger': isErrorFirstName, 'is-success': isSuccessFirstName}"
            type="text"
            placeholder="太郎"
            @input="updateFirstName"
            @blur="updateFirstName"
        )
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
      this.changeFamilyName(event.target.value);
      this.checkStatus();
    },
    updateFirstName(event){
      this.changeFirstName(event.target.value);
      this.checkStatus();
    }
  }

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
