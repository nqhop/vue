<template>
  <base-container>
    <p class="title">Requests Received</p>
    <ul v-if="requests.length > 0">
      <li v-for="request in requests" :key="request.id">
        <div class="request-item">
          <p class="email">{{ request.email }}</p>
          <p class="message">{{ request.message }}</p>
        </div>
      </li>
    </ul>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      requests: this.$store.getters["requests/requestsMessageEmail"],
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
}
.request-item{
    border: 1px solid #ccc;
    padding: 16px 12px;
    border-radius: 8px;
}
.email{
    color: rgb(117, 49, 196);
    font-weight: bold;
}
.message{
    margin-top: 8px;
}
</style>
