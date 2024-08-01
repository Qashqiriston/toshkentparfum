<template>
  <section class="container pt-8 pb-5 md:pb-11">
      <div class="section-title">
          <h2 class="text-black text-lg font-bold md:text-3xl leading-10">Парфюм для дам</h2>
          <NuxtLink to="#!" class="relative z-10 flex items-center gap-1 text-gray-500 transition-300 hover:text-red">
              <p class=" text-sm leading-tight">Все товары на скидке</p>
              <i class="icon-arrow-right "></i>
          </NuxtLink>
      </div>
      <div class="grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-6">
          <DiscountCard v-for="product in products" :key="product.id" :product="product" />
      </div>
  </section>
</template>
<script setup>
  import {products} from '~/data/products.data.js'
</script>