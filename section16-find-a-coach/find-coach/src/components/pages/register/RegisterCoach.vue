<template>
  <base-container>
    <p class="title">Register coach</p>

    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          v-model.trim="firstName"
        />
      </div>

      <div class="form-control">
        <label for="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          v-model.trim="lastName"
        />
      </div>

      <div class="form-control">
        <label for="desc">Description</label>
        <textarea
          rows="6"
          type="text"
          id="desc"
          name="desc"
          v-model.trim="desc"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="rating">Rating</label>
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          id="rating"
          name="rating"
          v-model.trim="rating"
        />
      </div>

      <div class="form-control">
        <label>Areas of Expertise</label>
        <ul>
          <li v-for="category in categories" :key="category.id">
            <div class="expertise-item">
              <input
                type="checkbox"
                :id="category.id"
                :value="category.id"
                v-model="exertise"
              />
              <label class="expertise" :for="category.id">{{
                category.name
              }}</label>
            </div>
          </li>
        </ul>
      </div>

      <button>
        <base-button type="button" name="Register" />
      </button>
    </form>
  </base-container>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      categories: this.$store.getters["categoties/categories"],
      firstName: "",
      lastName: "",
      rating: "",
      desc: "",
      exertise: [],
    };
  },
  methods: {
    submitForm() {
      console.log("firstName: " + this.firstName);
      console.log("lastName: " + this.lastName);
      console.log("desc: " + this.lastName);
      console.log("exertise: " + this.exertise);
    },
  },
  mounted() {
    console.log("mounted in RegisterCoach: ", this.categories);
  },
};
</script>

<style scoped>
label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}
li {
  list-style: none;
}
button {
  background: transparent;
  border: none;
  margin-top: 16px;
}
.title {
  font-size: 24px;
  font-weight: bold;
}
.form-control {
  margin-top: 16px;
}
input[type="number"],
input[type="text"],
textarea[type="text"] {
  width: 100%;
  border: 1px solid #ccc;
  outline: none;
  padding: 8px;
}
input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}
input {
  height: 24px;
}
.expertise {
  margin-left: 8px;
  display: inline-block;
  font-weight: 500;
  margin-bottom: none;
  margin-bottom: 0;
}
.expertise-item {
  display: flex;
  align-items: center;
}
</style>
