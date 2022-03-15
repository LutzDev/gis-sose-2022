<template>
  <div class="List">
    <h4 v-if="headline">{{ headline }}</h4>
    <ul class="pl-6" :class="[isOrdered ? 'list-decimal' : 'list-disc']">
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    headline: String,
    isOrdered: Boolean,
  },
};
</script>

<style scoped>
</style>