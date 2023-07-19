<template>
  <div>
    <NavBar />

    <section class="section">
      <router-view />
    </section>
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