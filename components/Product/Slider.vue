<template>
  <Swiper
    :modules
    :pagination="{ clickable: true }"
    :effect="'cube'"
    :grab-cursor="true"
    :cube-effect="{
      shadow: false,
    }"
    class="absolute w-full h-full"
  >
    <SwiperSlide v-for="slide in slider" :key="slide?.id">
      <img
        :src="slide?.imgUrl"
        class="w-full h-full object-cover"
        alt="slide"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCube, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

defineProps({
  slider: {
    type: Array,
    required: true,
  }
});

const modules = [Pagination, EffectCube];
</script>
