<template>
    <article class="container group cursor-pointer bg-white rounded-xl hover:shadow-card transition-300">
        <div class="flex gap-3 py-2">
          <img class="w-11 h-11 rounded-full" :src="topbrand?.logoUrl" />
          <NuxtLink :to="topbrand?.linkUrl">
            <p class="text-black transition-300 group-hover:text-red text-xl font-bold leading-relaxed">{{ topbrand?.title }}</p>
            <p class="text-gray text-xs font-normal leading-none">{{ topbrand?.category }}</p>
          </NuxtLink>
        </div>
        <div class="py-2">
          <NuxtLink :to="topbrand?.products[0].imgLink">
            <div class="rounded-lg overflow-hidden relative">
                <img class="w-full" :src="topbrand?.products[0]?.imgUrl" />
                <div class="w-full h-20 absolute bottom-0 opacity-0 transition-300 group-hover:opacity-100 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1ACC] via-20% to-[#1A1A1A00]">
                  <p class="text-white text-sm font-normal absolute left-2 bottom-2">{{ topbrand?.products[0].price }}</p>
                </div>
            </div>
          </NuxtLink>
          <div class="flex py-2 gap-x-2" >
            <NuxtLink :to="topbrand?.products[1].imgLink" class="flex-grow">
              <div class="rounded-lg overflow-hidden relative">
                <img :src="topbrand?.products[1].imgUrl" class="w-full h-full object-contain" />
                <div class="w-full h-20 absolute bottom-0 opacity-0 transition-300 group-hover:opacity-100 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1ACC] via-20% to-[#1A1A1A00]">
                  <p class="text-white text-sm font-normal absolute left-2 bottom-2">{{ topbrand?.products[1].price }}</p>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink :to="topbrand?.products[2].imgLink" class="flex-grow">
              <div class="rounded-lg overflow-hidden relative">
                <img :src="topbrand?.products[2].imgUrl" class="w-full h-full object-contain" />
                <div class="w-full h-20 absolute bottom-0 opacity-0 transition-300 group-hover:opacity-100 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1ACC] via-20% to-[#1A1A1A00]">
                  <p class="text-white text-sm font-normal absolute left-2 bottom-2">{{ topbrand?.products[2].price }}</p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
    </article>
</template>
<script setup>
  defineProps({
    topbrand: {
      type: Object,
      required: true
    }
  });
</script>