<template lang="pug">
.field
    label.label Email
    .control.has-icons-left.has-icons-right
        input.input(
        :class="{'is-danger': emailErrorMessage.length > 0, 'is-success': isSuccessEmail}"
            type="email"
            placeholder="Email input"
            @input="updateEmail"
            @blur="updateEmail"
        )
        p.help.is-danger(v-if="emailErrorMessage.length > 0") {{emailErrorMessage}}
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
      this.changeEmail(event.target.value);
      this.checkStatus();
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
