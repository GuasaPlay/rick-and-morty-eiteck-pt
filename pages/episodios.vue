<template>
  <div class="">
    <div class="banner-home">
      <div
        class="mx-auto flex h-full w-full max-w-[1280px] items-center justify-start"
      >
        <div class="relative pt-2 text-gray-600">
          <input
            class="h-12 min-w-[500px] rounded-lg bg-white px-5 pr-16 font-medium text-gray-700 placeholder:text-base placeholder:font-medium focus:outline-none"
            type="text"
            name="search"
            placeholder="Buscar un episodio"
          />
          <button class="absolute right-0 top-0 mt-5 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts</p>
    <div v-else class="container mx-auto mt-10">
      <div class="grid grid-cols-4 gap-10">
        <div
          v-for="result in results"
          :key="result.id"
          class="w-full rounded-3xl bg-gray-100"
        >
          <img
            class="aspect-square h-[300px] w-full rounded rounded-t-lg object-cover"
            :src="result.image"
            :alt="result.name"
          />
          <div class="p-4">
            {{ result.name }}
          </div>
        </div>
      </div>
    </div>
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex asperiores
      minima animi. Incidunt officia amet hic, labore cupiditate perferendis
      aliquid perspiciatis, minima temporibus quae ut quibusdam. Expedita
      laudantium ipsum ipsa. Hic nam, placeat corrupti provident, dicta illum
      nobis culpa voluptatibus, quibusdam iure eius eos consectetur dolorem.
      Quaerat repellat necessitatibus nobis nam quod id temporibus quam ipsam,
      possimus, quibusdam, error dolores? Velit voluptatibus accusamus impedit
      qui ducimus doloremque animi est perferendis a veniam! Voluptatem
      necessitatibus harum labore obcaecati, consequatur autem reprehenderit
      veritatis sint, temporibus asperiores omnis minima nam! Dolorem, saepe
      vitae. Veniam illo, ullam porro officiis nostrum aut debitis sapiente
      libero, impedit unde mollitia magni aperiam, molestias enim cupiditate ab.
      Facilis neque numquam officia quisquam? Enim accusamus possimus ducimus
      tempore aut. Consequatur eos quod, minima beatae totam rerum impedit velit
      mollitia cumque reiciendis! Harum iste ipsum similique aspernatur
      dignissimos vel sint, ratione obcaecati voluptatum veniam culpa? Tenetur
      ea tempora asperiores nisi. Nesciunt voluptate in ad ut est sequi
      molestias minima natus reprehenderit quibusdam ea quasi labore, eius aut
      facilis? A asperiores adipisci deleniti necessitatibus optio! Eum vitae
      commodi non accusamus dolorum? Inventore voluptates voluptatum eos
      molestias possimus quod nesciunt ipsam quidem facilis, totam debitis nihil
      cum, eius quibusdam reiciendis voluptatibus corrupti ullam voluptate sunt
      deserunt eligendi optio incidunt natus velit! Totam. Soluta facilis
      adipisci eius aperiam fugit nihil itaque? Sunt facilis praesentium ad
      dignissimos error mollitia at quaerat reiciendis quo, quod doloremque
      temporibus! Reprehenderit ullam nostrum obcaecati, corrupti veniam
      corporis placeat. Maiores ab quo a impedit vitae laborum asperiores atque
      corrupti magni corporis, nesciunt itaque reprehenderit debitis, natus
      accusantium. Dolorem blanditiis esse amet nostrum fugit fugiat officia
      assumenda cupiditate sapiente beatae! Numquam corrupti sunt ratione maxime
      provident molestiae inventore et eos quibusdam, vel consequuntur soluta
      aut deleniti eaque temporibus cum minus a officiis omnis fugit nisi quae!
      Recusandae quidem quam vitae!
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      results: {},
    }
  },
  async fetch() {
    const data = await this.$axios.$get('/character')
    console.log(data)
    this.results = data.results
  },
}
</script>
<style lang="postcss" scoped>
.banner-home {
  background: url('~assets/img/banner-episodes-1.jpg');
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: black;
}
</style>
