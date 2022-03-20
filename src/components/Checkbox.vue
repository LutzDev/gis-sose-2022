<template>
  <li class="flex gap-2 items-center -ml-5">
    <input type="checkbox" class="form-checkbox text-slate-400 dark:text-slate-600">
    <span class="checkbox__content"><slot/></span>
  </li>
</template>

<script>
export default {
  name: "Checkbox"
}
</script>

<style scoped>

</style>