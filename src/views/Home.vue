<template>
  <p>Route Home</p>
  <Text/>
  <Footer/>
</template>

<script>
import Text from "../components/Text.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {Footer, Text}
}
</script>

<style scoped>

</style>