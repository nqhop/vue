<template>
  <header>
    <h1>
      <router-link to="/coaches">Find a Coach</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/coaches" class="active">All Coaches</router-link>
        </li>
        <li>
          <router-link to="/requests" class="active">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 0 10%;
  color: #fff;
  height: 100px;
  background-color: rgb(117, 49, 196);
  display: flex;
  justify-content: space-between;
  align-content: center;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  /* margin: 0 16px; */
}
a {
  line-height: 100px;
  text-decoration: none;
  color: #fff;
}

a:hover,
a:active {
  color: #ccc;
}
.active {
  padding: 16px 32px;
  border: 2px solid transparent;
}
.active.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  border-radius: 8px;
}
</style>
