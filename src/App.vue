<script setup lang="ts">
import TheHeader from "./components/modules/TheHeader.vue";
import TheTitle from "./components/modules/TheTitle.vue";
</script>

<template>
  <div class="header_style">
    <TheHeader />
    <TheTitle />
  </div>
  <RouterView />
</template>

<style>
html {
  background-color: tomato;
  height: 100vh;
}
body {
  height: 100vh;
  margin-top: 10em;
}
ul {
  list-style: none;
}
#app {
  height: 100%;
}
.header_style {
  width: 100%;
  display: flex;
  background-color: tomato;
  border-bottom: 3px solid black;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
