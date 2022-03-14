<template>
  <div class="List">
    <h4 v-if="headline">{{ headline }}</h4>
    <ul class="list-disc pl-6">
      <slot/>
    </ul>
  </div>

</template>

<script>
export default {
  name: "List",
  props: ["headline"]
}
</script>

<style scoped>

</style>