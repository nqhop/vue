<template>
  <the-header></the-header>
  <router-view></router-view>
  <notifications/>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
