<template>
    <article class="relative group h-30 rounded-2xl cursor-pointer hover:shadow-card transition-300 overflow-hidden">
      <NuxtLink to="#!" class="flex flex-col justify-between p-5 h-full">
        <h2 class="relative z-10 text-black text-xl font-normal leading-relaxed">Бестселлеры</h2>
        <img class="absolute right-0 bottom-0" src="~/public/images/category.jpg" alt="category" />
        <div class="relative z-10 flex items-center gap-1 transition-300 opacity-0 group-hover:opacity-100">
            <p class="text-red text-sm font-normal leading-4.5">Перейти</p>
            <i class="icon-arrow-right text-red" />
        </div>
      </NuxtLink>
    </article>
</template>