<template>
  <header class="lg:hidden container flex-between flex-wrap py-5 gap-y-3 border-2">
    <div class="flex-y-center gap-3">
      <!-- burger -->
      <button class="icon-burger cursor-pointer text-gray" />

      <!-- logo -->
      <NuxtLink to="/">
        <img src="/images/logo.svg" class="h-8.5" alt="logo">
      </NuxtLink>
    </div>

    <!-- carts -->
    <div class="flex-y-center gap-5 ml-8.5">
      <!-- orders -->
      <NuxtLink to="#!" class="flex-center flex-col group">
        <div class="relative flex">
          <i class="icon-box text-28 leading-7 text-gray group-red"></i>
          <CommonBadge :count="0" wrapper-class="absolute -top-1 -right-1 group-hover:!shadow-red"/>
        </div>
      </NuxtLink>

      <!-- cart -->
      <NuxtLink to="#!" class="flex-center flex-col group">
        <div class="relative flex">
          <i class="icon-cart text-28 leading-7 text-gray group-red"></i>
          <CommonBadge :count="0" wrapper-class="absolute -top-1 -right-1 group-hover:!shadow-red"/>
        </div>
      </NuxtLink>

      <!-- likes -->
      <NuxtLink to="#!" class="flex-center flex-col group">
        <div class="relative flex">
          <i class="icon-like text-28 leading-7 text-gray group-red"></i>
          <CommonBadge :count="3" wrapper-class="absolute -top-1 -right-1 group-hover:!shadow-red"/>
        </div>
      </NuxtLink>
    </div>

    <!-- search -->
    <FormInput
      id="search"
      v-model="form.search"
      type="search"
      placeholder="Поиск"
      wrapper-class="w-full focus-within:!border-black flex-grow"
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
  </header>
</template>

<script setup>
import { useHeader } from "~/composables/header.ts";

const { form, clearSearch } = useHeader()
</script>

<style scoped>

img[alt="logo"] {
  filter: invert(24%) sepia(94%) saturate(3255%) hue-rotate(332deg) brightness(98%) contrast(97%);
}

</style>