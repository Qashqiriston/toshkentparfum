<template>
  <div class="swiper-container relative">
    <Swiper
      :breakpoints="breakpoints"
      slidesOffsetAfter="0"
      :loopFillGroupBlank="false"
      :cssMode="true"
      :navigation="{
        nextEl: '.swiperbutton-next',
        prevEl: '.swiperbutton-prev'
      }"
      :loop="true"
      :modules="modules"
    >
      <swiper-slide v-for="product in products" :key="product.id" class="">
        <DiscountCard :product="product" />
      </swiper-slide>
    </Swiper>
    <!-- Custom navigation buttons -->
    <div class="swiperbutton-prev">
      <i class="icon-arrow-left"></i>
    </div>
    <div class="swiperbutton-next">
      <i class="icon-arrow-right"></i>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, FreeMode, EffectFade } from 'swiper/modules';
import { products } from '~/data/products.data.js';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const modules = [Navigation, FreeMode, EffectFade];

const breakpoints = {
  1024: {
    slidesPerView: 4,
    spaceBetween: 40
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  320: {
    slidesPerView: 2,
    spaceBetween: 20
  },
}
</script>

<style scoped>
/* Custom styles for Swiper navigation buttons */
.swiperbutton-next,
.swiperbutton-prev {
  background-color: white; /* Semi-transparent background */
  border-radius: 50%; /* Circular buttons */
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* Change cursor to pointer */
  position: absolute; /* Position them properly */
  top: 50%;
  transform: translateY(-50%);
  z-index: 10; /* Ensure they are above swiper slides */
}

.swiperbutton-next {
  right: -10px; /* Position the next button on the right */
}

.swiperbutton-prev {
  left: -10px; /* Position the prev button on the left */
}

.swiperbutton-next i,
.swiperbutton-prev i {
  font-size: 20px;
  color: #383838; /* White arrow */
}

/* Add custom hover effect */
.swiperbutton-next:hover,
.swiperbutton-prev:hover {
  background-color: #E8E8E8;
}
</style>
