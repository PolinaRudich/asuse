<template>
  <div
    :class="[
      'side-nav-inner-toolbar',
      menuOptions.compactMode ? 'compact-mode-drawer-container' : '',
    ]"
  >
    <app-main-menu id="app-main-menu" />
    <dx-drawer
      v-model:opened="menuOpened"
      :class="'drawer'"
      position="before"
      template="menuTemplate"
      :opened-state-mode="drawerOptions.menuMode"
      :reveal-mode="drawerOptions.menuRevealMode"
      :min-size="drawerOptions.minMenuSize"
      :max-size="drawerOptions.maxMenuSize"
      :shading="drawerOptions.shaderEnabled"
      :close-on-outside-click="drawerOptions.closeOnOutsideClick"
    >
      <div
        :class="[
          'container',
          menuOptions.compactMode && 'container-compact-mode',
        ]"
        style="margin-left: 0px; padding: 0px; max-width: 1420px"
      >
        <SettingsModal
          v-if="isSettingsOpen.modal"
          :select-item-function="handleClick"
          :active-index="isSettingsOpen.activeItem"
          :modal-items="items"
          :click-outside="clickOutside"
          :compact-mode="menuOptions.compactMode"
        />
        <div
          v-if="isFilterOpen.modal"
          v-click-outside="{
            handler: clickOutsideFilterModal,
            include,
          }"
          class="modal-list"
        >
          <div v-for="(item, index) in filterItems" :key="index">
            <div
              class="flex-container checkbox-container modal-list-item"
              :style="{
                'align-items': 'center',
                padding: '4px',
                'font-weight': '500',
              }"
            >
              <input
                type="checkbox"
                style="margin: 0"
                @input="selectFilter(index)"
                :checked="menuOptions.checkedFilterItems.includes(index)"
                id="flexCheckChecked"
                class="form-check-input"
              />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
        <dx-scroll-view
          v-if="isModalOpen === 0"
          ref="scrollViewRef"
          class="layout-body with-footer"
          @scroll="onScroll"
        >
          <contract-card-view
            ref="child"
            :current-contragent="layoutStore.contragent"
            :current-contract-id="layoutStore.contractItem"
            :scrolled-distance="scrolledDistance"
          />
        </dx-scroll-view>
        <contract-card-view
          v-else
          ref="child"
          :current-contragent="layoutStore.contragent"
          :current-contract-id="layoutStore.contractItem"
          :scrolled-distance="scrolledDistance"
        />
      </div>

      <template #menuTemplate>
        <side-nav-menu
          :compact-mode="menuOptions.compactMode"
          :filter-names-to-display="filterNamesToDisplay"
        >
          <dx-toolbar id="navigation-header">
            <dx-item v-if="!isXSmall" location="before" css-class="menu-button">
              <template #default>
                <dx-button
                  icon="menu"
                  styling-mode="text"
                  @click="toggleMenu"
                />
              </template>
            </dx-item>
            <dx-item
              location="before"
              css-class="header-title dx-toolbar-label"
            >
              <template #footer>
                qqw
                <!-- <div>{{ title }}</div> -->
              </template>
            </dx-item>
          </dx-toolbar>
        </side-nav-menu>
      </template>
    </dx-drawer>
  </div>
</template>

<script>
import DxButton from "devextreme-vue/button";
import DxDrawer from "devextreme-vue/drawer";
import DxScrollView from "devextreme-vue/scroll-view";
import DxToolbar, { DxItem } from "devextreme-vue/toolbar";
import contractList from "../data/contract-list.json";
import contragent from "../data/contragent.json";
import contractObjectsList from "../data/contract-objects-list.json";
import SideNavMenu from "../components/side-nav-menu";
import ContractCardView from "../views/contract-card-view.vue";
import menuItems from "../app-navigation";
import { ref, watch, computed, provide, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import SettingsModal from "@/components/settings-modal.vue";
import AppMainMenu from "@/components/app-main-menu.vue";

export default {
  components: {
    AppMainMenu,
    DxButton,
    DxDrawer,
    DxScrollView,
    DxToolbar,
    DxItem,
    SideNavMenu,
    ContractCardView,
    SettingsModal,
  },
  props: {
    title: String,
    isXSmall: Boolean,
    isLarge: Boolean,
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const scrollViewRef = ref(null);
    // const compactMode = ref(false);
    const menuTemporaryOpened = ref(false);
    const include = document.querySelector(".included");
    const scrolledDistance = ref(0);
    const currentContractId = ref(-1);
    const isSettingsOpen = reactive({ modal: false, activeItem: 0 });
    const menuOptions = reactive({
      compactMode: false,
      toggleMenu,
      checkedFilterItems: [],
    });
    const isFilterOpen = reactive({ modal: false });
    const items = ["Карточку договора", "Карточку абонента"];
    const child = ref(null);
    const isModalOpen = ref(0);
    const t = ref(window.localStorage.getItem("list"));
    const filterItems = [
      { name: "Новые", color: "rgb(33 139 0)" },
      { name: "Актив", color: "rgb(255 120 25)" },
      { name: "Архив", color: "rgb(182 1 1)" },
    ];
    onMounted(() => {
      isModalOpen.value = child.value.isSettingsOpen.dragDrop;
      const list = [
        {
          id: 1,
          order: 1,
          isOpen: true,
          name: "Реквизиты",
          slotName: "req",
        },
        {
          id: 2,
          order: 2,
          isOpen: false,
          name: "Даты",
          slotName: "dates",
        },
        {
          id: 3,
          order: 3,
          isOpen: false,
          name: "Статус",
          slotName: "status",
        },
        {
          id: 4,
          order: 4,
          isOpen: false,
          name: "Банковские реквизиты",
          slotName: "banks",
        },
        {
          id: 5,
          order: 5,
          isOpen: false,
          name: "Переоформления",
          slotName: "reform",
        },
        {
          id: 6,
          order: 6,
          isOpen: false,
          name: "Финансы",
          slotName: "finance",
        },
        {
          id: 7,
          order: 7,
          isOpen: false,
          name: "Адреса",
          slotName: "adresses",
        },
      ];
      const localStorageList = window.localStorage.getItem("list");
      !localStorageList &&
        window.localStorage.setItem("list", JSON.stringify(list));
      window.localStorage.setItem("defaultListOrder", JSON.stringify(list));
      layoutStore.objectsListOfContract = contractObjectsList.filter((item) => {
        return layoutStore.currentContract.KOD_DOG === item.KOD_DOG;
      });
      let buttons = document.querySelectorAll(".accordion-button");
      if (buttons) {
        const listArray = localStorageList
          ? JSON.parse(localStorageList)
          : list;
        for (let i = 0; i <= buttons.length - 1; i++) {
          const buttonTitle = buttons[i].firstChild.textContent;
          const currentItemInList = listArray.find(
            (el) => el.name === buttonTitle || buttonTitle.includes(el.name)
          );
          if (currentItemInList) {
            if (
              currentItemInList.isOpen &&
              buttons[i].classList.value.includes("collapsed")
            ) {
              buttons[i].click();
            }
            if (
              !currentItemInList.isOpen &&
              !buttons[i].classList.value.includes("collapsed")
            ) {
              buttons[i].click();
            }
          }
        }
      }
    });

    watch(() => {
      if (child.value) {
        isModalOpen.value = child.value.isSettingsOpen.dragDrop;
        console.log(child.value);
      }
    });
    function toggleMenu() {
      menuOptions.compactMode = !menuOptions.compactMode;
    }
    const contractObject = reactive({
      objects: [],
    });

    const selectFilter = (index) => {
      menuOptions.checkedFilterItems.includes(index)
        ? (menuOptions.checkedFilterItems =
            menuOptions.checkedFilterItems.filter((el) => el !== index))
        : menuOptions.checkedFilterItems.push(index);
    };

    const filterNamesToDisplay = computed(() => {
      return menuOptions.checkedFilterItems.map((el) => {
        switch (el) {
          case 0: {
            return { name: "Новые", color: "rgb(33 139 0)" };
          }
          case 1: {
            return { name: "Актив", color: "rgb(255 120 25)" };
          }
          case 2: {
            return { name: "Архив", color: "rgb(182 1 1)" };
          }
        }
      });
    });

    const clickOutsideFilterModal = () => {
      console.log("ewrwer");
    };

    const clickOutside = () => {
      isSettingsOpen.modal = false;
    };

    const handleClick = (index) => {
      isSettingsOpen.activeItem = index;
      setTimeout(() => {
        clickOutside();
      }, 100);
    };

    const clickItem = (contractObjectsList) => {
      layoutStore.objectsListOfContract = contractObjectsList;
      console.log(layoutStore);
    };

    const dbClickItem = (item, contractObjectsList) => {
      layoutStore.objectsListOfContract = contractObjectsList;
      layoutStore.currentContract = item;
      router.push(`/contract-card-view/${item.KOD_DOG}`);
    };

    const layoutStore = reactive({
      objectsListOfContract: [],
      currentContract: {},
      contractDataList: [],
      contractItem: {},
      contragent: {},
      clickItem,
      dbClickItem,
      clickOutside,
    });

    provide("layoutStore", layoutStore);
    provide("contractObject", contractObject);
    provide("isSettingsOpen", isSettingsOpen);
    provide("isModalOpen", isModalOpen);
    provide("isFilterOpen", isFilterOpen);
    provide("menuOptions", menuOptions);
    // поиск строки в реестре договоров на основании параметра id из роута
    layoutStore.currentContract = contractList.find((item) => {
      return item.KOD_DOG.toString() === route.params.id;
    });

    layoutStore.contragent = contragent.find((item) => {
      return item.KOD_ABONENT === layoutStore.currentContract.KOD_ABONENT;
    });

    layoutStore.contractDataList = contractList.filter(
      (item) => item.KOD_ABONENT === layoutStore.contragent.KOD_ABONENT
    );

    layoutStore.contractDataList.map((item, index) => {
      item.id = index;
      item.title = `${item.NDOG} ${item.DATE_START}`;
    });

    layoutStore.objectsListOfContract = contractObjectsList.filter((item) => {
      return item.KOD_DOG === contractObjectsList.KOD_DOG;
    });
    layoutStore.objectsListOfContract.forEach((item, index) => {
      item["id"] = index;
      item["title"] = `(${item.NUM_OBJ}) ${item.NAME}`;
    });

    watch(() => {
      layoutStore.objectsListOfContract.forEach((item, index) => {
        item["id"] = index;
        item["title"] = `(${item.NUM_OBJ}) ${item.NAME}`;
      });
    });
    contractList.objects = contractObject.objects;

    function onScroll(event) {
      scrolledDistance.value = event.scrollOffset.top;
    }
    function handleSideBarClick() {
      if (menuOptions.compactMode === false) {
        menuTemporaryOpened.value = true;
      }

      menuOptions.compactMode = true;
    }

    const drawerOptions = computed(() => {
      const shaderEnabled = !props.isLarge;

      return {
        menuMode: props.isLarge ? "shrink" : "overlap",
        menuRevealMode: props.isXSmall ? "slide" : "expand",
        minMenuSize: props.isXSmall ? 0 : 60,
        maxMenuSize: props.isXSmall ? 250 : undefined,
        closeOnOutsideClick: shaderEnabled,
        shaderEnabled,
      };
    });

    const headerMenuTogglerEnabled = computed(() => {
      return props.isXSmall;
    });

    watch(
      () => props.isLarge,
      () => {
        if (!menuTemporaryOpened.value) {
          menuOptions.compactMode = props.isLarge;
        }
      }
    );

    watch(
      () => route.path,
      () => {
        if (menuTemporaryOpened.value || !props.isLarge) {
          menuOptions.compactMode = false;
          menuTemporaryOpened.value = false;
        }
        scrollViewRef.value.instance.scrollTo(0);
      }
    );

    return {
      scrollViewRef,
      menuOptions,
      drawerOptions,
      menuItems,
      headerMenuTogglerEnabled,
      toggleMenu,
      handleSideBarClick,
      scrolledDistance,
      onScroll,
      currentContractId,
      contractObject,
      layoutStore,
      isSettingsOpen,
      handleClick,
      items,
      child,
      isModalOpen,
      t,
      isFilterOpen,
      filterItems,
      clickOutsideFilterModal,
      include,
      selectFilter,
      filterNamesToDisplay,
    };
  },
};
</script>

<style lang="scss">
#app-main-menu {
}

.container-compact-mode {
  max-width: 90% !important;
}
.side-nav-inner-toolbar {
  //height: property-value();
  height: calc(100% - 58px);
  width: 100%;
}

.modal-list-item {
  margin-bottom: 10px;
}
.compact-mode-drawer-container {
  .dx-drawer-panel-content {
    min-width: 60px;
  }
}
#navigation-header {
  @import "../themes/generated/variables.additional.scss";

  background-color: $base-accent;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  .menu-button .dx-icon {
    color: $base-text-color;
  }

  .screen-x-small & {
    padding-left: 20px;
  }

  .dx-theme-generic & {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .container {
    max-width: 1420px !important;
    margin-left: 100px !important;
  }
  .layout-body {
    padding: 0;
  }
}
</style>
