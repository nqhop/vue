<template>
  <p>{{ currentCoachId }}</p>
  <base-container class="base-container">
    <p class="title">{{ coach.firstName }} {{ coach.lastName }}</p>
    <p>{{ coach.rate }} Instructor Rating</p>
  </base-container>
  <base-container>
    <p class="title">Intersted? Reach out now!</p>
    <form class="form" @submit.prevent="submitForm">
      <div class="from-control">
        <label for="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model.trim="email"
          required
        />
      </div>
      <div class="from-control">
        <label for="message">Message</label>
        <textarea
          rows="6"
          type="text"
          id="message"
          name="message"
          v-model.trim="message"
          required
        >
        </textarea>
      </div>
      <div class="button">
        <button>
          <base-button name="Send message" />
        </button>
      </div>
    </form>
  </base-container>
</template>

<script>
import BaseContainer from "@/components/ui/BaseContainer.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: { BaseContainer, BaseButton },
  data() {
    return {
      currentCoachId: this.$route.params.coachID,
      coach: this.$store.getters["coaches/getCoachById"](
        this.$route.params.coachID
      ),
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      this.$store.commit("requests/addRequests", {
        email: this.email,
        message: this.message,
      });
      this.email = "";
      this.message = "";
      this.$notify({ type: "success", text: "Send message successful" });
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}
button {
  background: transparent;
  border: none;
  margin-top: 16px;
}
.button {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.base-container {
  margin-bottom: -32px;
}
.title {
  font-size: 24px;
  font-weight: bold;
  padding: 12px 0;
}
.form-control {
  margin-top: 16px;
}
input[type="email"],
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
.form {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 0 8px;
  border-radius: 8px;
}
</style>
