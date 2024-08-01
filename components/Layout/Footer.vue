<template>
  <footer class="bg-white border-t-4 border-red pt-8">
    <div class="container">
      <!-- contacts -->
      <div
        class="flex-between flex-wrap gap-y-5.5 bg-gray-100 rounded-2xl py-4 px-5"
      >
        <!-- contacts links -->
        <div class="flex-y-center flex-wrap gap-5.5">
          <CommonLogo
            custom-class="text-black hover:text-red transition-300"
            class="cursor-pointer"
          />

          <div class="flex-y-center flex-wrap gap-2 sm:gap-5.5">
            <NuxtLink to="tel:+9998712007007" class="flex-y-center gap-1 group">
              <i class="icon-phone-calling text-gray-500 group-red" />
              <span class="text-base text-black group-red font-semibold"
              >+998 (71) 200 70 07</span
              >
            </NuxtLink>

            <NuxtLink
              to="mailto:tashkentparfume@gmail.com"
              class="flex-y-center gap-1 group"
            >
              <i class="icon-email text-gray-500 group-red" />
              <span class="text-base text-black group-red font-semibold"
              >tashkentparfume@gmail.com</span
              >
            </NuxtLink>
          </div>
        </div>

        <!-- app stores -->
        <div class="flex-y-center gap-4">
          <NuxtLink
            to="https://apps.apple.com/uz/app/toshkent-parfum/id6458222909"
          >
            <img
              src="/images/playMarket/app-store.svg"
              class="h-10 object-contain"
              alt="app store"
            />
          </NuxtLink>

          <NuxtLink
            to="https://play.google.com/store/apps/details?id=uz.tashkentparfum.tashkentparfumapp&pli=1"
          >
            <img
              src="/images/playMarket/play-market.svg"
              class="h-10 object-contain"
              alt="google play"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- nav links -->
      <div class="container flex-between flex-wrap mt-8 gap-5">
        <!-- for customers -->
        <nav>
          <h3 class="text-base leading-5 text-black mb-3 font-semibold">
            Покупателям
          </h3>

          <ul class="flex flex-col">
            <li
              v-for="(nav, key) in customers"
              :key
              class="hover:translate-x-2 transition-300"
            >
              <NuxtLink
                :to="nav.url"
                class="w-full h-full inline-block text-gray-500 text-sm leading-130 hover-red font-semibold"
              >{{ nav.text }}</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <!-- sections -->
        <nav>
          <h3 class="text-base leading-5 text-black mb-3 font-semibold">
            Разделы
          </h3>

          <ul class="flex flex-col">
            <li
              v-for="(nav, key) in sections"
              :key
              class="hover:translate-x-2 transition-300"
            >
              <NuxtLink
                :to="nav.url"
                class="w-full h-full inline-block text-gray-500 text-sm leading-130 hover-red font-semibold"
              >{{ nav.text }}</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <!-- user -->
        <div class="flex flex-col gap-4">
          <nav>
            <h3 class="text-base leading-5 text-black mb-3 font-semibold">
              Пользователь
            </h3>

            <ul class="flex flex-col">
              <li class="hover:translate-x-2 transition-300">
                <NuxtLink
                  to="#!"
                  class="w-full h-full inline-block text-gray-500 text-sm leading-130 hover-red font-semibold"
                >Вход</NuxtLink
                >
              </li>

              <li class="hover:translate-x-2 transition-300">
                <NuxtLink
                  to="#!"
                  class="w-full h-full inline-block text-gray-500 text-sm leading-130 hover-red font-semibold"
                >Регистрация</NuxtLink
                >
              </li>
            </ul>
          </nav>
          <nav>
            <h3 class="text-base leading-5 text-black mb-3 font-semibold">
              Наши соц. сети
            </h3>

            <ul class="flex-y-center gap-4">
              <!-- facebook -->
              <li>
                <NuxtLink
                  to="https://www.instagram.com/toshkent_parfum_/"
                  class="relative group icon-facebook text-xl leading-5 text-gray-500 hover-red"
                />
              </li>

              <!-- instagram -->
              <li>
                <NuxtLink
                  to="https://www.instagram.com/toshkent_parfum_/"
                  class="relative group icon-instagram-solid text-xl leading-5 text-gray-500 hover-red"
                />
              </li>

              <!-- telegram -->
              <li>
                <NuxtLink
                  to="https://t.me/toshkent_parfume"
                  class="relative group icon-telegram-solid text-xl leading-5 text-gray-500 hover-red"
                />
              </li>
            </ul>
          </nav>
        </div>

        <!-- telegram -->
        <div class="flex-between gap-15 bg-gray-100 p-5 rounded-2xl">
          <div class="flex flex-col gap-3 max-w-90 w-full">
            <h2 class="text-md lg:text-xl text-black font-bold">
              Будьте в курсе всех последних новостей через Telegram
            </h2>
            <NuxtLink
              to="https://t.me/toshkent_parfume"
              class="flex-y-center rounded-10 p-3 gap-2 bg-blue/10 border hover:border-blue transition-300"
            >
              <img
                src="/images/icons/telegram-link.svg"
                class="rounded-full bg-telegram-gradient w-6 h-6 flex-center"
                alt="telegram logo"
              />
              <p class="text-sm md:text-base text-blue font-semibold">
                Связаться через Telegram
              </p>
            </NuxtLink>
          </div>

          <img
            src="/images/telegram-glass.svg"
            class="hidden md:flex"
            alt="telegram"
          />
        </div>
      </div>
    </div>

    <!-- bottom -->
    <div class="bg-gray-100 py-5 mt-8">
      <div class="container flex-between flex-wrap gap-5">
        <p class="text-sm text-black leading-4.5">
          Toshkent Parfum© 2021. Все права защищены.
        </p>

        <NuxtLink
          to="https://uic.group/"
          class="flex-y-center gap-1 group transition-300"
        >
          <img src="/images/uic/uic-logo.svg" alt="uic logo" />
        </NuxtLink>

        <NuxtLink
          to="/forClients"
          class="text-sm leading-4.5 text-black hover-red"
        >Политика конфеденциальности</NuxtLink
        >
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const customers = reactive([
  {
    text: "О магазине",
    url: "/about",
  },
  {
    text: "Рекомендации",
    url: "#!",
  },
  {
    text: "Бренды",
    url: "#!",
  },
  {
    text: "Конфеденциальность",
    url: "#!",
  },
  {
    text: "Обратная свзь",
    url: "#!",
  },
]);
const sections = reactive([
  {
    text: "Парфюмерия",
    url: "#!",
  },
  {
    text: "Тело и ванна",
    url: "#!",
  },
  {
    text: "Волосы",
    url: "#!",
  },
  {
    text: "Лицо",
    url: "#!",
  },
  {
    text: "Все разделы ",
    url: "#!",
  },
]);
</script>

<style scoped></style>
