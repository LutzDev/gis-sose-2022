<template>
  <div class="flex gap-2 items-center">
    <svg v-if="infoIcon === true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 dark:stroke-slate-300" fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
    <svg v-if="contactIcon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 dark:stroke-slate-300" fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <svg v-if="deadlineIcon === true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 dark:stroke-slate-300" fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h3>{{ headline }}</h3>
  </div>
</template>

<script>
export default {
  name: "IconHeadline",
  props: ['headline', 'infoIcon', 'contactIcon', 'deadlineIcon']
}
</script>

<style scoped>

</style>