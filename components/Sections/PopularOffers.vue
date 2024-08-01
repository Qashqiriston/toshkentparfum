<template>
  <section class="py-5">
    <div class="section-title">
      <h1 class="text-black text-32 font-bold leading-10.5">Все продукты</h1>
      <FormSelect
            v-model="selectValue"
            :options="options"
            value-key="id"
            label-key="label"
            placeholder="По популярности"
            wrapperClass="w-[260px] bg-white"
            optionsWrapper="!overflow-hidden"
          />
    </div>
    <div class="grid grid-cols-1 gap-5">
    <div class="bg-white px-5 py-4 rounded-xl">
      <h2 class="text-black text-lg font-bold md:text-3xl leading-10 section-title">Популярные предложения</h2>
      <PopularOffersSlider />
    </div>
    <SectionsAllProducts />
    <div class="m-auto">
      <BaseButton 
        variant="secondary"
        icon="icon-arrow-down"
        iconPosition="left"
        text="Загрузить еще"
        size="small"
        wrapperClass="font-semibold"
      />
    </div>
    </div>
  </section> 
</template>

<script setup>
  const selectValue = ref();
const options = [
  {
    id: 1,
    label: "По популярности",
  },
  {
    id: 2,
    label: "По цене",
  },
  {
    id: 3,
    label: "По рейтенгу",
  },
];
</script>