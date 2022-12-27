<script setup lang="ts"></script>

<template>
  <div class="back_link">
    <router-link to="/pokemon">Back</router-link>
  </div>
  <div class="status">
    <div>
      <h2>TRAINER CARD</h2>
      <div class="inputs">
        <div>
          <label>NAME：</label>
          <input class="input" value="YUUKI TAGAKU" />
        </div>
        <div>
          <label>POKEMON：</label>
          <input class="input" value="CHARIZARD" />
        </div>
        <div>
          <label>FREE：</label>
          <input class="input" value="I LOVE POKEMON" />
        </div>
      </div>
    </div>
    <div>
      <div class="img_position">
        <div>
          <img src="../../assets/trainer.png" class="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back_link {
  text-align: right;
  margin-right: 1em;
}
.status {
  margin: auto;
  margin-top: 1em;
  width: 600px;
  height: 350px;
  background: linear-gradient(to bottom, #d5e500, #9ca14c);
  box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.45);
  border-radius: 50px;
  display: flex;
}
h2 {
  padding: 1em;
}
.img {
  width: 50%;
  height: 50%;
  margin-top: 4em;
  margin-left: 4em;
  box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.45);
  border-radius: 10px;
}
.inputs {
  width: 15em;
  padding-left: 4em;
}
.input {
  width: 10em;
  height: 2em;
  margin-bottom: 2em;
  border: none;
  background: transparent;
}
.img_position {
  width: 18.5em;
}
</style>
