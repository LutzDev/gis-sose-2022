<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<template>
  <div class="App px-12 pb-24 pt-12 dark:bg-slate-800 selection:bg-indigo-100 selection:text-indigo-600">
<!--    <router-link to="/">Ka</router-link>
    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link :to="{name: 'Abgabeformat'}">Abgabeformat</router-link>-->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Work Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
