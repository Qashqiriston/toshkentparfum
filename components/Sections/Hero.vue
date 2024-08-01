<template>
  <section class="px-4 md:px-0 mt-6 overflow-hidden">
    <Swiper
      :modules
      :breakpoints
      :pagination="{ clickable: true }"
      :slides-per-view="1.5"
      :loop="true"
      :centered-slides="true"
      :grab-cursor="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :speed="700"
      space-between="24"
      class="main-swiper"
    >
      <SwiperSlide
        v-for="slide in slides"
        :key="slide?.id"
        class="relative rounded-xl overflow-hidden"
      >
        <!-- slide img -->
        <img
          :src="slide?.imgUrl"
          class="w-full h-full object-cover"
          alt="slide"
        />

        <!-- slide info -->
        <div
          class="absolute bottom-0 h-1/5 p-9 flex flex-col justify-end gap-1 sm:gap-2 bg-slider-gradient"
        >
          <h2 class="text-white text-base sm:text-32 leading-130 font-bold">
            {{ slide?.title }}
          </h2>

          <p class="text-xs sm:text-base text-white leading-130">
            {{ slide?.text }}
          </p>

          <NuxtLink :to="slide?.linkUrl">
            <BaseButton
              :text="slide?.btnText"
              variant="transparent"
              wrapper-class="mt-1 sm:mt-1.5"
            />
          </NuxtLink>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import { slides } from "~/data/hero.data";

import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination, Autoplay];
const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 16,
  },
  768: {
    slidesPerView: 1.5,
    spaceBetween: 24,
  },
};

</script>

<style>
.main-swiper.swiper {
  height: 212px;
}

.main-swiper .swiper-slide {
  height: 176px;
}

.main-swiper .swiper-slide:not(.swiper-slide-active)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  background: linear-gradient(
    180deg,
    rgba(247, 248, 250, 0) 0%,
    rgba(247, 248, 250, 0.72) 100%
  );
}

.main-swiper .swiper-pagination-bullet {
  width: 30px;
  height: 4px;
  border-radius: 5px;
  background: #d4d5d7;
  opacity: 1;
  position: relative;
}

.main-swiper .swiper-pagination-bullet-active::before {
  content: "";
  position: absolute;
  left: 0;
  width: 0;
  height: 100%;
  border-radius: 5px;
  background: #383838 !important;
  animation: progress 2500ms linear 1 normal running 75ms forwards;
}

@media (min-width: 576px) {
  .main-swiper.swiper {
    height: 455px;
  }

  .main-swiper .swiper-slide {
    height: 415px;
  }
}

@keyframes progress {
  to {
    width: 100%;
  }
}
</style>
