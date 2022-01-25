<template>
  <div class="">
    <div class="banner-home">
      <div
        class="container mx-auto flex h-full w-full items-center justify-start px-2 transition-all duration-300 sm:px-4"
      >
        <div class="relative text-gray-600">
          <input
            class="h-12 w-full rounded-lg bg-white px-5 pr-16 font-medium text-gray-700 transition-all duration-300 placeholder:text-base placeholder:font-medium focus:outline-none md:min-w-[500px]"
            type="text"
            name="search"
            placeholder="Buscar un personaje"
          />
          <button class="absolute right-0 top-0 mt-3 mr-4">
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
    <div
      v-else
      class="container mx-auto mt-10 px-2 transition-all duration-300 sm:px-4"
    >
      <div
        class="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="result in results"
          :key="result.id"
          class="w-full transform rounded-xl bg-white p-3 shadow-lg transition-all hover:scale-105 hover:shadow-cyan-300/30"
        >
          <NuxtLink :to="`personaje/${result.id}`" class="">
            <div class="aspect-auto w-full rounded-lg bg-gray-100">
              <img
                class="h-full w-full rounded-xl object-cover"
                :src="result.image"
                :alt="result.name"
              />
            </div>
          </NuxtLink>
          <div class="mt-3">
            <div>
              <NuxtLink
                :to="`personajes/${result.id}`"
                class="font-poppins text-lg font-bold text-slate-700 transition-colors line-clamp-1 hover:text-cyan-500"
                :title="result.name"
                >{{ result.name }}</NuxtLink
              >
            </div>
            <div class="mt-0">
              {{ result.species }}
            </div>
            <div class="mt-2">
              <span
                class="rounded-md px-2 py-0.5 text-sm font-medium text-white"
                :class="getColorStatus(result.status)"
                >{{ parseStatus(result.status) }}</span
              >
            </div>
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
    const data = await this.$axios.$get('/character?page=1')
    console.log(data)
    this.results = data.results
  },
  methods: {
    parseStatus(data) {
      const status = {
        Alive: 'Vivo',
        Dead: 'Muerto',
        unknown: 'Desconocido',
      }
      return status[data]
    },
    getColorStatus(data) {
      const status = {
        Alive: 'bg-green-500',
        Dead: 'bg-red-500',
        unknown: 'bg-gray-600',
      }
      return status[data]
    },
  },
}
</script>
<style lang="postcss" scoped>
.banner-home {
  background: url('~assets/img/banner-home.png');
  /* width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  @apply h-[350px] w-full bg-slate-800 bg-cover bg-center bg-no-repeat transition-all sm:h-[400px];
}
</style>
