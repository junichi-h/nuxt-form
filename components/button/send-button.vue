<template lang="pug">
.field.is-centered
    .control
        button.button.is-primary(:disabled="disabled") Submit
</template>

<script>
export default {
  name: 'send-button',
  props: {
    disabled: Boolean
  }
}
</script>

<style lang="sass" scoped>

</style>
