<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><Strong>Phone:</Strong>{{ phoneNumber }}</li>
      <li><Strong>Email:</Strong>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete-friend', id)">Delete</button>
  </li>
</template>

<script>
export default {
  //   props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      //   default: "0",
      //   validator: function (value) {
      //     return value === "1" || value === "0";
      //   },
    },
  },
    emits: ['toggle-favorite', 'delete-friend'],
//   emits: {
//     "toggle-favorite": function (id) {
//       if (id) {
//         return true;
//       } else {
//         console.warn("Id is midding!");
//         return false;
//       }
//     },
//   },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      //   this.frinedIsFavorite = !this.frinedIsFavorite;

      // always use kebab case
      // so that's different to props where in the component that receives it (camel case)
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
