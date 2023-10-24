<template>
    <li>
        <h3>{{ userName }}</h3>
        <button>View Projects</button>
    </li>
</template>

<script>
export default {
    props: ['id', 'userName'],
    // emits: 
}
</script>

<style scoped>
li {
  margin:6px 0;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border: 1px solid #ccc;
}

li h3 {
  margin: 0;
}
</style>