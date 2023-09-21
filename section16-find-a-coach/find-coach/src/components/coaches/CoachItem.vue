<template>
  <div class="main">
    <li class="wrapper">
      <div class="img">
        <img :src="require(`@/assets/avatars/${image}`)" alt="" />
      </div>
      <div class="info">
        <p class="name">{{ firstName }} {{ lastName }}</p>
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
              cursor="auto"
            />
          </li>
        </ul>
      </div>
    </li>

    <div class="contactAndDetails">
      <base-button class="contact" name="Contact"></base-button>
      <base-button name="View Details"></base-button>
    </div>
  </div>
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
.main {
  border: 1.5px solid rgb(117, 49, 196);
  padding: 16px 8px;
  border-radius: 8px;
  margin-top: 16px;
}
.main::after {
  content: "";
  display: block;
  clear: both;
}
.wrapper {
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
  margin-left: 16px;
  position: relative;
}
.name {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 8px;
}
.rate {
  font-size: 14px;
}
.categoriesList {
  margin: 0 16px;
}
.contactAndDetails {
  float: right;
  margin-top: 16px;
}
.contactAndDetails .contact {
  margin-right: 16px;
}
</style>
