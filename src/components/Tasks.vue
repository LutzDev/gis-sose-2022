<template>
  <div class="Tasks px-12 py-24 divide-y-2 border-b-2">
    <TaskItem />
    <TaskItem />
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  name: "Tasks",
  components: {TaskItem},
}
</script>

<style scoped>

</style>