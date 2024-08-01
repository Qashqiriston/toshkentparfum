<template>
  <div class="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
    <ProductCard v-for="product in productsAll" :key="product.id" :product="product" />
    <DiscountCard v-for="product in productsAll" :key="product.id" :product="product" />
    <ProductCard v-for="product in productsAll" :key="product.id" :product="product" />
  </div>
  <img class="rounded-xl" src="~/public/images/uic/banner.jpg" alt="add">
  <div class="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
    <ProductCard v-for="product in productsAll" :key="product.id" :product="product" />
  </div>
</template>
<script setup>
  import { productsAll } from '~/data/products.data.js'
</script>