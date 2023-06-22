<template>
  <div class="search-settings-lo">
    <TreeView class="menu-view" :menu-items="menuItems()"/>
    <div class="toolbar">
      <div class="tb-item"><DxButton icon="/assets/group-plus.svg"/></div>
      <div class="tb-item"><DxButton icon="/assets/row-plus0002.svg"/></div>
      <div class="tb-item"><DxButton icon="/assets/MaterialSymbolsArrowUpwardRounded.svg"/></div>
      <div class="tb-item"><DxButton icon="/assets/MaterialSymbolsArrowDownwardRounded.svg"/></div>
    </div>
    <div class="list-cont"><ListView2 class="list-view" :fields="items()"/></div>
  </div>
</template>

<script>
import {menuItems} from "@/data/drawer-data";
import TreeView from "@/views/tree-view.vue";
import ListView2 from "@/views/list-view2.vue";
import {items} from "@/data/drawer-list-data";
import DxButton from "devextreme-vue/button";

export default {
  name: "search-settings",
  components: {ListView2, TreeView, DxButton},
  methods: {
    items() {
      return items
    },
    menuItems() {
      return menuItems
    }
  }
}
</script>

<style scoped>
.search-settings-lo {
  display: flex;
  padding: 10px;

  .menu-view {
    flex: 0.60;
    height: 900px;
    overflow-y: auto;
    overflow-x: auto;
    .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .list-view {
    margin-top: 50px;
    height: 900px;

  }

  .list-cont {
    flex: 0.39;
    height: 900px;
    overflow-y: auto;
    overflow-x: auto;
  }

  .list-cont::-webkit-scrollbar {
    width: 14px;
  }

  .list-cont::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  .list-cont::-webkit-scrollbar-thumb {
    background-color: #807f7f;
    border-radius: 100px;
  }

  .menu-view::-webkit-scrollbar {
    width: 14px;
  }

  .menu-view::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  .menu-view::-webkit-scrollbar-thumb {
    background-color: #807f7f;
    border-radius: 100px;
  }
}
</style>