<template>
  <form>
    <input type="search" v-model="searchValue" placeholder="Filter items" />
  </form>
</template>
<script>
import { ref, watch } from "vue";
export default {
  setup(props, context) {
    const searchValue = ref("");
    watch(searchValue, function(newValue){
        context.emit('selectedValue', newValue)
    })
    return {
      searchValue,
    };
  },
};
</script>

<style scoped>
input {
  font: inherit;
  width: 100%;
  border: 1px solid #ccc;
  padding: 4px;
}
input:focus {
  outline: none;
  border-color: #00006b;
  background-color: #eeeeff;
}
</style>
