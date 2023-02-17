<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <div>
      <RouterLink to="/"></RouterLink>
      <RouterLink :to="{ name: 'Articles' }"></RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
