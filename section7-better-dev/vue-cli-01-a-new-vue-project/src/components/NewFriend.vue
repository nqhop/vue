<template>
  <div>
    <div class="add-new-friend">
      <h1>Add new Friend</h1>
      <form v-on:submit.prevent="addFriend">
        <div>
          <label for="friend-name">Name:</label>
          <input type="text" id="friend-name" v-model="name" />
        </div>
        <div>
          <label for="friend-phone">Phone:</label>
          <input type="tel" id="friend-phone" v-model="phoneNumber" />
        </div>
        <div>
          <label for="friend-email">Email:</label>
          <input type="text" id="friend-email" v-model="email" />
        </div>
        <div>
          <label for="is-favorite">Is favorite:</label>
          <input type="checkbox" id="is-favorite" v-model="isFavorite" />
        </div>
        <button>Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phoneNumber: "",
      email: "",
      isFavorite: false,
    };
  },
  emits: ["add-friend"],
  methods: {
    addFriend() {
      console.log(this.name);
      this.$emit("add-friend", {
        id: new Date().toISOString(),
        name: this.name,
        phone: this.phoneNumber,
        email: this.email,
        isFavorite: this.isFavorite,
      });
    },
  },
};
</script>
