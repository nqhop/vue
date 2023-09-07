<template>
  <li>
    <h2>{{ userName }}</h2>
    <h4>{{ age }}</h4>
  </li>
</template>

<script>
export default {
  props: ["id", "userName", "age"],
  

};
</script>
<style scoped>
li {
  /* background-color: aqua; */
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  border-radius: 10px;
}
h2,
h4 {
  display: inline;
  padding: 1rem;
}
</style>
