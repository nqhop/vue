<template>
  <h3>{{ finalCouter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    //     counter() {
    //       //   return this.$store.state.counter;
    //       return this.$store.getters.finalCouter;
    //     },

    // mapgetters gives you an object, which we merge into the
    // computed properties object
    ...mapGetters('numbers', ['finalCouter']),
  },
};
</script>
