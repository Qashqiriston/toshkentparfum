<template>
  <section class="container pt-8 pb-5 md:pb-11">
      <div class="section-title">
          <h2 class="text-black text-lg font-bold md:text-3xl leading-10">Лучшие категории для мужчин</h2>
          <NuxtLink to="#!" class="relative z-10 flex items-center gap-1 text-gray-500 transition-300 hover:text-red">
              <p class=" text-sm leading-tight">Все категории</p>
              <i class="icon-arrow-right "></i>
          </NuxtLink>
      </div>
      <div class="grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-3 xl:grid-cols-4">
          <CategoryCard v-for="category in categoryMen" :key="category.id" :category="category"/>
      </div>
  </section>
</template>
<script setup>
  import {categoryMen} from '~/data/category.data.js'
</script>
