<template>
  <button
    class="flex-center gap-2 active:scale-95 cursor-pointer transition-300 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white"
    :class="[
      variants[variant],
      sizes[size],
      wrapperClass,
      { '!pointer-events-none': loading },
    ]"
    v-bind="{ disabled, type }"
  >
    <!-- loader -->
    <BaseLoader v-if="loading" :color="loaderColors[variant]" />

    <!-- main -->
    <template v-else>
      <slot>
        <i
          v-if="iconPosition === 'left'"
          class="text-xl leading-5 md:text-2xl md:leading-6"
          :class="[icon, iconColor]"
        />
        <span v-if="text" class="text-xs leading-5 md:text-sm md:leading-6 font-semibold" :class="textStyle">{{ text }}</span>
        <i
          v-if="iconPosition === 'right'"
          class="text-xl leading-5 md:text-2xl md:leading-6"
          :class="[icon, iconColor]"
        />
      </slot>
    </template>
  </button>
</template>

<script setup>

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Button'
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  variant: {
    type: String,
    required: false,
    default: 'primary'
  },
  size: {
    type: String,
    required: false,
    default: 'medium'
  },
  icon: {
    type: String,
    required: false,
    default: "",
  },
  iconPosition: {
    type: String,
    required: false,
    default: 'right'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  type: {
    type: String,
    required: false,
    default: 'button'
  },
  wrapperClass: {
    type: String,
    required: false,
    default: "",
  }
})

const variants = {
  primary: "bg-red text-white hover:bg-red-500 hover:shadow-red-btn",
  secondary: "bg-red-100 text-red hover:bg-red-200",
  transparent: "bg-white-12 text-white hover:bg-white-24",
};

const sizes = {
  small: "rounded-md py-2 px-4 text-xs leading-5",
  medium: "rounded-lg py-2.5 px-5 text-sm leading-6",
  large: "rounded-10 py-3 px-5.5 text-base leading-6",
};

const loaderColors = {
  primary: "white",
  transparent: "white",
  secondary: "#F62559",
};

const iconColor = computed(() =>
  props.variant === "secondary" && !props.disabled ? "text-red" : "text-white",
);

</script>
