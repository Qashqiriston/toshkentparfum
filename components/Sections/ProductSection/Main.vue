<template>
    <div class="bg-white rounded-xl p-6 sm:flex-row mb-6">
        <h1 class="text-32 font-semibold">О продукте</h1>
        <div class="py-4">
            <h3 class="text-xl leading-130 font-semibold ">Описание:</h3>
            <p>CLIVE CHRISTIAN Absolute Jasmin — это 100% чистое парфюмерное масло, самое концентрированное и роскошное предложение. Абсолют состоит из более чем 200 ингредиентов, это наше самое сложное парфюмерное предложение. Формула чистого масла обеспечивает более сильное и захватывающее ощущение аромата, при этом каждое парфюмерное масло остается на коже до 12 часов и более. Jasmine Absolute вдохновлен нашей изысканной парой X, это парфюмерное наслаждение - праздник короля цветов во всем его цветущем величии.
            Absolute – это вершина парфюмерии класса люкс. Самые лучшие творения, известные миру парфюмерии – необыкновенные, сложные формулы со 100%-ной концентрацией чистого парфюма – идеальное предложение для знатока. Изготавливаемый на заказ продукт с высочайшим уровнем персонализации, доступным в нашем портфолио. Уникальное предложение для ценителей роскошной парфюмерии.
            Clive Christian Perfume — ведущий независимый британский парфюмерный дом, стремящийся создавать лучшие в мире духи. Предшественница бренда, Crown Perfumery Company, основанная в 1872 году, является единственным домом, которому когда-либо было предоставлено разрешение использовать корону королевы Виктории на своих флаконах. Образ, который и по сей день определяет каждый флакон духов Clive Christian.</p>
        </div>
        <div v-for="(item, index) in parfumeFor" :key="index" class="grid grid-cols-2 grid-rows-3 gap-4">
            <div v-for="(pair, idx) in formatPairs(item)" :key="idx" class="col-span-1 py-4">
                <p class="text-gray">{{ pair[0] }}</p>
                <p class="font-semibold">{{ pair[1] }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const parfumeFor = ref([
  {
    yearOut: "Год выпуска:",
    year: 2005,
    brend: "Бренд:",
    brendName: "CLIVE CHRISTIAN",
    state: "Страна изготовитель:",
    stateName: "Франсия",
    valume: "Объем:",
    valumeNum: 30,
    gens: "Предпочтительный пол:",
    gensMale: "Мужской",
    target: "Целевая аудитория:",
    forTarget: "Взрослые мучины"
  }
]);

const formatPairs = (item) => {
  const entries = Object.entries(item);
  const pairs = [];
  for (let i = 0; i < entries.length; i += 2) {
    pairs.push([entries[i][1], entries[i + 1] ? entries[i + 1][1] : ""]);
  }
  return pairs;
};

</script>

<style scoped>

</style>