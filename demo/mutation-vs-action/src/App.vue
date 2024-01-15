<template>
  <p>My Tests</p>
</template>

<script>
export default {
  mounted() {
    // const books = this.$store.getters.books;
    // console.log(books);

    const books = this.$store.dispatch("getBooks");
    console.log(books);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
