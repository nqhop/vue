<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {

    };
  },
  methods: {
    
    
  },


  //test
  mounted(){
    this.$store.commit('login');
    console.log("userIsAuthenticated:"+this.$store.getters.userIsAuthenticated);

  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>