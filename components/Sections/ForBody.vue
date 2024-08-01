<template>
  <section class="bg-white pt-8 pb-5 md:pb-11">
    <div class="container">
      <div class="section-title">
          <h2 class="text-black text-lg font-bold md:text-3xl leading-10">Продукты для тела и ванны</h2>
          <NuxtLink to="#!" class="relative z-10 flex items-center gap-1 text-gray-500 transition-300 hover:text-red">
              <p class=" text-sm leading-tight">Все продукты</p>
              <i class="icon-arrow-right "></i>
          </NuxtLink>
      </div>

      <div class="grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-6">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>
<script setup>
  import {products} from '~/data/products.data.js'
</script>