<template>
  <div
    class="w-76.5 h-8.5 bg-gray-200 flex-between self-start gap-1.5 p-0.5 rounded-10"
  >
    <!-- tab element -->
    <div
      v-for="(tab, key) in tabs"
      :key="tab.id"
      class="flex-grow flex-center gap-0.5 h-full rounded"
      @click="setActiveTab(tab)"
    >
      <!-- line -->
      <span v-if="key" class="w-px h-5 bg-gray-300" />

      <span
        class="w-full h-full flex-center rounded text-sm text-gray cursor-pointer py-2 transition-300"
        :class="{
          'rounded-s-10': key === 0,
          'rounded-e-10': key === tabs.length - 1,
          'bg-white shadow-dark !text-black': activeTab.id === tab.id,
        }"
      >
        {{ tab.text }}
      </span>
    </div>
  </div>
</template>

<script setup>
const tabs = [
  {
    id: 0,
    text: "Tab 1",
  },
  {
    id: 1,
    text: "Tab 2",
  },
  {
    id: 2,
    text: "Tab 3",
  },
];

const activeTab = ref(tabs[0]);
const setActiveTab = (tab) => (activeTab.value = tab);

</script>
