<template>
  <div>
    <HeroBannerCharacter>
      <section class="relative text-gray-600">
        <input
          v-model="search"
          class="h-12 w-full rounded-lg bg-white px-5 pr-16 font-medium text-gray-700 transition-all duration-300 placeholder:text-base placeholder:font-medium focus:outline-none md:min-w-[500px]"
          type="text"
          name="search"
          placeholder="Busca un personaje por el nombre"
          @input="searchDebounce"
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
      </section>
    </HeroBannerCharacter>

    <section
      class="container mx-auto mt-10 px-2 transition-all duration-300 sm:px-4"
    >
      <!-- Skeleton loader when fetching characters -->
      <GridForCardCharacter v-if="$fetchState.pending">
        <SkeletonLoaderCardCharacter v-for="number in 8" :key="number" />
      </GridForCardCharacter>

      <!-- Component when there is an error -->
      <ErrorFetch v-else-if="$fetchState.error" />

      <!-- Character card grid -->
      <GridForCardCharacter v-else>
        <CardCharacter
          v-for="character in characters"
          :key="character.id"
          :character="character"
        />
      </GridForCardCharacter>

      <!-- Pagination -->
      <div v-if="!$fetchState.error" class="my-10">
        <client-only>
          <paginate
            v-model="parseCurrentPage"
            :page-count="totalPages"
            :click-handler="getCharacterForPage"
            prev-text="<"
            next-text=">"
            container-class="pagination"
            page-link-class="page-link"
            active-class="active-page"
            prev-link-class="prev-link"
            next-link-class="next-link"
            no-li-surround
          >
          </paginate>

          <template #placeholder>
            <div class="text-center font-poppins text-lg font-semibold">
              Cargando...
            </div>
          </template>
        </client-only>
      </div>
    </section>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  layout: 'default',
  data() {
    return {
      search: this.$route.query.search || '',
      currentPage: this.$route.query.page || 1,
      characters: [],
      totalPages: 0,
    }
  },
  async fetch() {
    const { results, info } = await this.$axios.$get(
      `/character?page=${this.currentPage}&name=${this.search}`
    )
    this.characters = results
    this.totalPages = info.pages
  },
  computed: {
    parseCurrentPage: {
      get() {
        return parseInt(this.currentPage)
      },
      set(val) {},
    },
  },

  methods: {
    searchDebounce: debounce(function () {
      this.currentPage = 1
      this.$fetch()
      if (this.search.length === 0) {
        this.$router.push(`/personajes`)
      } else {
        this.$router.push(`/personajes?search=${this.search}`)
      }
    }, 300),
    getCharacterForPage(page) {
      this.currentPage = page
      this.$fetch()
      if (this.search.length === 0) {
        this.$router.push(`/personajes?page=${page}`)
      } else {
        this.$router.push(`/personajes?page=${page}&search=${this.search}`)
      }
    },
  },
}
</script>
