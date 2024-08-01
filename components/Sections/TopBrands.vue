<template>
  <section class="container pt-8 pb-5 md:pb-11">
      <div class="section-title">
          <h2 class="text-black text-lg font-bold md:text-3xl leading-10">Парфюм от топ брендов</h2>
          <NuxtLink to="#!" class="relative z-10 flex items-center gap-1 text-gray-500 transition-300 hover:text-red">
              <p class=" text-sm leading-tight">Все бренды</p>
              <i class="icon-arrow-right "></i>
          </NuxtLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <TopBrandsCard v-for="topbrand in topBrands" :key="topbrand.id" :topbrand="topbrand" />
      </div>
  </section>
</template>
<script setup>
  import {topBrands} from '~/data/brands.data.js'
</script>