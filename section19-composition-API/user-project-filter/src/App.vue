<template>
  <main>
    <user-list :users="activeUsers" />
    <!-- <user-list /> -->
  </main>
</template>

<script>
import UserList from "./components/users/UserList.vue";
import USER_DATA from "./dummy-data.js";

export default {
  name: "App",
  components: {
    UserList,
  },
  data() {
    return {
      activeUsers: USER_DATA,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing: border-box;
}
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
}

main {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 8px 24px;
  cursor: pointer;
  margin: 8px;
}

button:hover,
button:active {
  background-color: #efefff;
}
button.selected {
  background-color: #00006b;
  color: white;
}
</style>
