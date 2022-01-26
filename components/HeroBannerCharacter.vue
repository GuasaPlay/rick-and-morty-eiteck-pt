<template>
  <div class="banner-character">
    <div
      class="container mx-auto flex h-full w-full items-center justify-start px-2 transition-all duration-300 sm:px-4"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.banner-character {
  background: url('~assets/img/banner-home.png');

  @apply h-[350px] w-full bg-slate-800 bg-cover bg-center bg-no-repeat transition-all sm:h-[400px];
}
</style>
