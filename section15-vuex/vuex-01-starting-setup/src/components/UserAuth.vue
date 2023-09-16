<template>
  <button @click="login" v-if="!userIsAuthorized">Login</button>
  <button @click="logout" v-if="userIsAuthorized">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters(['userIsAuthorized']),
  },
};
</script>
