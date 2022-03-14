<template>
  <div class="FooterItem">
    <slot/>
  </div>
</template>

<script>
import IconHeadline from "./IconHeadline.vue";
export default {
  name: "FooterItem",
  components: {IconHeadline}
}
</script>

<style scoped>

</style>