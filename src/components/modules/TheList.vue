<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";

const pokemons = ref<{ name: string; imgUrl: string }[]>([]);
// const imgUrls = ref<string[]>([]);

const imgBaseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const extension = ".png";

const generateImgUrl = (url: string) =>
  `${imgBaseUrl}${url.substring(34).replace("/", "")}${extension}`;

onMounted(async () => {
  try {
    const respons = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    const results = respons.data.results;
    pokemons.value = results.map((result: any) => ({
      ...result,
      imgUrl: generateImgUrl(result.url),
    }));
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div>
    <ul>
      <li v-for="pokemon in pokemons" class="list_style">
        <img :src="pokemon.imgUrl" alt="" />
        <p>{{ pokemon.name }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
p {
  margin-top: 0;
}
li {
  width: 12em;
  height: 10em;
  background-color: aliceblue;
  border-radius: 20px;
  margin: 1em;
}
ul {
  padding-left: 60px;
}
.list_style {
  display: inline-block;
  text-align: center;
  align-items: center;
  gap: 30em;
}
</style>
