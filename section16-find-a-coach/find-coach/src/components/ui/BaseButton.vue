<template>
  <div class="btn">{{ name }}</div>
</template>

<script>
export default {
  data() {
    return {
      textTransform: this.uppercase ? "uppercase" : "capitalize",
    };
  },
  props: {
    cursor: {
      default: "pointer",
    },
    name: {
      type: String,
      default: "Button",
    },
    bgColorFrom: {
      default: "#7b81ec",
    },
    bgColorTo: {
      default: "#3bd1d3",
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  text-transform: v-bind(textTransform);
  transition: 0.5s;
  box-shadow: 0 0 20px #eee;
  background-size: 200% auto;

  cursor: v-bind(cursor);
  background-image: linear-gradient(
    to right,
    /* #f6d365 0%,
    #fda085 51%,
    #f6d365 100% */ v-bind(bgColorFrom) 0%,
    v-bind(bgColorTo) 100%
  );
}
.btn:hover {
  background-position: right center; /* change the direction of the change here */
}
</style>
