<template>
    <div class="bg-white rounded-xl p-6 sm:flex-row mb-6">
      <div class="flex justify-between">
        <h1 class="text-32 font-bold">
          Отзывы <span class="text-xl text-gray-500">(25)</span>
        </h1>
        <BaseButton
          text="Добавить отзыв"
          wrapper-class="!py-2 !px-4 !hidden sm:!flex hover:!shadow-none"
          :disabled="true"
        />
      </div>
  
      <div class="flex p-4 bg-gray-100 rounded-lg my-5">
        <div class="border-r-2 pr-5">
          <h1 class="text-[40px] leading-130 font-bold">4.5</h1>
          <i v-for="i in 5" :key="i" class="icon-star text-yellow" />
          <p class="text-gray-500 text-xs">(25 отзыва)</p>
        </div>
  
        <div class="pl-5 w-full">
          <div class="flex items-center space-x-2 w-full pb-2">
            <h3 class="text-sm font-bold leading-4">5</h3>
            <p class="min-w-[28px] text-xs text-gray-500">60%</p>
            <i class="icon-star text-yellow" />
            <div class="relative flex-grow h-3 bg-gray-300 rounded-lg">
              <div class="absolute w-[60%] bg-yellow rounded-lg h-3"></div>
            </div>
          </div>
          <div class="flex items-center space-x-2 pb-2">
            <h3 class="text-sm font-bold leading-4">4</h3>
            <p class="min-w-[28px] text-xs text-gray-500">10%</p>
            <i class="icon-star text-yellow"></i>
            <div class="relative flex-grow h-3 bg-gray-300 rounded-lg">
              <div class="absolute top-0 left-0 w-[10%] bg-yellow rounded-lg h-3"></div>
            </div>
          </div>
          <div class="flex items-center space-x-2 pb-2">
            <h3 class="text-sm font-bold leading-4">3</h3>
            <p class="min-w-[28px] text-xs text-gray-500">20%</p>
            <i class="icon-star text-yellow"></i>
            <div class="relative flex-grow h-3 bg-gray-300 rounded-lg">
              <div class="absolute top-0 left-0 w-[20%] bg-yellow rounded-lg h-3"></div>
            </div>
          </div>
          <div class="flex items-center space-x-2 pb-2">
            <h3 class="text-sm font-bold leading-4">2</h3>
            <p class="min-w-[28px] text-xs text-gray-500">3%</p>
            <i class="icon-star text-yellow"></i>
            <div class="relative flex-grow h-3 bg-gray-300 rounded-lg">
              <div class="absolute top-0 left-0 w-[3%] bg-yellow rounded-lg h-3"></div>
            </div>
          </div>
          <div class="flex items-center space-x-2 pb-2">
            <h3 class="text-sm font-bold leading-4">1</h3>
            <p class="min-w-[28px] text-xs text-gray-500">5%</p>
            <i class="icon-star text-yellow"></i>
            <div class="relative flex-grow h-3 bg-gray-300 rounded-lg">
              <div class="absolute top-0 left-0 w-[5%] bg-yellow rounded-lg h-3"></div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="py-6 flex flex-col gap-8">
        <div v-for="data in singleUserData" :key="data.name">
          <div class="flex gap-3">
            <img :src="data.icon" :alt="data.name" />
            <div>
              <h2 class="text-xl font-semibold">{{ data.name }}</h2>
              <i v-for="i in 5" :key="i" class="inline-block icon-star text-yellow" />
              <p class="inline-block text-sm leading-4 text-gray font-light relative bottom-[2px] ml-2">{{ data.time }}</p>
            </div>
          </div>
          <p class="font-light pt-3 text-sm">{{ data.text }}</p>
        </div>
        <div class="m-auto">
          <BaseButton
            icon="icon-arrow-down !text-red"
            icon-position="left"
            text="Загрузить еще"
            wrapper-class="!bg-red-100 !text-red"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface PersonalData {
    icon: string;
    name: string;
    time: number | string;
    text: string;
  }
  
  const singleUserData: PersonalData[] = [
    {
      icon: "/images/uic/uic-logo.svg",
      name: "Шохрух Бахтияров",
      time: 'Сегодня, 14:45',
      text: "Я ее обожаю пользуюсь последние 15 лет, пока не могу сменить отчетливо чувствую запахи других парфюмиррванных вод."
    },
    {
      icon: "/images/uic/uic-logo.svg",
      name: "Пулатов Жасурбек",
      time: 'Сегодня, 20:45',
      text: "Все было бы идеально если бы не конечное отношение курьера назначенного на доставку моего товара. Обматерил меня, не осознавая что челюстьу него не титановая. Пожалуйста, проведите беседу со всеми курьерами и научите элементарной этике!"
    },
    {
      icon: "/images/uic/uic-logo.svg",
      name: "Нарзуллаев Жасурбек",
      time: '1 Авгута, 2022, 15:56',
      text: "С доставкой были ОЧЕНЬ большие проблемы + хамство и нежелание работать курьера"
    },
    {
      icon: "/images/uic/uic-logo.svg",
      name: "Шавкиев Шохрух",
      time: '23 Января, 2022, 23:23',
      text: "Уважаемые разработчики обновление вроде норм, но есть минусы. Ставлю уверенную четверочку"
    },
  ]
  </script>
  