<template>
  <div class="Text">
    <h4 v-if="headline">{{ headline }}</h4>
    <p><slot/></p>
  </div>
</template>

<script>
export default {
  name: "Text",
  props: ["headline"]
}
</script>

<style scoped>

</style>