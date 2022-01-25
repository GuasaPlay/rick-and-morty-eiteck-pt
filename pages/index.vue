<template>
  <div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts</p>
    <div v-else>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      data: {},
    }
  },
  async fetch() {
    const data = await this.$axios.$get('/character')
    console.log(data)
    this.data = data.results
  },
}
</script>
