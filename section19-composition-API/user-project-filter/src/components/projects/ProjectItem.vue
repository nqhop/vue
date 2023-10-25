<template>
    <li>
        <h3>{{ title }}</h3>
    </li>
</template>

<script>
export default {
    props: ['title'],
}
</script>

<style scoped>
li{
    background-color: #00006b;
    color: white;
    margin: 16px 0;
}
li h3{
    margin: 0;
    padding: 8px;
}
    
</style>