<template>
  <section class="container pt-5 pb-12">
    <!-- title -->
    <div class="flex-between flex-wrap gap-4 mb-5">
      <h1 class="text-32 text-black font-bold">Все бренды</h1>
      <FormInput
        id="search"
        v-model="form.search"
        type="search"
        placeholder="Поиск"
        wrapper-class="focus-within:!border-black w-69.5 bg-gray-300"
      >
        <template #prefix>
          <i class="icon-search text-gray" />
        </template>

        <template #suffix>
          <button
            v-if="form.search"
            class="icon-close-circle cursor-pointer text-xl leading-5 text-gray-500 hover:text-red transition-300"
            @click="clearSearch"
          />
        </template>
      </FormInput>
    </div>

    <!-- content -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <BrandCard
        v-for="brand in [...popularBrands, ...popularBrands]"
        :key="brand.id"
        :brand="brand"
        wrapper-class="bg-white"
      />
    </div>

    <BaseButton
      icon="icon-arrow-down"
      icon-position="left"
      text="Загрузить еще"
      variant="secondary"
      size="small"
      class="mx-auto mt-8"
    />
  </section>
</template>

<script setup lang="ts">
import { popularBrands } from "~/data/brands.data.js";

const form = reactive({
  search: "",
});

const clearSearch = () => {
  form.search = "";
};
</script>
