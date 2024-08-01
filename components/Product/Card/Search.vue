<template>
  <article class="bg-white">
    <NuxtLink :to="product.linkUrl" class="flex-between py-2 px-3">
      <div class="flex-y-center gap-3">
        <span
          class="w-8 h-8 border border-gray rounded-lg p-0.5 overflow-x-hidden"
        >
          <img
            :src="product.imgUrl"
            class="w-full h-full object-contain"
            alt="product"
          />
        </span>

        <Highlighter
          class="text-black text-sm leading-130"
          highlight-class-name="bg-yellow rounded p-0.5"
          :search-words="text"
          :text-to-highlight="product?.name"
        />
      </div>

      <i class="icon-chevron-right" />
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import Highlighter from "vue-highlight-words";

import type { ISearchProduct } from "~/types/product.types";

interface Props {
  product: ISearchProduct;
  text: string[];
}

defineProps<Props>();
</script>
