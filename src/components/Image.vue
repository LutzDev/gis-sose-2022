<template>
  <div class="bg-gray-100 rounded-lg p-8">
    <img :src="`assets/img/${fileName}`" class="object-cover h-96 m-auto" />
    <p class="text-center italic">{{ imgTitle }}</p>
  </div>
</template>

<script>
export default {
  name: "Image",
  props: ["fileName", "imgTitle"],
};
</script>

<style scoped>
</style>