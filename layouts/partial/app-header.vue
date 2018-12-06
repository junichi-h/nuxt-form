<template lang="pug">
    header.hero.is-medium.is-primary.is-bold
        Layout
            .hero-body
                .container
                    h1.title Nuxt Form
                    h2.subtitle just a sample
    
</template>

<script>
import Layout from '../../components/common/layout';
export default {
  name: 'app-header',
  components: {
    Layout
  }
}
</script>

<style lang="sass" scoped>

</style>
