<template>
  <div
    v-click-outside="clickOutside"
    class="modal-list"
    :style="`top: ${top}px; left: ${left}px;`"
  >
    <div class="modal-content">
      <div
        v-for="(item, index) in modalItems"
        :key="item"
        :class="[
          'modal-item',
          ' modal-item-mode',
          activeIndex === index ? 'active' : 'not-active',
        ]"
        @click="selectItemFunction(index)"
      >
        <svg
          v-show="activeIndex === index"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6"
            stroke="#33363F"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        {{ item }}
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsModal",
};
</script>

<script setup>
import { defineProps } from "vue";

defineProps({
  selectItemFunction: {
    type: Function,
    default: () => {},
  },
  activeIndex: {
    type: Number,
    default: 0,
  },
  modalItems: {
    type: Array,
    default: () => [],
  },
  top: {
    type: String,
    default: "",
  },
  left: {
    type: String,
    default: "",
  },
  clickOutside: {
    type: Function,
    default: () => {},
  },
});


</script>
<style lang="scss">
.modal-list {
  z-index: 999;
  padding: 10px;
  background: white;
  position: absolute;
  top: 10px;
  left: 10px;
  filter: drop-shadow(4px 4px 15px rgba(0, 0, 0, 0.25));
  .modal-item {
    padding: 4px;
    font-weight: 500;
    font-size: 12px;
    color: rgba(76, 86, 97, 0.984);
    cursor: pointer;
    background: white;
    border-radius: 4px;
    border: 1px solid transparent;
  }
  .modal-item:not(:last-child) {
    margin-bottom: 4px;
  }

  .modal-item:hover {
    background: #ffd6b9e3;
  }
  .modal-item {
    text-align: end;
  }
}
</style>
