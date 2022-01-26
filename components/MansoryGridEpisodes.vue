<template>
  <div>
    <div
      class="mt-6 w-full columns-1 gap-3 space-y-3 pb-6 sm:columns-3 md:columns-4 lg:columns-5"
    >
      <div
        v-for="episode in episodes"
        :key="episode.id"
        class="break-inside-avoid rounded-lg border-2 border-gray-200 bg-white px-3 py-2 font-medium text-slate-700 shadow-sm transition-colors hover:border-cyan-200/60 hover:bg-cyan-600 hover:text-white"
      >
        {{ episode.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    episodes: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
