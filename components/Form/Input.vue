<template>
  <div
    class="relative flex-center gap-1 rounded-lg border focus-within:border-gray-400 bg-gray-200 px-3 py-2.5 transition-300"
    :class="[wrapperClass, { '!border-red': error }]"
  >
    <slot name="prefix" />
    <input
      :id
      v-model="model"
      :type
      :placeholder
      class="border border-red text-base leading-5.5 text-black bg-transparent flex-grow border-none outline-none placeholder:text-gray-500 group-input"
      :class="[inputClass, { '!text-red': error }]"
    >
    <slot name="suffix"></slot>
  </div>
</template>

<script setup>

defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  wrapperClass: {
    type: String,
    required: false,
    default: "",
  },
  inputClass: {
    type: String,
    required: false,
    default: "",
  },
  error: {
    type: Boolean,
    required: false,
  },
  loading: {
    type: Boolean,
    required: false,
  },
})

const model = defineModel();
</script>

<style scoped>

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

</style>
