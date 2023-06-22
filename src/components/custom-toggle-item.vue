<template>
  <div class="toggle-container">
    <div class="active" :style="{ left: `${props.index * 100}px` }"></div>
    <div
      :key="value.id"
      class="item"
      @click="selectItem(index * 100, $event)"
      v-for="(value, index) in props.items"
    >
      {{ value.name }}
    </div>
  </div>
</template>
<script>
export default {
  name: "custom-toggle-item",
};
</script>

<script setup>
import { defineProps, } from "vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  selectedItem: {
    type: Object,
    default: () => {},
  },
  selectItemFunc: {
    type: Function,
    default: () => {},
  },
  index: {
    type: Number,
    default: 0
  }
});
 console.log('currentStatus', props.selectedItem)
const selectItem = (positionCount, event) => {
  if (event) {
    props.selectItemFunc(event);
  }
  console.log('currentStatus', props.selectedItem)
};

</script>
<style lang="scss">
@import "../themes/generated/variables.base.scss";
.toggle-container {
  display: inline-flex;
  position: relative;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s ease;
  .item {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4455669d;
    color: white;
    min-width: 100px;
    z-index: 3;
  }
  .item:not(:last-child) {
    border-right: 1px solid white;
  }
  .active {
    width: 100px;
    border-radius: 6px;
    height: 100%;
    background-color: #445566;
    position: absolute;
    z-index: 2;
    transition: left 0.5s ease;
  }
  svg {
    z-index: 5;
  }
}
</style>
