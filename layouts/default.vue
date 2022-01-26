<template>
  <div class="font-openSans">
    <nav class="h-16 w-full px-3 py-3">
      <div
        class="container mx-auto flex h-full items-center justify-between px-2 transition-all duration-300 sm:px-4"
      >
        <NuxtLink to="/" class="h-full">
          <img
            src="@/assets/img/logo.png"
            alt="logo"
            class="hidden h-full md:block"
          />
          <img
            src="@/assets/img/logo-icon.png"
            alt="logo"
            class="block h-full md:hidden"
          />
        </NuxtLink>

        <div class="space-x-3">
          <NuxtLink
            to="/personajes"
            class="rounded-lg px-2.5 py-2 font-bold text-slate-700 transition-colors hover:bg-cyan-100 hover:text-cyan-500"
            exact
            exact-active-class="bg-cyan-100 !text-cyan-500"
            >Personajes</NuxtLink
          >
          <!-- <NuxtLink
            to="/episodios"
            class="rounded-lg px-3 py-2 font-bold text-slate-700 transition-colors hover:bg-cyan-100 hover:text-cyan-500"
            exact
            exact-active-class="bg-cyan-100 text-cyan-500"
            >Episodios</NuxtLink
          > -->
        </div>
      </div>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Default',
}
</script>
