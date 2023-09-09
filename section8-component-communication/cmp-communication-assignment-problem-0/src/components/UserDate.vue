<template>
  <section>
    <div class="row">
      <div class="col-30">Name</div>
      <div class="col-70">
        <input type="text" v-model="enteredName" />
      </div>
    </div>

    <div class="row">
      <div class="col-30">Age</div>
      <div class="col-70">
        <input type="text" v-model="enteredAge" />
      </div>
    </div>
    <button @click="$emit('add-user')">Add</button>
  </section>
</template>
<script>
export default {
  emits: ["add-user"],
  props: ["id", "username", "age"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    addUser() {
      console.log(this.enteredName);
      this.$emit("add-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>
<style scoped>
section {
  /* text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding-left: 1rem;
  background-color: green;
  color: #fff; */
}
.row {
  margin-bottom: 1rem;
}
.col-30 {
  display: inline-block;
  width: 30%;
}
.col-70 {
  display: inline-block;
  width: 70%;
}
.col-70 input {
  width: 100%;
  height: 1.5rem;
}
button {
  color: #fff;
  border-radius: 8px;
  border: none;
  background-color: green;
  padding: 0.4rem 1rem;
}
</style>
