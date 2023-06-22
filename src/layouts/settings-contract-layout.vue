<template>

  <div class="settings-contract-layout">
    <TreeView class="menu-view" :menu-items="menuItems()"/>
    <CustomToolbar/>
    <div class="list-cont"><ListView2 class="list-view" :fields="items()"/></div>
  </div>

</template>

<script>
import TreeView from "@/views/tree-view.vue";
import ListView2 from "@/views/list-view2.vue";
import CustomToolbar from "@/views/custom-toolbar.vue";
import {menuItems} from "@/data/tmp-data";
import {items} from "@/data/list-data";

export default {
  name: "settings-contract-layout",
  methods: {
    items() {
      return items
    },
    menuItems() {
      return menuItems
    }
  },
  components: {
    CustomToolbar,
    ListView2,
    TreeView
  },
}
</script>

<style scoped>
.settings-contract-layout {
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
