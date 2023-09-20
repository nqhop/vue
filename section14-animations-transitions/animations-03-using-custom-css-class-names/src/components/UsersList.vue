<template>
  <transition-group name="list" tag="ul">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="userName" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Lisa', 'Jack'],
    };
  },
  methods: {
    addUser() {
      const userName = this.$refs.userName.value.trim();
      if (userName == '') return;
      //   console.log(userName);
      this.users.unshift(userName);
      this.$refs.userName.value = null;
    },
    removeUser(user) {
      console.log(user);
      const userIndex = this.users.findIndex((u) => u == user);
      this.users.splice(userIndex, 1);
      console.log(userIndex);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
