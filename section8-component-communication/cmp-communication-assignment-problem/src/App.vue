<template>
  <section>
    <header>
      <h1>List User</h1>
      <p>Props & Events</p>
    </header>
    <div class="list-and-add-user">
      <ul class="list-user">
        <active-user
          v-for="user in users"
          :key="user.id"
          :id="user.id"
          :user-name="user.username"
          :age="user.age"
        />
      </ul>
      <user-data class="add-user" @add-user="AddNewUser"/>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: "manuel",
          username: "manuel",
          age: 22,
        },
        {
          id: "julie",
          username: "julie",
          age: 21,
        },
      ],
    };
  },
  methods: {
    AddNewUser(name, age){
      console.log(name)
      this.users.push({id: new Date().getUTCMilliseconds(), username: name, age: age})
    }
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
  padding: 0px;
}
header {
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: green;
  color: #fff;
  width: 100%;
  max-width: 40rem;
}
.list-user {
  list-style-type: none;
  width: 48%;
  display: inline-block;
}
.list-and-add-user {
  margin: 0 2rem;
  max-width: 50rem;
}
.list-and-add-user ul {
  padding-inline-start: 0px;
  margin-block-start: 0;
}
.add-user {
  padding: 1rem;
  width: 48%;
  float: right;
}

.add-user,
.list-user {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
}
</style>
