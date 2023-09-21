<template>
  <base-container>
    <categories-list></categories-list>
  </base-container>
  <base-container>
    <ul>
      <coach-item
        v-for="coach in this.$store.getters['coaches/coaches']"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :rate="coach.rate"
        :image="coach.image"
      >
      </coach-item>
    </ul>
    <base-button bgColor="red" cursor="pointer"></base-button>
  </base-container>
</template>

<script>
import CoachItem from "@/components/coaches/CoachItem.vue";
import BaseContainer from "@/components/ui/BaseContainer.vue";
import CategoriesList from "@/components/categories/CategoriesList.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
  components: {
    CoachItem,
    BaseContainer,
    CategoriesList,
    BaseButton,
  },
  mounted() {
    // set color for categories
    let categories = this.$store.getters["categoties/categories"];
    categories = categories.map((el) => el.id);
    console.log(categories);
    const globalColor = this.$store.getters.globalColor;
    const max = globalColor.length - 1;
    let colors = [];
    categories.forEach((e) => {
      colors.push({id: e, from: numberInRange(max, 0), to: numberInRange(max, 0) });
    });
    this.$store.commit("categoties/setColors", colors);
    console.log(this.$store.getters["categoties/colors"]);
    console.log(this.$store.getters['categoties/colorsById']('c2'));
  },
};

function numberInRange(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>
