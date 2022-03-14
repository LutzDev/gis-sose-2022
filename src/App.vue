<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
import Tasks from "./components/Tasks.vue";
import Header from "./components/Header.vue";
import Introduction from "./components/Introduction.vue";
</script>

<template>
<!--  <Header />
  <Introduction />
  <Tasks />
  <Footer title="asdasd"/>-->
  <router-link to="/">Ka</router-link>
  <router-link :to="{name: 'Home'}">Home</router-link>
  <router-link :to="{name: 'Exe1'}">Exe1</router-link>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
