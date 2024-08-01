<template>
  <article
    class="relative cursor-pointer border border-gray-200 bg-gray-200 rounded-lg overflow-hidden group hover:border-gray-400 hover:shadow-card transition-300"
  >
    <!-- slider -->
    <div class="w-full h-44 md:h-49 border-2 rounded-t-lg overflow-hidden">
      <ProductSlider v-if="product?.images" :slider="product?.images" />

      <img
        v-else
        src="/images/no-image.jpg"
        class="w-full h-full object-cover"
        alt="no image"
      />

      <!-- like btn-->
      <button
        class="absolute top-3 right-3 z-10 w-9 h-9 rounded-md flex-center bg-gray-200/80 border hover:border-red transition-300 group/button"
      >
        <i
          class="icon-like text-black text-xl leading-5 group-hover/button:text-red group-active/button:scale-125 transition-300"
          :class="{ '!text-red': product?.isLiked }"
        />
      </button>

      <BaseDiscount
        :discount="product?.discount"
        wrapper-class="absolute top-3 left-3 z-10"
      />
    </div>

    <!-- info -->
    <div class="flex flex-col p-3 bg-gray-200">
      <!-- name -->
      <NuxtLink to="#!" class="flex flex-col gap-1">
        <h5 class="text-sm text-red">{{ product?.title }}</h5>
        <p class="text-sm text-black group-red line-clamp-2">
          {{ product?.name }}
        </p>
      </NuxtLink>

      <!-- price -->
      <div class="flex flex-col">
        <span class="text-sm text-red line-through font-bold"
        >{{ product?.discount }} UZS</span
        >
        <h4 class="text-black text-base font-bold mt-1">
          {{ product?.price }} UZS
        </h4>

        <!-- rating -->
        <div class="flex-y-center mt-1 gap-1">
          <i
            v-for="(star, key) of 5"
            :key
            class="icon-star text-yellow text-xs leading-3 w-3 h-3"
            :class="{ '!text-yellow': product?.rating >= 5 }"
          />
          <span class="ml-1 text-sm text-gray-500">{{ product?.rating }}</span>
        </div>
      </div>

      <BaseButton
        v-if="!product?.count"
        text="В корзину"
        icon="icon-cart"
        icon-position="left"
        variant="primary"
        wrapper-class="mt-2"
        @click.stop
      />
    </div>
  </article>
</template>

<script setup>

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

</script>