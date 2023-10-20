<template>
  <base-dialog :show="error" title="An error accurred" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <base-dialog :show="isLoading" title="Autenticating..." fixed>
    <base-spinner></base-spinner
  ></base-dialog>
  <base-card>
    <!-- <form @submit.prevent="submitForm">
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
      <base-button>{{ baseButtonMode }}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode"
        >Signup instead</base-button
      >
    </form> -->
    he
  </base-card>
</template>

<script>
import BaseDialog from '../../components/ui/BaseDialog.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';
export default {
  components: { BaseSpinner, BaseDialog },
  data() {
    return {
      email: '',
      password: '123456',
      formIsvalid: true,
      mode: 'signup',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    baseButtonMode() {
      return this.mode == 'login' ? 'Login' : 'Sign Up';
    },
  },
  methods: {
    async submitForm() {
      this.formIsvalid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsvalid = false;
        return;
      }

      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      this.isLoading = true;

      try {
        if (this.mode == 'login') {
          console.log('login');
          await this.$store.dispatch('login', actionPayload);
        } else {
          console.log('sign up');
          await this.$store.dispatch('signup', actionPayload);
        }
      } catch (err) {
        console.log('err ', err);
        this.error = err.meddage || 'Faild to authenticate, try later';
        console.log('submitForm error', this.error);
      }

      this.isLoading = false;
    },
    switchAuthMode() {
      this.mode = this.mode == 'login' ? 'signup' : 'login';
    },
    handleError() {
      this.error = null;
    },
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
