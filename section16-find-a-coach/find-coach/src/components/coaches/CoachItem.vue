<template>
  <li class="wrapper">
    <div class="img">
      <img :src="require(`@/assets/avatars/${image}`)" alt="" />
    </div>
    <div class="info">
      <p class="name">{{ firstName }}</p>
      <p class="rate">{{ rate }} Instructor Rating</p>
      <ul>
        <li
          v-for="categoryId in categories"
          :key="categoryId"
          class="categoriesList"
        >
          <base-button
            :name="getNameOfCategoriesById(categoryId)"
            :bgColorFrom="getColor(categoryId).from"
            :bgColorTo="getColor(categoryId).to"
          />
        </li>
      </ul>
    </div>
  </li>
</template>
<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      categories: "",
      colorOfCategories: [],
    };
  },
  props: ["id", "firstName", "lastName", "rate", "image"],
  mounted() {
    this.$store.getters["coaches/categories"](this.id).then((data) => {
      this.categories = data;
    });
  },
  methods: {
    getNameOfCategoriesById(id) {
      return this.$store.getters["categoties/getNameById"](id);
    },
    getColor(categoryId) {
      const colorInfo =
        this.$store.getters["categoties/colorsById"](categoryId);

      const colorFrom = this.$store.getters.globalColor[colorInfo.from];
      const colorTo = this.$store.getters.globalColor[colorInfo.to];
      console.log(colorInfo.from);
      return { from: colorFrom, to: colorTo };
    },
  },
};
</script>
<style scoped>
ul {
  display: flex;
  margin-left: -16px;
  position: absolute;
  bottom: 0;
}
li {
  list-style: none;
}
.wrapper {
  padding: 16px 8px;
  border-radius: 8px;
  border: 1.5px solid rgb(117, 49, 196);
  display: flex;
}
.img {
  width: 100px;
  height: 100px;
}
.img img {
  width: 100%;
  border-radius: 50%;
}
.info {
  background-color: pink;
  margin-left: 16px;
  position: relative;
}
.name {
  font-size: 24px;
  margin-bottom: 8px;
}
.rate {
  font-size: 14px;
}
.categoriesList {
  margin: 0 16px;
}
</style>
