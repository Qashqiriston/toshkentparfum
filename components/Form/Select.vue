<template>
  <div
    ref="select"
    class="relative cursor-pointer rounded-lg bg-gray-200 py-2.5 px-3"
    :class="[
      { '!border-black': selectActive },
      { '!border-red': error },
      wrapperClass,
    ]"
    @click="toggleSelectActive"
  >
    <!-- select -->
    <div
      class="w-full flex-y-center justify-between gap-2"
      :class="selectClass"
    >
      <p class="text-base text-black leading-5.8">{{ label }}</p>
      <i
        class="icon-chevron-down flex-center text-black transition-300"
        :class="{ 'rotate-180': selectActive }"
      />
    </div>

    <!-- options -->
    <div
      class="absolute max-h-50 z-30 flex flex-col top-12 left-0 w-full border border-sky bg-white rounded-lg overflow-scroll shadow hover:shadow-toast transition-300"
      :class="[{ '!opacity-0 !invisible': !selectActive }, optionsWrapper]"
    >
      <span
        v-for="option in options"
        :key="option[valueKey]"
        class="w-full text-left flex py-2.5 px-3 bg-white first-of-type:border-none border-t border-sky text-base leading-5.8 text-gray-500 hover:bg-gray-200 hover:text-black transition-300"
        :class="[
          optionClass,
          { '!text-black': activeOption === option[valueKey] },
        ]"
        @click="setActiveOption(option)"
      >
        {{ option?.[labelKey] }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  selectClass: {
    type: String,
    required: false,
    default: "",
  },
  optionsWrapper: {
    type: String,
    required: false,
    default: "",
  },
  optionClass: {
    type: String,
    required: false,
    default: "",
  },
  wrapperClass: {
    type: String,
    required: false,
    default: "",
  },
  error: {
    type: Boolean,
    required: false,
  },
  options: {
    type: Object,
    required: false,
    default: undefined,
  },
  placeholder: {
    type: String,
    required: false,
    default: "Select value"
  },
  labelKey: {
    type: String,
    required: true,
    default: "value"
  },
  valueKey: {
    type: String,
    required: true,
    default: "id"
  },
})

const activeOption = defineModel();

const label = computed(() => {
  if (!activeOption.value && activeOption.value !== 0) {
    return props.placeholder;
  }

  const selectedOption = props.options.find(
    (option) => option?.[props.valueKey] === activeOption.value,
  );

  return selectedOption?.[props.labelKey];
});

const selectActive = ref(false);
const setActiveOption = (val) => (activeOption.value = val?.[props.valueKey]);
const toggleSelectActive = () => (selectActive.value = !selectActive.value);

// template select
const select = ref();

// on outer click close select option
onClickOutside(select, (event) => {
  if (!select.value.contains(event.target)) {
    selectActive.value = false;
  }
});

</script>
