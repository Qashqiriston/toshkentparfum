<template>
  <article
    class="relative w-full h-36 md:h-45.5 border border-red rounded-xl overflow-hidden p-2 md:w-33.5 cursor-pointer group before:block before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-19.5 md:before:w-24 md:before:h-36 before:opacity-60 before:shadow-red-story before:bg-red before:blur-lg transition-300"
    :class="{ 'border-gray-400 before:opacity-0': isWatched }"
  >
    <img
      src="/images/stories.jpeg"
      class="relative z-10 rounded-lg w-full h-full object-cover group-hover:scale-95 transition-300"
      alt="story"
    />
  </article>
</template>

<script setup>

defineProps({
  isWatched: {
    type: Boolean,
    required: false,
    default: false
  }
})

</script>
