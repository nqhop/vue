<template>
  <form @submit.prevent="submitForm">
    <base-card>
      <div class="form-control">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <p v-if="!formIsvalid" class="errors">
        Please enter a valid email and password (must be at least 6 characters
        long).
      </p>
      <base-button>Login</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode"
        >Signup instead</base-button
      >
    </base-card>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsvalid: true,
      mode: 'signup',
    };
  },
  methods: {
    submitForm() {
      this.formIsvalid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsvalid = false;
        return;
      }

      if (this.mode == 'login') {
        console.log('login');
      } else {
        console.log('submitForm');
        // this.$store.dispatch({
        //   type: 'auth/signup',
        //   value: { email: this.email, password: this.password },
        // });

        this.$store.dispatch('signup', {
          email: this.email,
          password: this.password,
        });
      }
    },
    switchAuthMode() {},
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
.actions {
  text-align: center;
}

.errors {
  font-weight: bold;
  color: red;
}
</style>
