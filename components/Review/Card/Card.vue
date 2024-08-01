<template>
  <article
    class="relative group max-h-50 hover:shadow-card transition-300 rounded-2xl"
  >
    <NuxtLink
      :to="review?.urlLink"
      class="flex flex-col gap-4 bg-white p-5 rounded-2xl"
    >
      <!-- customer review -->
      <div class="flex items-start gap-5">
        <span
          class="w-15.5 flex-shrink-0 bg-white p-2 border border-gray-100 rounded-lg flex-center"
        >
          <img
            :src="review?.productImgUrl"
            class="h-15 object-contain"
            alt="product"
          />
        </span>

        <div class="flex flex-col gap-1">
          <h3 class="text-black text-base font-bold group-red line-clamp-1">
            {{ review?.title }}
          </h3>
          <p class="text-black text-sm line-clamp-3">
            {{ review?.text }}
          </p>
        </div>
      </div>

      <!-- customer info -->
      <div class="flex-y-center gap-3">
        <!-- img -->
        <span class="w-10 h-10 flex-y-center rounded-full overflow-hidden">
          <img
            :src="review?.customerImgUrl"
            class="w-full h-full object-contain"
            alt="user"
          />
        </span>

        <div class="flex flex-col">
          <h3 class="text-black text-base font-semibold">
            {{ review?.customerName }}
          </h3>

          <div class="flex-y-center gap-2">
            <span class="flex-y-center gap-1">
              <i
                v-for="item in 5"
                :key="item"
                class="icon-star text-xs text-yellow"
              />
            </span>
            <span class="text-xs leading-130 text-gray-500">{{
              review?.date
            }}</span>
            <span class="w-1.5 h-1.5 bg-gray-500 rounded-full" />
            <time class="text-xs leading-130 text-gray-500">{{
              review?.time
            }}</time>
          </div>
        </div>
      </div>

      <i
        class="icon-view-link absolute right-5 bottom-5 text-red opacity-0 group-hover:opacity-100 transition-300"
      />
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import type { IReview } from "~/types/review.types";

interface Props {
  review: IReview;
}

defineProps<Props>();
</script>
