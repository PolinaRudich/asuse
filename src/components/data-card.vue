<template>
  <div ref="elementRef" class="data-card-container" @click="selectItem">
    <div
      class="flex-container data-card-title-container"
      @contextmenu="onContextMenu($event)"
    >
      <p class="data-card-title">{{ title }}</p>
      <div style="padding: 4px; border-radius: 50px">
        <svg
          v-if="svg === 'counterparty'"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471"
            stroke="#445566fb"
            stroke-width="2"
            stroke-linecap="round"
          />
          <circle
            cx="12"
            cy="8"
            r="4"
            stroke="#445566fb"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <svg
          v-if="svg === 'contract'"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5"
            y="4"
            width="14"
            height="17"
            rx="2"
            stroke="#445566fb"
            stroke-width="2"
          />
          <path
            d="M9 9H15"
            stroke="#445566fb"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M9 13H15"
            stroke="#445566fb"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M9 17H13"
            stroke="#445566fb"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <svg
          v-if="svg === 'object'"
          width="18"
          height="18"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 21L15 11L8 4L1 11V21H15Z"
            stroke="#445566fb"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 18H22L22 8L15 1L8 8L8 17.5"
            stroke="#445566fb"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <p v-if="svg === 'counterparty'" class="data-card-description">
      {{ description }}
    </p>
    <div
      v-if="svg !== 'object' && items.length > 0"
      class="items-group-container scrollbar"
      :style="`${
        svg !== 'counterparty' &&
        ` min-height: ${
          perPage < layoutStore.contractDataList.length
            ? '150px'
            : 'fit-content'
        }`
      }`"
    >
      <div
        v-for="item in paginatedItems"
        :key="item.id"
        :class="['item-group', `item-group-${item.ACTIVE_DOG}`]"
        :style="`${
          item.id === selectedItemId &&
          !item.KOD_OBJ &&

          `   color: #ff7819;
          `
        }`"
        @contextmenu="onContextMenuCurrentItem($event)"
        @dblclick="selectItem($event, item)"
        @click="selectObject(item)"
      >
        <CTooltip :content="`${item.title}`" placement="right">
          <template #toggler="{ on }">
            <div
              v-c-tooltip="{
                content: `${item.title}`,
                placement: 'right',
              }"
              class="text-content"
              v-on="on"
            >
              {{ item.title }}
            </div>
          </template>
        </CTooltip>
      </div>
      <VPagination
        v-if="perPage < layoutStore.contractDataList.length"
        :length="total"
        :total-visible="perPage"
        @update:model-value="onPageChanged"
      ></VPagination>
    </div>
    <div
      v-if="svg === 'object' && layoutStore.objectsListOfContract.length > 0"
      class="items-group-container scrollbar"
      :style="`${
        svg !== 'counterparty' &&
        ` min-height: ${
          perPage < layoutStore.objectsListOfContract.length
            ? '150px'
            : 'fit-content'
        }`
      }`"
    >
      <div
        v-for="item in layoutStore.objectsListOfContract"
        :key="item.id"
        class="item-group"
        :style="`${
          item.id === selectedItemId &&
          !item.KOD_OBJ &&
          `    background: darkgrey;
               color: white;`
        }`"
        @contextmenu="onContextMenuCurrentItem($event)"
        @dblclick="selectItem($event, item)"
        @click="selectObject(item)"
      >
        <CTooltip :content="`${item.title}`" placement="right">
          <template #toggler="{ on }">
            <div
              v-c-tooltip="{
                content: `${item.title}`,
                placement: 'right',
              }"
              class="text-content"
              v-on="on"
            >
              {{ item.title }}
            </div>
          </template>
        </CTooltip>
      </div>
      <VPagination
        v-if="perPage > layoutStore.objectsListOfContract.length"
        :length="total"
        :total-visible="perPage"
        @update:model-value="onPageChanged"
      ></VPagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataCard",
};
</script>

<script setup>
import {
  defineProps,
  ref,
  defineExpose,
  onMounted,
  reactive,
  h,
  inject,
} from "vue";
import "@imengyu/vue3-context-menu/lib/vue3-context-menu.css";
import { VPagination } from "vuetify/components";
import contractList from "../data/contract-list.json";
import { CTooltip } from "@coreui/vue";
import "@mdi/font/css/materialdesignicons.css";
import ContextMenu from "@imengyu/vue3-context-menu";
import contractObjectsList from "../data/contract-objects-list.json";
import { useRoute } from "vue-router";

const elementRef = ref();
const route = useRoute();
const selectedItemId = ref(+route.params.id);
const perPage = ref(3);
const total = ref(Math.ceil(props.items.length / 5));

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  svg: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: () => [],
  },
  scrolledRef: {
    type: String,
    default: "",
  },
});
const layoutStore = inject("layoutStore");
console.log(layoutStore.contractDataList.length, perPage);
console.log("2121", layoutStore);
const paginatedItems = ref(props.items);
onMounted(() => {
  console.log("12132", props.items);
  onPageChanged(1);
  const currentContract = contractList.find((item) => {
    return item.KOD_DOG.toString() === route.params.id;
  });
  selectedItemId.value = currentContract.id;
//   layoutStore.objectsListOfContract = contractObjectsList.filter((item) => {
//     return currentContract.KOD_DOG === item.KOD_DOG;
//   });
  console.log("currentContract", currentContract);
});
console.log("paginatedItems", paginatedItems);
const selectItem = (event, contractData) => {
  if (event.type === "click") return;
  if (props.svg !== "contract") {
    return;
  }
  const contractObjects = contractObjectsList.filter(
    (item) => item.KOD_DOG === contractData.KOD_DOG
  );
  layoutStore.dbClickItem(contractData, contractObjects);
};

const selectObject = (contractData) => {
  if (props.svg !== "contract") {
    return;
  }
  const contractObjects = contractObjectsList.filter(
    (item) => item.KOD_DOG === contractData.KOD_DOG
  );
  console.log('!!!!', contractObjects)
  selectedItemId.value = contractData.id;
  layoutStore.clickItem(contractObjects);
};
console.log(layoutStore);
const menuData = reactive({
  items: [
    {
      label: "Добавить",
      onClick: () => alert("Click Simple item"),
      icon: h("div", {
        innerHTML: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L12 18" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
<path d="M18 12L6 12" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
</svg>
`,
        style: {
          width: "20px",
          height: "20px",
          marginRight: "4px",
        },
      }),
    },
  ],
  iconFontClass: "iconfont",
  customClass: "class-a",
  keyboardControl: true,
  zIndex: 3,
  minWidth: 230,
  x: 0,
  y: 0,
  onClose() {
    console.log("onClose");
  },
});

const menuCurrentItem = reactive({
  items: [
    {
      label: "Открыть в новом окне",
      onClick: () => alert("Click Simple item"),
      icon: h("div", {
        innerHTML: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L12 18" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
<path d="M18 12L6 12" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
</svg>
`,
        style: {
          width: "20px",
          height: "20px",
          marginRight: "4px",
        },
      }),
    },
  ],
  keyboardControl: true,
  zIndex: 3,
  minWidth: 230,
  x: 0,
  y: 0,
  onClose() {
    console.log("onClose");
  },
});
const onContextMenu = (e) => {
  e.preventDefault();
  menuData.x = e.x;
  menuData.y = e.y;
  //show our menu
  ContextMenu.showContextMenu(menuData);
};

const onContextMenuCurrentItem = (e) => {
  e.preventDefault();
  menuCurrentItem.x = e.x;
  menuCurrentItem.y = e.y;
  //show our menu
  ContextMenu.showContextMenu(menuCurrentItem);
};
const paginate = (pageSize, pageNumber) => {
  paginatedItems.value = props.items.slice(
    pageNumber * pageSize,
    (pageNumber + 1) * pageSize
  );
  console.log(paginatedItems.value);
};

const onPageChanged = (page) => {
  paginate(perPage.value, page - 1);
};

defineExpose({
  elementRef,
});
</script>

<style scoped lang="scss">
@import "@imengyu/vue3-context-menu/lib/vue3-context-menu.css";

.items-group-container {
  position: relative;
}
.data-card-container {
  color: #445566fb;
  font-family: "Montserrat";
  border-radius: 0px;
  padding: 6px 10px 6px 18px;
  border-left: none;
  border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: white;
  .data-card-title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0;
    cursor: pointer;
  }
  .data-card-description {
    font-size: 12px;
    color: #445566;
    font-weight: 500;
    margin-bottom: 6px;
  }
  .text-content {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .mx-item-row {
    gap: 6px;
    align-items: center;
  }
}

.data-card-title-container {
  justify-content: space-between;
  margin-bottom: 6px;
}
.scrollbar::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

.scrollbar::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}
.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #dbdbdb;
}

.item-group {
  padding: 4px 10px;
  color: #445566;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  position: relative;
      margin-left: 10px;
}
.item-group-1:before {
  content: "";
  position: absolute;
  top: 7px;
  bottom: 0;
  left: -10px;
  width: 7px;
  height: 7px;
  border-radius: 50px;
  background-color: rgb(182, 1, 1);
}

.item-group-0:before {
  content: "";
  position: absolute;
  top: 7px;
  bottom: 0;
  left: -10px;
  width: 7px;
  height: 7px;
  border-radius: 50px;
  background-color: #ff7819;
}

.item-group-2:before {
  content: "";
  position: absolute;
  top: 7px;
  bottom: 0;
  left: -10px;
  width: 7px;
  height: 7px;
  border-radius: 50px;
  background-color: rgb(33, 139, 0);
}

.item-group:not(:last-child) {
  margin-bottom: 10px;
}
</style>
