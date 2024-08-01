<template>
  <section class="bg-white rounded-xl p-6 flex flex-col sm:flex-row mb-6 mt-10">
    <div class="flex flex-col justify-between select-none mr-10">
      <swiper
        v-bind="options2"
        touch-events-target="container"
        :thumbs="{ swiper: thumbsSwiper }"
        class="mySwiper2"
      >
        <swiper-slide v-for="img in images" :key="img">
          <img :src="img.link" :alt="img.title" />
        </swiper-slide>
      </swiper>
      <swiper
        v-bind="options"
        @swiper="setThumbsSwiper"
        class="mySwiper !hidden sm:!block"
      >
        <swiper-slide v-for="img in images" :key="img" class="!w-fit">
          <img :src="img.link" :alt="img.title" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="w-full ml-0">
      <div
        class="w-full flex justify-between text-gray flex-col sm:flex-row mt-3 sm:mt-0"
      >
        <div class="flex gap-2">
          <div class="rounded-[4px] px-2 pt-2 bg-gray-300">
            <p class="text-gray font-semibold text-[13px] leading-4">
              Parfyumeriya
            </p>
          </div>
          <div class="rounded-[4px] px-2 pt-2 bg-gray-300">
            <p class="text-gray font-semibold text-[13px] leading-4">
              Ayollar uchun
            </p>
          </div>
        </div>

        <div>
          <i class="icon-star text-yellow" />
        </div>
      </div>

      <div>
        <h2 class="font-bold text-xl py-4 border-b-2 border-gray-300">
          CLIVE CHRISTIAN Absolute Jasmin масляные духи 30 мл для женщин
          духи-масло
        </h2>
      </div>

      <div>
        <p class="font-semibold text-xl">
          Тип: <span class="font-normal text-gray-500">Оригинал (Франция)</span>
        </p>
        <div class="flex flex-wrap gap-2 p-1">
          <div
            v-for="img in images"
            :key="img.id"
            class="flex-none border border-gray-300 p-1 rounded-md hover:border-pink-400"
            :class="isActive(img.id) ? 'border-red border-2' : 'border-gray'"
            @click="setActive(img.id)"
          >
            <img
              class="w-9 h-9 object-cover"
              :src="img.link"
              :alt="img.title"
            />
          </div>
        </div>
      </div>

      <div class="pt-4 pb-5 border-b-2 border-gray-300">
        <p class="font-semibold text-xl">
          Объём:
          <span class="font-normal text-gray-500">{{ generalNum }} ml</span>
        </p>
        <div class="flex flex-wrap gap-2">
          <div
            v-for="num in rate"
            class="flex-none border border-gray-300 px-3 py-2 rounded-md hover:border-pink-400 cursor-pointer"
            :class="iActive(num) ? 'border-red border-2' : 'border-gray'"
            @click="sActive(num)"
          >
            <p
              class="text-base"
              :class="iActive(num) ? 'font-bold' : 'font-medium'"
            >
              {{ num }} ml
            </p>
          </div>
        </div>
      </div>

      <div class="py-4">
        <h2 class="font-bold text-2xl leading-130">50 564 128 сум</h2>
        <p class="line-through text-red text-base">173 283 785 сум</p>
      </div>

      <div class="flex gap-3">
        <BaseButton
          icon="icon-cart "
          icon-position="left"
          text="Добавить в корзину"
          wrapper-class="py-3 px-2 !font-bold"
        />
        <BaseButton
          icon="icon-share !text-gray"
          icon-position="left"
          text="Поделиться"
          wrapper-class="!bg-gray-400 !text-gray !font-semibold hover:!shadow-none"
        />
        <BaseButton
          icon="icon-like !text-gray"
          wrapper-class="!bg-gray-400 !text-gray !font-semibold hover:!shadow-none hover:!bg-red"
          text=""
          variant="primary"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FreeMode, Navigation, Thumbs, EffectCube } from "swiper/modules";
import type { Swiper } from "swiper/types";

const thumbsSwiper = ref<Swiper | undefined>(undefined);

const setThumbsSwiper = (swiper: Swiper) => {
  thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];
const modules2 = [FreeMode, Navigation, Thumbs, EffectCube];

const options = {
  freemode: true,
  grabCursor: true,
  watchSlidesProgress: true,
  spaceBetween: 8,
  modules,
};
const options2 = {
  grabCursor: true,
  loop: true,
  effect: "cube",
  cubeEffect: {
    shadow: false,
  },
  modules: modules2,
};

interface Post {
  id: number;
  link: string;
  title: string;
}

const images: Post = [
  {
    id: 1,
    link: "https://toshkent-parfum.uz/media/cache/ba/28/ba28082e7c113fa985f704d89bce08db.webp",
    title: "Оригинал (Франция)",
  },
  {
    id: 2,
    link: "https://toshkent-parfum.uz/media/cache/9e/d8/9ed8c842bd7fc19b5caf474eb2279868.webp",
    title: "Оригинал (Франция)",
  },
  {
    id: 3,
    link: "https://toshkent-parfum.uz/media/cache/7b/a5/7ba54c7d805ca3ee5c9df17ec7feaaa7.webp",
    title: "Оригинал (Франция)",
  },
];

const rate = ["50", "75", "100", "200"];

const activeId = ref(1);
const generalNum = ref(50);

const setActive = (id) => {
  activeId.value = id;
};

const isActive = (id) => {
  return activeId.value == id;
};

const sActive = (id) => {
  generalNum.value = id;
};

const iActive = (id) => {
  return generalNum.value == id;
};
</script>

<style scoped>
.swiper-slide {
  display: flex;
  overflow: hidden;
}

.mySwiper2 {
  height: 385px;
  width: 300px;
  border: 1px solid #eaebed;
  border-radius: 12px;
  overflow: hidden;
}

.mySwiper {
  height: 10%;
  box-sizing: border-box;
}

.mySwiper .swiper-slide {
  width: 40px;
  height: 40px;
  opacity: 0.4;
  border: 1px solid #eaebed;
  border-radius: 6px;
  cursor: pointer;
}

.mySwiper .swiper-slide:hover {
  border-color: red;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
  border-color: #f62559;
}

.swiper-slide img {
  display: block;
  object-fit: contain;
}
</style>

<!-- 

      <div class="w-full ml-0 sm:ml-5">
  1----------      
        <div
                class="w-full flex justify-between text-gray flex-col sm:flex-row mt-3 sm:mt-0"
            >
                ~~~tags~~~
                <div>
                    <span
                    v-for="(tag, index) in productData.tags"
                    :key="index"
                    class="bg-gray-300 px-2 py-1 text-[13px] font-semibold rounded"
                    :class="{ 'ml-2': index !== 0 }"
                    >
                    {{ tag }}
                    </span>
            </div>
  
           ~~~~stars~~~~
          <CommonStars
            :rating="productData.stars"
            ratingPos="left"
            wrapperClass="mt-2 sm:mt-0"
          />
        </div>
  1----------
        ~~~ title ~~~
        <h1 class="tex-base md:text-xl font-semibold text-gray-51 my-2 sm:my-4">
          {{ productData.title }}
        </h1>
        <div class="text-gray-51 pb-5 sm:border-y border-gray-200">
          ~~~ type ~~~
          <div>
            <div class="flex flex-row mb-2 mt-4">
              <p class="font-semibold">Типь:&nbsp;</p>
              <span class="text-gray-500">{{ productData.type }}</span>
            </div>
            <div class="flex flex-row">
              <NuxtLink
                to="/single"
                v-for="(image, index) in productData.images"
                :key="index"
                class="p-1 border rounded-md border-gray-400 hover:border-red"
                :class="[{ 'ml-3': index !== 0 }]"
              >
                <img width="36" height="36" :src="image" alt="" />
              </NuxtLink>
            </div>
          </div>
  
          ~~~ volumes ~~~
          <div>
            <div class="flex flex-row mb-2 mt-4">
              <p class="font-semibold">Объём:&nbsp;</p>
              <span class="text-gray-500">{{
                productData.volumes[activeVolume].name
              }}</span>
            </div>
            <div class="flex flex-row">
              <button
                v-for="(v, index) in productData.volumes"
                :key="index"
                class="p-2 sm:p-1 md:px-3 md:py-2 border rounded-md border-gray-400 hover:border-red"
                :class="[
                  { 'ml-3 sm:ml-1 md:ml-3': index !== 0 },
                  { '!border-red border-2': activeVolume === index },
                ]"
                @click="selectVolume(index)"
              >
                {{ v.name }}
              </button>
            </div>
          </div>
        </div>

         ~~~prices ~~~
      <div class="mb-4 sm:my-4 flex flex-row items-center sm:block">
        <p class="text-xl sm:text-2xl font-bold text-gray-51">
          {{ formatNumbers(productData.price) }} сум
        </p>
        <p
          class="text-red ml-3 sm:ml-0"
          :class="productData.original_price ? 'line-through' : ''"
        >
          {{
            productData.original_price
              ? formatNumbers(productData.original_price) + "сум"
              : "---"
          }}
        </p>
      </div>

      ~~ actions ~~~
      <div class="flex flex-row">
        <BaseButton
          text="Добавить в корзину"
          icon="icon-cart"
          icon-position="left"
          wrapper-class="xl:px-[18px] xl:py-3 sm:px-2 sm:py-1 px-[18px] py-3 font-bold"
        />
        <BaseButton
          text="Поделиться"
          icon="icon-share"
          icon-position="left"
          icon-colors="text-gray"
          wrapper-class="!hidden xl:!flex ml-3 !p-[11px] font-bold !bg-gray-300 !text-gray hover:!shadow-gray-300 hover:!bg-gray-350"
        />
        <BaseButton
          text=""
          icon="icon-share"
          icon-position="left"
          icon-colors="text-gray"
          wrapper-class="xl:hidden ml-3 !p-[11px] font-bold !bg-gray-300 !text-gray hover:!shadow-gray-300 hover:!bg-gray-350"
        />
        <BaseButton
          text=""
          icon="icon-like"
          icon-position="left"
          icon-colors="text-gray"
          wrapper-class="ml-3 !p-[11px] font-bold !bg-gray-300 !text-gray hover:!shadow-gray-300 hover:!bg-gray-350"
        />
      </div>
    </div>
  </section>

  <script setup lang="ts">
import { formatNumbers } from "~/utils";

import { FreeMode, Navigation, Thumbs, EffectCube } from "swiper/modules";
import type { Swiper } from "swiper/types";
import type { PSingle } from "~/types/productsSingle";

interface Props {
  productData: PSingle;
}

defineProps<Props>();

const showModal = ref(false);
const toggleModalActive = (val: boolean) => {
  showModal.value = val;
};

const activeVolume = ref<number>(0);

const selectVolume = (i: number) => {
  activeVolume.value = i;
};

const thumbsSwiper = ref<Swiper | undefined>(undefined);

const setThumbsSwiper = (swiper: Swiper) => {
  thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];
const modules2 = [FreeMode, Navigation, Thumbs, EffectCube];

const options = {
  freemode: true,
  grabCursor: true,
  watchSlidesProgress: true,
  spaceBetween: 8,
  modules,
};
const options2 = {
  grabCursor: true,

  loop: true,
  effect: "cube",
  cubeEffect: {
    shadow: false,
  },
  modules: modules2,
};
</script>
 -->
