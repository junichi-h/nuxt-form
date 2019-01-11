<template lang="pug">
.field
    label.label Email
    .control.has-icons-left.has-icons-right
        input.input(
        :class="{'is-danger': emailErrorMessage.length > 0, 'is-success': isSuccessEmail}"
            type="email"
            placeholder="Email input"
            @keydown="updateEmail"
            @blur="blurEmail"
        )
        p.help.is-danger(v-if="emailErrorMessage.length > 0") {{emailErrorMessage}}
        span.icon.is-small.is-right(v-if="isSuccessEmail")
            i.fas.fa-check
        span.icon.is-small.is-left
            i.fas.fa-envelope
        span.icon.is-small.is-right(v-if="emailErrorMessage.length > 0")
            i.fas.fa-exclamation-triangle
</template>

<script>
export default {
  name: 'email',
  props: {
    changeEmail: Function,
    checkStatus: Function,
    emailErrorMessage: String,
    isSuccessEmail: Boolean
  },
  methods: {
    updateEmail(event) {
      if (this.isType) {
        return;
      }
      this.isType = true;
      if (this.timer !== -1) {
        window.clearTimeout(this.timer);
      }
      this.timer = window.setTimeout(() => {
        const value = event.target.value;
        this.isType = false;
        // @が含まれてるときだけやる。
        if (value.indexOf('@') >= 0) {
          this.changeEmail(value);
          this.checkStatus();
        }
      }, 600);
    },
    blurEmail(event) {
      if (this.timer !== -1) {
        window.clearTimeout(this.timer);
      }
      this.isType = false;
      this.changeEmail(event.target.value);
      this.checkStatus();
    }
  },
  data: () => ({
    timer: -1,
    isType: false
  })
}
</script>

<style lang="sass" scoped>

</style>
