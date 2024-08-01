<template>
  <div class="" @click="toggleSelectActive" :ref="dropDown">
    <div class="flex items-center text-gray cursor-pointer hover:text-red transition-300 gap-1" @click="isDropdownVisible = !isDropdownVisible">
      <p class="text-xs font-semibold">{{ mappedSelectedOption }}</p>
      <i class="icon-chevron-down transition-300" :class="{ 'rotate-180': isDropdownVisible }" />
    </div>
    <div 
      class="rounded-lg absolute bg-white grid z-50 "
      v-if="isDropdownVisible"
      ref="select"
    >
      <p
        v-for="(option, id) in options" 
        :key="id" 
        class="cursor-pointer gap-2 flex items-center justify-between font-semibold hover:bg-[#FEF8FA] h-full p-2 border border-t-0 border-x-0 border-b-gray-300 text-gray text-xs hover:text-black-400 transition-300" 
        @click="toggleOptionSelect(option)"
        :class="{ 'text-red' : isSelected(option) }"
      >
        {{ option.label || option }}
        <i v-if="isSelected(option)" class="icon-checkbox-check text-red"/>
      </p>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  options: {
    type: Array,
    required: true
  }
});

const dropDown = ref(null);
const isDropdownVisible = ref(false);
const selectedOption = ref(null);

const mappedSelectedOption = computed(() => {
  return (selectedOption.value?.label || selectedOption.value) || "Русский";
});

const toggleOptionSelect = (option) => {
  selectedOption.value = option;
  isDropdownVisible.value = false;
};

const isSelected = (option) => {
  return option === selectedOption.value;
};

onClickOutside(dropDown, (event) => {
  if (!dropDown.value.contains(event.target)) {
    isDropdownVisible.value = false;
  }
});
</script>
