<template>
  <div class="Header mb-16">
    <div class="flex items-center justify-end gap-2">
      <a v-if="exampleButton === true" :href="examplePage" target="_blank">
      <button class="bg-slate-200 py-2 px-2 rounded text-white dark:bg-slate-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-400" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      </button>
      </a>
      <a v-if="scriptButton === true" :href="scriptPage" target="_blank">
        <button class="py-2 px-2 rounded text-white bg-slate-200 dark:bg-slate-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </a>
      <button id="darkModeToggle" class="bg-slate-200 py-2 px-2 rounded text-white dark:bg-slate-700">
        <svg id="moon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-400 enabled" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        <svg id="sun" xmlns="http://www.w3.org/2000/svg" fill="none" class="h-6 w-6 stroke-slate-400" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data (){
    return{
      scriptPage: 'https://heintz-s.github.io/GIS/',
      examplePage: 'https://heintz-s.github.io/GIS/'
    }
  },
  props: ['scriptButton', 'exampleButton'],
}
</script>

<style scoped>

</style>