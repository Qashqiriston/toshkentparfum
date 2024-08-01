<template>
  <div class="my-9 py-8">
    <div class="flex justify-between">
        <h1 class="font-bold text-32 leading-130">Схожие продукты</h1>
        <NuxtLink class="text-xl font-semibold text-gray">
            Схожие продукты
            <i class="icon-arrow-right"/>
        </NuxtLink>
    </div> 

    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in SProductData" class="max-w-[206px] max-h-[204px] mt-5 mb-40"> 
        <ProductSlider :key="product.productName" :slider="product.image"/>
        <div class="p-3 max-w-[206px] max-h-[194px] bg-gray-200  rounded-b-lg">
            <div class="pb-3">
                <p class="text-red font-light">Product name</p>
                <p class="text-sm leading-130 font-light">{{ product.productName }}</p>
            </div>
            <p class="text-red line-through font-bold">{{ product.oldPrice }}</p>
            <p class="font-bold">{{ product.newPrice }}</p>
            <i v-for="i in 5" class="icon-star text-yellow inline-block"/>
            <p class="inline-block text-lg leading-130 text-gray-500">{{ product.rating }}</p>
            <BaseButton
                icon="icon-cart "
                icon-position="left"
                text="В корзину"
                wrapper-class=" !px-4 !font-bold w-full"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const SProductData = [
  {
    image: [
      { id: Math.random(), imgUrl: "/images/product.jpg" },
      { id: Math.random(), imgUrl: "/images/product.jpg" },
      { id: Math.random(), imgUrl: "/images/product.jpg" },
    ],
    productName: "Louis Vuitton",
    oldPrice: 0,
    newPrice: 0,
    rating: 5,
  },
  {
    image: [
      { id: Math.random(), imgUrl: "/images/product.jpg" },
      { id: Math.random(), imgUrl: "/images/product.jpg" },
      { id: Math.random(), imgUrl: "/images/product.jpg" },
    ],
    productName: "Louis Vuitton",
    oldPrice: 200000,
    newPrice: 175000,
    rating: 4.6,
  },
  {
    image: [
      { id: Math.random(), imgUrl: "/images/product.jpg" },
      { id: Math.random(), imgUrl: "/images/product.jpg" },
      { id: Math.random(), imgUrl: "/images/product.jpg" },
    ],
    productName: "Louis Vuitton",
    oldPrice: 1000000,
    newPrice: 935000,
    rating: 2.9,
  },
  {
    image: [
      { id: Math.random(), imgUrl: "/images/product.jpg" },
      { id: Math.random(), imgUrl: "/images/product.jpg" },
      { id: Math.random(), imgUrl: "/images/product.jpg" },
    ],
    productName: "Louis Vuitton",
    oldPrice: 130000,
    newPrice: 120000,
    rating: 3.3,
  },
];
</script>

<style scoped></style>
