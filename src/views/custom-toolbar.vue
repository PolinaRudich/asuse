<template>
  <div class="toolbar">
    <div class="tb-item"><DxButton icon="/assets/group-plus.svg"/></div>
    <div class="tb-item"><DxButton icon="/assets/tab-plus0001.svg"/></div>
    <div class="tb-item"><DxButton icon="/assets/row-plus0002.svg"/></div>
    <div class="tb-item"><DxButton icon="/assets/MaterialSymbolsArrowUpwardRounded.svg"/></div>
    <div class="tb-item"><DxButton icon="/assets/MaterialSymbolsArrowDownwardRounded.svg"/></div>
  </div>
</template>

<script>

import DxButton from "devextreme-vue/button";
export default {
  name: "CustomToolbar",
  components: {
    DxButton
  }
}
</script>

<style lang="scss">
.toolbar {
  width: 75px;
  margin-top: 40px;
  .tb-item {
    margin: 10px;
    .dx-button.dx-button-has-icon:not(.dx-button-has-text):not(.dx-shape-standard) {
      border-radius: 7px;
      height: 50px;
      width: 50px;
    }
    .dx-button-has-icon .dx-icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>