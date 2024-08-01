<template>
    <div v-show="open" class="py-16 fixed left-0 w-full bg-white z-50 overflow-y-auto h-full mt-2">
      <div class="container grid grid-cols-4 gap-y-12">
        <div class="max-w-[278px]">
        <h3 class="text-xl font-bold leading-6 mb-3 text-black">Парфюмерия</h3>
          <ul class="flex flex-col gap-3">
            <li
              class="hover-red transition-300 hover:translate-x-3 text-base leading-130"  v-for="item in perfumery" :key="item"
            >
              <NuxtLink to="/" class="w-full h-full block font-semibold text-black hover-red">
                  {{item
              }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="max-w-[278px]">
        <h3 class="text-xl font-bold leading-6 mb-3 text-black">Волосы</h3>
          <ul class="flex flex-col gap-3">
            <li
              class="hover-red transition-300 hover:translate-x-3 text-base leading-130" v-for="item in hair" :key="item"
            >
              <NuxtLink to="/" class="w-full h-full block font-semibold text-black hover-red">{{
                item
              }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="max-w-[278px]">
         <h3 class="text-xl font-bold leading-6 mb-3 text-black">Макияж</h3>
          <ul class="flex flex-col gap-3">
            <li
              class="hover-red transition-300 hover:translate-x-3 text-base leading-130" v-for="item in makeup" :key="item"
            >
              <NuxtLink to="/" class="w-full h-full block font-semibold text-black hover-red">{{
                item
              }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="max-w-[278px]">
        <h3 class="text-xl font-bold leading-6 mb-3 text-black">Лицо</h3>
          <ul class="flex flex-col gap-3">
            <li
              class="hover-red transition-300 hover:translate-x-3 text-base leading-130" v-for="item in face" :key="item"
            >
              <NuxtLink to="/" class="w-full h-full block font-semibold text-black hover-red">{{
                item
              }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="max-w-[278px]">
         <h3 class="text-xl font-bold leading-6 mb-3 text-black">Тело и ванна</h3>
          <ul class="flex flex-col gap-3">
            <li
              class="hover-red transition-300 hover:translate-x-3 text-base leading-130" v-for="item in body" :key="item"
            >
              <NuxtLink to="/" class="w-full h-full block font-semibold text-black hover-red">{{
                item
              }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const perfumery = [
    "Мужские ароматы",
    "Женские ароматы",
    "Подарочные наборы",
    "Подарочные наборы",
    "Древесные ароматы",
    "Цветочные ароматы",
  ];
  const hair = ["Mist", "Кондеционер", "Шампуни", "Лаки", "Молочко", "Масло"];
  const makeup = [
    "Тени",
    "Тональный крем",
    "Тушь",
    "Помады",
    "Пудра",
    "Хайлайтеры",
  ];
  const face = [
    "Крем для лица",
    "Пенки и гели",
    "Маски и патчи для лица",
    "Скрабы и пилинги",
    "Базы под макияж",
    "Пудры",
  ];
  const body = [
    "Жидкость для бритья",
    "Жидкость после бритья",
    "Спреи для тела",
    "Спреи для тела",
    "Спреи для тела",
    "Спреи для тела",
  ];
  defineProps({
    open: Boolean,
  });
  </script>