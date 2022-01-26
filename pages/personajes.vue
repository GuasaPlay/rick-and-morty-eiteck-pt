<template>
  <div class="">
    <div class="banner-home">
      <div
        class="container mx-auto flex h-full w-full items-center justify-start px-2 transition-all duration-300 sm:px-4"
      >
        <div class="relative text-gray-600">
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
        </div>
      </div>
    </div>

    <div
      class="container mx-auto mt-10 px-2 transition-all duration-300 sm:px-4"
    >
      <div
        v-if="$fetchState.pending"
        :key="1"
        class="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
      >
        <!-- SkeletonCard -->
        <div
          v-for="number in 8"
          :key="number"
          class="w-full rounded-xl bg-white p-3 shadow-lg"
        >
          <div
            class="aspect-square w-full animate-pulse rounded-lg bg-gray-100"
          ></div>

          <div class="mt-3">
            <div class="h-7 w-full animate-pulse rounded bg-gray-300"></div>

            <div class="mt-1.5">
              <span class="animate-pulse rounded bg-gray-300 text-gray-300"
                >Cronenberg</span
              >
            </div>
            <div class="mt-2">
              <span
                class="animate-pulse rounded-md bg-gray-300 px-2 py-0.5 text-sm font-medium text-gray-300"
                >Dead</span
              >
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="$fetchState.error" :key="2">
        <div
          class="flex flex-col items-center justify-center sm:flex-row sm:justify-center"
        >
          <div class="order-2 h-80 w-80 sm:order-1 sm:h-80 sm:w-80">
            <img
              src="@/assets/img/not-result.png"
              alt="Sin resultados"
              class="aspect-auto h-full w-full object-cover"
            />
          </div>
          <div
            class="order-1 p-3 font-poppins text-xl font-bold text-slate-700 sm:order-2 sm:text-3xl"
          >
            No se encontraron resultados
          </div>
        </div>
      </div>
      <div v-else :key="3">
        <div
          class="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
        >
          <div
            v-for="character in characters"
            :key="character.id"
            class="w-full transform rounded-xl bg-white p-3 shadow-lg transition-all hover:scale-105 hover:shadow-cyan-300/30"
          >
            <NuxtLink :to="`personaje/${character.id}`" class="">
              <div class="aspect-square w-full rounded-lg bg-gray-100">
                <img
                  class="h-full w-full rounded-xl object-cover"
                  :src="character.image"
                  :alt="character.name"
                />
              </div>
            </NuxtLink>
            <div class="mt-3">
              <div>
                <NuxtLink
                  :to="`personajes/${character.id}`"
                  class="font-poppins text-lg font-bold text-slate-700 transition-colors line-clamp-1 hover:text-cyan-500"
                  :title="character.name"
                  >{{ character.name }}</NuxtLink
                >
              </div>
              <div class="mt-2">
                {{ character.species }}
              </div>
              <div class="mt-2">
                <span
                  class="rounded-md px-2 py-0.5 text-sm font-medium text-white"
                  :class="getColorStatus(character.status)"
                  >{{ parseStatus(character.status) }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!$fetchState.error" class="my-10">
        <client-only>
          <paginate
            v-model="parseCurrentPage"
            :page-count="totalPages"
            :click-handler="functionName"
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
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
  layout: 'default',
  data() {
    return {
      characters: [],
      currentPage: this.$route.query.page || 1,
      totalPages: 0,
      info: {},
      search: this.$route.query.search || '',
    }
  },
  async fetch() {
    const data = await this.$axios.$get(
      `/character?page=${this.currentPage}&name=${this.search}`
    )
    console.log(data.info)
    this.characters = data.results
    this.info = data.info
    this.totalPages = data.info.pages
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
    functionName(page) {
      this.currentPage = page
      this.$fetch()
      if (this.search.length === 0) {
        this.$router.push(`/personajes?page=${page}`)
      } else {
        this.$router.push(`/personajes?page=${page}&search=${this.search}`)
      }
    },
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
<style lang="postcss">
.banner-home {
  background: url('~assets/img/banner-home.png');

  @apply h-[350px] w-full bg-slate-800 bg-cover bg-center bg-no-repeat transition-all sm:h-[400px];
}

.pagination {
  @apply flex justify-center space-x-2 p-2 font-openSans;
}
.page-link,
.prev-link,
.next-link {
  @apply flex h-9 w-9 items-center justify-center rounded-md bg-white font-bold text-slate-700 shadow-md transition-colors hover:bg-cyan-600 hover:text-white;
  user-select: none;
}

.pagination > .next-link.disabled,
.pagination > .prev-link.disabled {
  @apply cursor-not-allowed bg-gray-300 hover:text-slate-700;
}
.pagination > .page-link.disabled {
  @apply cursor-not-allowed bg-white text-slate-700;
}

.active-page {
  @apply bg-cyan-600 text-white;
}
</style>
