<template>
  <header class="hidden lg:block bg-white shadow-toast">
    <!-- banner -->
    <div class="hidden lg:flex bg-gray-100 py-3">
      <div class="container flex-between">
        <!-- contacts links -->
        <div class="flex-center gap-6">
          <a
            href="tel:+9998712007007"
            class="icon-phone-inc flex-y-center gap-1 text-gray hover-red"
          >
            <span class="family-proxima-nova text-xs leading-130"
              >+998 (71) 200 70 07</span
            >
          </a>

          <a
            href="https://yandex.ru/maps/?ll=25.45,41.578&z=18"
            class="icon-map flex-y-center gap-1 text-gray hover-red"
          >
            <span class="family-proxima-nova text-xs leading-130"
              >Ташкент, ул-ца Ойбек, 28/14</span
            >
          </a>
        </div>

        <!-- socials and lang toggle -->
        <div class="flex-y-center gap-x-[30px]">
          <!-- socials links -->
          <div class="flex-y-center gap-4">
            <NuxtLink to="#!" class="icon-facebook text-xl leading-5 text-gray-500 hover-red" />
            <NuxtLink to="#!" class="icon-instagram-solid text-xl leading-5 text-gray-500 hover-red" />
            <NuxtLink to="#!" class="icon-telegram-solid text-xl leading-5 text-gray-500 hover-red" />
          </div>

          <!-- lang -->
          <LazyBaseDropdown :options="options"/>
        </div>
      </div>
    </div>

    <!-- header -->
    <div class="container flex-between py-4">
      <!-- logo -->
      <NuxtLink to="/">
        <img src="/images/logo.svg" class="h-13 mr-6" alt="logo" />
      </NuxtLink>

      <!-- search -->
      <div class="flex-y-center gap-4 flex-grow">
        <div>
          <BaseButton
            text="Каталог"
            :icon="!catalogOpen ? 'icon-burger' : 'icon-close-circle-solid'"
            icon-position="left"
            variant="primary"
            wrapper-class="!bg-black-gradient hover:!shadow-none !p-2"
            @click="baseButtonHandler"
          />
          <Transition name="fade" mode="out-in">
            <SectionsCatalog :open="catalogOpen" />
          </Transition>
        </div>

        <div class="relative flex-grow">
          <FormInput
            id="search"
            ref="search"
            v-model="form.search"
            type="search"
            placeholder="Поиск"
            wrapper-class="focus-within:!border-black w-full"
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

          <!-- search dropdown -->
          <Transition name="dropdown" mode="out-in">
            <div
              v-if="showSearchDropdown"
              class="absolute top-14 left-0 z-10 w-full h-[240px] bg-white rounded-xl flex-x-center overflow-x-hidden overflow-y-scroll shadow-dropdown"
            >
              <!-- products -->
              <div v-if="searchProducts" class="w-full flex flex-col">
                <ProductCardSearch
                  v-for="product in searchProducts"
                  :key="product.id"
                  :product
                  :text="searchWord"
                />
              </div>

              <!-- no data -->
              <div v-else class="flex-center flex-col gap-y-4">
                <img src="/images/empty/search.svg" alt="empty" />
                <h4 class="text-base text-gray text-center font-semibold">
                  По вашему запросу ничего не найдено
                </h4>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- carts -->
      <div class="flex-y-center gap-5 ml-8.5">
        <!-- orders -->
        <NuxtLink to="#!" class="flex-center flex-col group">
          <div class="relative flex">
            <i class="icon-box text-28 leading-7 text-gray group-red" />
            <CommonBadge
              :count="0"
              wrapper-class="absolute -top-1 -right-1 group-hover:!shadow-red"
            />
          </div>

          <span
            class="text-gray text-xs leading-130 group-hover:text-red transition-300"
            >Мои заказы</span
          >
        </NuxtLink>

        <!-- cart -->
        <NuxtLink to="#!" class="flex-center flex-col group">
          <div class="relative flex">
            <i class="icon-cart text-28 leading-7 text-gray group-red"></i>
            <CommonBadge
              :count="0"
              wrapper-class="absolute -top-1 -right-1 group-hover:!shadow-red"
            />
          </div>
<span class="text-gray text-xs leading-130 group-red">Корзина</span>
        </NuxtLink>

        <!-- likes -->
        <NuxtLink to="#!" class="flex-center flex-col group">
          <div class="relative flex">
            <i class="icon-like text-28 leading-7 text-gray group-red"></i>
            <CommonBadge
              :count="3"
              wrapper-class="absolute -top-1 -right-1 group-hover:!shadow-red"
            />
          </div>

          <span
            class="text-gray text-xs leading-130 group-hover:text-red transition-300"
            >Избранные</span
          >
        </NuxtLink>
      </div>

      <!-- login -->
      <BaseButton
        text="Войти"
        icon="icon-login"
        icon-position="left"
        wrapper-class="ml-8"
      />
    </div>

    <!-- navigation -->
    <nav class="hidden lg:block bg-white border-t border-gray-200">
      <ul class="container flex-between py-4">
        <li
          v-for="(nav, key) in navLinks"
          :key
          class="flex-y-center gap-4 group"
        >
          <span v-if="key !== 0" class="w-px h-3 rounded-px bg-gray-400" />
          <NuxtLink
            :to="nav.url"
            class="h-5.5 text-black text-sm leading-130 flex flex-col gap-2 group overflow-hidden"
          >
            <span
              class="origin-bottom-right rotate-0 translate-y-0 group-hover:-translate-y-5 group-hover:rotate-12 transition-300 group-red"
              >{{ nav.text }}</span
            >
            <span
              class="origin-top-right -rotate-12 translate-y-3.5 group-hover:-translate-y-6.5 group-hover:rotate-0 transition-300 group-red"
              >{{ nav.text }}</span
            >
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

 
</template>

<script setup lang="ts">
import { useHeader } from "~/composables/header.js";
import { onClickOutside } from "@vueuse/core";
import { searchProducts, navLinks } from "~/data/products.data.js";

const catalogOpen = ref(false);

const baseButtonHandler = () => {
  catalogOpen.value = !catalogOpen.value;
  if (catalogOpen.value) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
};

const {
  search,
  form,
  showSearchDropdown,
  searchWord,
  clearSearch,
  toggleSearchDropdown,
} = useHeader();

onClickOutside(search, () => toggleSearchDropdown(false));

const options = ref([
  {
    id: 0,
    label: "O‘zbekcha"
  },
  {
    text: 'Скидки',
    url: '#!',
  },
  {
    text: 'Товары для лица',
    url: '#!',
  },
  {
    text: 'Ванные бомбочки',
    url: '#!',
  },
  {
    text: 'Продукты макияжа',
    url: '#!',
  },
  {
    text: 'Краски для волос',
    url: '#!',
  },
  {
    text: 'Мужские продукты',
    url: '#!',
  },
  {
    text: 'Товары для ванны и уборной',
    url: '#!',
  },
])

</script>

<style scoped>
img[alt="logo"] {
  filter: invert(24%) sepia(94%) saturate(3255%) hue-rotate(332deg)
    brightness(98%) contrast(97%);
}

.fade-enter-active {
  animation: fade-in 0.5s;
}

.fade-leave-active {
  animation: fade-in 0.5s reverse;
}


@keyframes fade-in {
  0% {
    transform: translateY(-10%) scale(0.5); /* Markazdan yuqori va kichiklash */
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1); /* Markazga qaytish va original o'lchamga kengaytirish */
    opacity: 1;
  }
}
</style>











