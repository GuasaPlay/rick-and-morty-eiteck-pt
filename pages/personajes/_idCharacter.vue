<template>
  <div>
    <section class="relative block h-[400px]">
      <div class="banner-single-character">
        <span class="absolute h-full w-full bg-black opacity-20"></span>
      </div>
    </section>
    <section class="bg relative py-16">
      <div class="container mx-auto px-2 transition-all duration-300 sm:px-4">
        <div
          class="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-xl bg-white shadow-xl"
        >
          <div class="px-4">
            <div class="flex flex-wrap justify-center">
              <div class="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                <div class="relative">
                  <img
                    :alt="character.name"
                    :src="character.image"
                    class="absolute -m-20 -ml-[74px] h-auto max-w-[150px] rounded-full border-8 border-white align-middle"
                  />
                </div>
              </div>
            </div>
            <div class="mt-3 hidden justify-between sm:flex">
              <div class="flex flex-1 justify-evenly space-x-3 text-center">
                <div>
                  <div class="text-sm font-semibold text-slate-600">
                    Especie
                  </div>
                  <div class="font-bold tracking-wide text-slate-700">
                    {{ translateSpecies(character.species) }}
                  </div>
                </div>
              </div>
              <div class="w-[150px]"></div>
              <div class="flex flex-1 justify-evenly space-x-3 text-center">
                <div>
                  <div class="text-sm font-semibold text-slate-600">
                    Ubicación
                  </div>
                  <div class="font-bold tracking-wide text-slate-700">
                    {{ character.location.name }}
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-20 text-center sm:mt-12">
              <h1
                class="mb-2 font-poppins text-3xl font-bold text-slate-700 sm:text-4xl"
              >
                {{ character.name }}
              </h1>
              <div
                class="flex items-center justify-center font-semibold text-slate-700"
              >
                <span>
                  <div
                    class="mr-2 h-2 w-2 rounded-full"
                    :class="getColorStatus(character.status)"
                  ></div>
                </span>
                {{ translateStatus(character.status) }} -
                {{ translateGender(character.gender) }}
              </div>
              <div class="mt-2 text-center sm:hidden">
                <div class="mt-5 text-sm font-semibold text-slate-600">
                  Especie
                </div>
                <div class="text-sm font-semibold tracking-wide text-slate-700">
                  {{ translateSpecies(character.species) }}
                </div>

                <div class="mt-8 text-sm font-semibold text-slate-600">
                  Ubicación
                </div>
                <div class="text-sm font-semibold tracking-wide text-slate-700">
                  {{ character.location.name }}
                </div>
              </div>
              <div
                class="mt-10 font-openSans text-lg font-semibold text-slate-700"
              >
                Episidios donde aparece el personaje
              </div>
            </div>
            <MansoryGridEpisodes :episodes="episodes" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: { location: {} },
      episodes: [],
    }
  },
  async fetch() {
    const idCharacter = this.$route.params.idCharacter
    const response = await this.$axios.$get(`/character/${idCharacter}`)
    this.character = response
    const { episode } = this.character
    const promiseOfEpisodes = episode.map(async (epi) => {
      const idEpisode = epi.split('/').reverse()[0]

      return await this.$axios.$get(`/episode/${idEpisode}`)
    })
    this.episodes = await Promise.all(promiseOfEpisodes)
  },
  methods: {
    getColorStatus(data) {
      const status = {
        Alive: 'bg-green-500',
        Dead: 'bg-red-500',
        unknown: 'bg-gray-600',
      }
      return status[data]
    },
    translateStatus(data) {
      const status = {
        Alive: 'Vivo',
        Dead: 'Muerto',
        unknown: 'Desconocido',
      }
      return status[data]
    },
    translateSpecies(data) {
      const species = {
        Human: 'Humano',
        Humanoid: 'Humanoide',
        Alien: 'Extraterrestre',
        unknown: 'Desconocido',
        Animal: 'Animal',
        Robot: 'Robot',
        Cronenberg: 'Cronenberg',
        Disease: 'Disease',
        Poopybutthole: 'Poopybutthole',
        'Mythological Creature': 'Criatura Mitológica',
      }
      return species[data]
    },
    translateGender(data) {
      const genders = {
        Female: 'Femenino',
        Male: 'Masculino',
        Genderless: 'Sin género',
        unknown: 'Desconocido',
      }
      return genders[data]
    },
  },
}
</script>

<style lang="postcss">
.banner-single-character {
  background: url('~assets/img/banner-single-character.png');

  @apply absolute top-0 h-full w-full bg-cover bg-center;
}
</style>
