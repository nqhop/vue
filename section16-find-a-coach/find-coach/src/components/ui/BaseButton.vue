<template>
  <div :style="btnStyles">{{ name }}</div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "rgb(117, 49, 196)",
    },
    cursor: {
      default: "none",
    },
    name: {
      type: String,
      default: "Button",
    },
  },
  computed: {
    btnStyles() {
      return {
        "background-color": this.bgColor,
        cursor: this.cursor,
      };
    },
  },
};
</script>

<style scoped>
div {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 16px;
}
</style>
