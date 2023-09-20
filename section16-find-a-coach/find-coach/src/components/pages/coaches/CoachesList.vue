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
        </coach-item
      >
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
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
