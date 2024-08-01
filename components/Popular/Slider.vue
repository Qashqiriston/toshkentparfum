<template>
  <Swiper
    :modules
    :breakpoints
    :centered-slides="true"
    :loop="true"
    :speed="7500"
    :autoplay="{
      delay: 0,
      reverseDirection,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    class="popular-swiper w-full overflow-visible"
  >
    <SwiperSlide
      v-for="brand in popularBrands"
      :key="brand?.id"
      class="bg-gray-100 flex-y-center rounded-2xl overflow-hidden group"
    >
      <NuxtLink
        :to="brand?.linkUrl"
        class="w-full p-4 h-28 flex-center group-hover:scale-105 transition-300"
      >
        <!-- brand image -->
        <img
          v-if="brand?.imgUrl"
          :src="brand?.imgUrl"
          class="w-full h-full object-contain"
          alt="brand"
        />

        <!-- no image -->
        <CommonLogo
          v-else
          custom-class="text-black hover:text-red transition-300"
          class="w-full h-16 object-contain cursor-pointer"
        />
      </NuxtLink>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import { Autoplay, FreeMode } from "swiper/modules";
import { popularBrands } from "~/data/brands.data";

import "swiper/css";

interface Props {
  reverseDirection: boolean
}

withDefaults(defineProps<Props>(), {
  reverseDirection: false
})

const modules = [FreeMode, Autoplay];
const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 12,
    freeMode: false,
  },
  576: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 2.5,
  },
  1200: {
    slidesPerView: 6,
    spaceBetween: 16,
  },
};
</script>

<style>
.popular-swiper .swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>
