<template>
  <div>
    <NavBar />

    <div class="is-loading-bar has--text-centered" v-bind:class={'v-bind:class="{'is-loading': $store.state.isLoading}">

    </div>


  </div>
</template>



<script>

import axios from 'axios';
import NavBar from './components/layout/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },

  beforeCreate() {
    this.$store.commit('initializeStore')

    if (this.$store.state.token) {
      axios.defaults.headers.common['Authorization'] = "Token" + this.$store.state.token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
  }
}

</script>


<style lang="scss">
@import '../node_modules/bulma/'
</style>  