<template>
  <Swiper
    :modules
    :breakpoints
    :free-mode="true"
    slides-per-view="10.5"
    :grab-cursor="true"
    space-between="16"
    class="relative before:block before:absolute before:top-0 before:left-0 before:w-32 before:h-full before:bg-story-white-before before:z-10 after:w-32 after:h-full after:block after:absolute after:top-0 after:right-0 after:bg-story-white-after after:z-10"
  >
    <SwiperSlide v-for="story in 20" :key="story.id" class="!w-26.5 md:!w-33.5">
      <StoriesCard />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode } from "swiper/modules";

import "swiper/css";

const modules = [FreeMode];
const breakpoints = {
  320: {
    slidesPerView: 3,
    spaceBetween: 12,
  },
  480: {
    slidesPerView: 4,
  },
  576: {
    slidesPerView: 6,
  },
  992: {
    slidesPerView: 10,
    spaceBetween: 16,
  },
};
</script>
