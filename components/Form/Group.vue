<template>
  <div class="flex flex-col gap-2" :class="wrapperClass">
    <label :id="id" class="text-sm leading-4.5 text-gray" :class="labelClass">{{
      label
    }}</label>

    <slot />
  </div>
</template>

<script setup>

defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  labelClass: {
    type: String,
    required: false,
    default: "",
  },
  wrapperClass: {
    type: String,
    required: false,
    default: "",
  },
})

</script>
