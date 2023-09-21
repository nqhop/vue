<template>
  <p class="title">Find Your Coach</p>
  <div>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <input
          type="checkbox"
          :id="category.id"
          :value="category.id"
          v-model="checked"
          :checked="checked.includes(category.id)"
        />
        <label :for="category.id">{{ category.name }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // checked: this.$store.getters["categoties/checkedCategories"],
    };
  },
  computed: {
    categories() {
      return this.$store.getters["categoties/categories"];
    },
    checked() {
      return this.$store.getters["categoties/checkedCategories"];
    },
  },
  watch: {
    checked(value) {
      this.$store.commit("categoties/changeCheckedCategories", value);
    },
  },
  mounted() {
    console.log(this.$store.getters["categoties/checkedCategories"]);
  },
};
</script>

<style scoped>
ul {
  display: flex;
  margin-left: -8px;
}
li {
  list-style: none;
  margin: 0 16px;
}
label {
  margin-left: 8px;
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
}
</style>
