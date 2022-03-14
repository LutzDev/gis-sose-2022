<template>
  <div v-if="language" class="rounded-md overflow-hidden">
    <pre v-highlightjs="sourcecode"><code :class="language"><slot/></code></pre>
  </div>
</template>

<script>

export default {
  name: "Code",
  props: ['language']
}
</script>

<style scoped>
</style>