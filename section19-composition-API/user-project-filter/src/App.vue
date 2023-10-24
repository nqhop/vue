<template>
  <main>
    <user-list :users="activeUsers" @listProjects="selectUser" />
    <project-list :userProps="selectedUser" />
  </main>
</template>

<script>
import UserList from "./components/users/UserList.vue";
import ProjectList from "./components/projects/ProjectList.vue";
import USER_DATA from "./dummy-data.js";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    UserList,
    ProjectList,
  },
  data() {
    return {
      // activeUsers: USER_DATA,
    };
  },
  setup() {
    const activeUsers = ref(USER_DATA);
    const selectedUser = ref(null);

    function selectUser(value) {
      // console.log("selectUser - value: ", activeUsers.value);
      selectedUser.value = activeUsers.value.find(
        (element) => element.id == value
      );
      // console.log("selectUser: ", selectedUser.value);
    }
    return {
      activeUsers,
      selectUser,
      selectedUser,
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
