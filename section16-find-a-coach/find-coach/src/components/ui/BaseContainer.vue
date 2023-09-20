<template>
  <div class="wrapper">
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
.main {
  min-width: 650px;

  margin: 32px auto;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
}
</style>
