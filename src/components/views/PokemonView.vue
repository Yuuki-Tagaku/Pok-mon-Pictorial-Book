<script setup lang="ts">
import TheList from "../modules/TheList.vue";
</script>

<template>
  <div>
    <div class="back_link">
      <div>
        <router-link to="/">Back</router-link>
      </div>
      <div>
        <router-link to="/profile">profile</router-link>
      </div>
    </div>
    <TheList />
  </div>
</template>

<style>
.back_link {
  text-align: right;
  margin-right: 1em;
}
</style>
