<template>
  <li class="wrapper">
    <div class="img">
      <!-- <img :src="image" alt="" /> -->
      <!-- <img src="~@/assets/avatars/instructor1.jpg" alt="" /> -->
      <!-- <img :src="require('@/assets/avatars/instructor1.jpg')" alt="" /> -->
      <img :src="require(`@/assets/avatars/${image}`)" alt="" />
    </div>
    <div class="info">
      <p class="name">{{ firstName }}</p>
      <p class="rate">{{ rate }} Instructor Rating</p>

      <p class="categories">cate</p>
      
      <ul>
        <li v-for="category in this.$store.getters['coaches/categories'](1)" :key="category">
        <base-button></base-button>
        </li>
      </ul>
    </div>
  </li>
</template>
<script>
// import BaseButton from '../ui/BaseButton.vue';
export default {
    components: {
        // BaseButton
    },
  props: ["id", "firstName", "lastName", "rate", "image"],
};
</script>
<style scoped>
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
}
.name {
  font-size: 24px;
  margin-bottom: 8px;
}
.rate{
    font-size: 14px;
}
.categories{
}
</style>
