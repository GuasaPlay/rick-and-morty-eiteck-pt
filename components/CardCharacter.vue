<template>
  <div
    class="w-full transform rounded-xl bg-white p-3 shadow-lg transition-all hover:scale-105 hover:shadow-cyan-300/30"
  >
    <NuxtLink :to="`personajes/${character.id}`">
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
        {{ translateSpecies(character.species) }}
      </div>
      <div class="mt-2">
        <span
          class="rounded-md px-2 py-0.5 text-sm font-medium text-white"
          :class="getColorStatus(character.status)"
          >{{ translateStatus(character.status) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  methods: {
    translateStatus(data) {
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
  },
}
</script>
