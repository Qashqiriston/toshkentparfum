<template>
    <section class="container py-5 md:py-14">
        <div class="section-title">
            <h2 class="text-black text-lg font-bold md:text-3xl leading-10">Популярные разделы</h2>
            <NuxtLink to="#!" class="relative z-10 flex items-center gap-1 text-gray-500 transition-300 hover:text-red">
                <p class=" text-sm leading-tight">Все разделы</p>
                <i class="icon-arrow-right" />
            </NuxtLink>
        </div>

        <div class="grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-3 xl:grid-cols-4">
            <CategoryCard v-for="category in categories" :key="category.id" :category="category"/>
        </div>
    </section>
</template>
<script setup>
    import { categories } from '~/data/category.data.js'
</script>
