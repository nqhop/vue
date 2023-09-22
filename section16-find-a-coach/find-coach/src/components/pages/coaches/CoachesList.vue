<template>
  <base-container>
    <categories-list></categories-list>
  </base-container>
  <base-container>
    <div class="refreshAndRegister">
      <base-button name="Refresh" @click="refresh"></base-button>
      <base-button name="Register as Coach" @click="register"></base-button>
    </div>
    <ul>
      <div
        v-for="coach in this.$store.getters['coaches/coaches']"
        :key="coach.id"
      >
        <coach-item
          v-if="checkFindCoach(coach.id)"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.rate"
          :image="coach.image"
        >
        </coach-item>
      </div>
    </ul>
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
      colors.push({
        id: e,
        from: numberInRange(max, 0),
        to: numberInRange(max, 0),
      });
    });
    this.$store.commit("categoties/setColors", colors);

    // test
    // console.log(this.$store.getters["categoties/colors"]);
    // console.log(this.$store.getters["categoties/colorsById"]("c2"));
  },
  methods: {
    checkFindCoach(coachId) {
      const categoriesOfCoach =
        this.$store.getters["coaches/categoriesType2"](coachId);
      const checkedCategories =
        this.$store.getters["categoties/checkedCategories"];

      for (let i = 0; i < categoriesOfCoach.length; i++) {
        for (let j = 0; j < checkedCategories.length; j++) {
          if (categoriesOfCoach[i] == checkedCategories[j]) return true;
        }
      }
    },
    refresh() {
      let categories = this.$store.getters["categoties/categories"];
      categories = categories.map((item) => item.id);
      this.$store.commit("categoties/changeCheckedCategories", categories);

      console.log(
        "refresh",
        this.$store.getters["categoties/checkedCategories"]
      );
    },
    register() {
      this.$router.push("/register");
    },
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
.coachItem {
  margin-top: 16px;
}
.refreshAndRegister {
  display: flex;
  justify-content: space-between;
}
</style>
