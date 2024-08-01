<template>
  <span
    v-if="discount"
    class="w-13.5 h-8 flex-center bg-green shadow-green border border-white/[.36] -rotate-8 rounded-xl"
    :class="wrapperClass"
  >
    <i class="icon-discount text-white rotate-8" />
  </span>
</template>

<script setup>
defineProps({
  discount: {
    type: Number,
    required: true,
  },
  wrapperClass: {
    type: String,
    required: false,
    default: '',
  }
})
</script>