<template>
  <article class="group h-30 rounded-2xl overflow-hidden transition-300 cursor-pointer hover:shadow-card" :class="wrapperClass">
    <NuxtLink :to="brand.linkUrl" class="w-full h-full flex-center p-4">
      <img v-if="brand.imgUrl" class="w-[200px] h-[62px] grayscale transition-300 group-hover:scale-105" :src="brand.imgUrl" alt="brand">

      <!-- brand logo -->
      <CommonLogo v-else />
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">

import type {IBrand} from "~/types/brand.types";

interface Props {
  brand: IBrand,
  wrapperClass?: string
}

withDefaults(defineProps<Props>(), {
  wrapperClass: ''
})

</script>