<template>
  <Swiper
    :modules
    :breakpoints
    :loop="true"
    :free-mode="true"
    slides-per-view="3.5"
    :grab-cursor="true"
    space-between="24"
    class="!overflow-visible"
  >
    <SwiperSlide v-for="review in reviews" :key="review.id">
      <ReviewCard :review />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { reviews } from "~/data/review.data";

import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode } from "swiper/modules";

import "swiper/css";

const modules = [FreeMode];
const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 12,
    freeMode: false,
  },
  768: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 3.5,
    spaceBetween: 24,
    freeMode: true,
  },
};
</script>
