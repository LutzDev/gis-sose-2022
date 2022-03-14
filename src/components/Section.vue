<template>
  <div class="Section py-8">
    <h3>{{ headline }}</h3>
    <div class="space-y-2">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: ['headline']
}

</script>

<style scoped>

</style>