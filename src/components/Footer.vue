<script>
import FooterItem from "./FooterItem.vue";

export default {
  name: "footer",
  components: {FooterItem},
  props: ['title']
}
</script>

<template>
  <div class="Footer px-12 py-24">


  <div class="grid grid-cols-3 gap-3">
    <FooterItem />
    <FooterItem />
    <FooterItem />
  </div>

  </div>
</template>

<style scoped>

</style>