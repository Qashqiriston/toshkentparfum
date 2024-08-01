<template>
  <section class="bg-white py-16 md:pt-8 md:pb-14">
    <div class="section-title container">
      <h2 class="text-black text-lg font-bold md:text-3xl leading-10">Популярные бренды</h2>
      <NuxtLink to="/brands" class="relative z-10 flex items-center gap-1 text-gray-500 transition-300 hover:text-red">
        <p class=" text-sm leading-tight">Все бренды</p>
        <i class="icon-arrow-right" />
      </NuxtLink>
    </div>

    <div class="flex flex-col gap-y-4">
      <PopularSlider />
      <PopularSlider :reverse-direction="true" />
      <PopularSlider />
    </div>
  </section>
</template>
