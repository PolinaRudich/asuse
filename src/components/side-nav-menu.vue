<template>
  <div
    :class="[
      'dx-swatch-additional',
      'side-navigation-menu',
      compactMode && 'compact-mode-side-menu',
    ]"
    @click="forwardClick"
  >
    <div class="compact-mode-switcher" @click="setMenuOptions($event)">
      <svg
        class="chevron"
        style="position: absolute; right: 0px; top: 13px"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 6L9 12L15 18" stroke="white" stroke-width="2" />
      </svg>
    </div>
    <div
      class="menu-container scrollbar"
      :style="compactMode && 'margin-top: 54px;'"
    >
      <SideNavToolbar
        :compact-mode="compactMode"
        :filter-names-to-display="filterNamesToDisplay"
      />
      <DataCard
        v-if="!compactMode"
        title="Контрагент"
        :description="layoutStore.contragent.NAME"
        svg="counterparty"
      />
      <DataCard
        v-if="!compactMode"
        title="Договор"
        svg="contract"
        :items="layoutStore.contractDataList"
      />
      <DataCard
        v-if="!compactMode && layoutStore.objectsListOfContract.length > 0"
        title="Объект"
        svg="object"
        :items="layoutStore.objectsListOfContract"
      />
      <div
        v-if="compactMode"
        class="flex-container"
        style="flex-direction: column; margin-top: 20px"
      >
        <div class="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
              stroke="#445566"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="svg-wrapper">
          <svg
            width="24"
            height="24"
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
              stroke="#445566"
              stroke-width="2"
            />
            <path
              d="M9 9H15"
              stroke="#445566"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M9 13H15"
              stroke="#445566"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M9 17H13"
              stroke="#445566"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="svg-wrapper">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 21L15 11L8 4L1 11V21H15Z"
              stroke="#445566"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 18H22L22 8L15 1L8 8L8 17.5"
              stroke="#445566"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <ContextStory :compact-mode="compactMode" />
  </div>
</template>

<script>
import { inject, ref, computed } from "vue";
import sidebarData from "@/data/sidebar_data";
import DataCard from "@/components/data-card.vue";
import SideNavToolbar from "@/components/side-nav-toolbar";
import ContextStory from "@/components/context-story";
export default {
  components: {
    DataCard,
    SideNavToolbar,
    ContextStory,
  },
  props: {
    compactMode: Boolean,
    filterNamesToDisplay: Array,
  },
  setup(props, context) {
    const cardsRef = ref([]);
    const upHere = ref("");
    const layoutStore = inject("layoutStore");
    const scrollToItem = (itemId) => {
      cardsRef.value[itemId - 1].elementRef.scrollIntoView({
        behavior: "smooth",
      });
    };

    const currentContractData = inject("currentContractId");
    const menuOptions = inject("menuOptions");
    const objectItems = computed(() => {
      return layoutStore.objectsListOfContract.map((item, index) => {
        return { id: index, title: item.NDOG + " " + item.DATE_START };
      });
    });
    console.log("sdfs", objectItems.value);
    // поиск строки в реестре договоров на основании параметра id из роута
    const setMenuOptions = (event) => {
      menuOptions.toggleMenu(event);
    };

    function forwardClick(...args) {
      context.emit("click", args);
    }

    return {
      forwardClick,
      sidebarData,
      scrollToItem,
      cardsRef,
      upHere,
      currentPage: 1,
      perPage: 2,
      total: 20,
      currentContractData,
      layoutStore,
      objectItems,
      setMenuOptions,
    };
  },
};
</script>

<style lang="scss">
@import "../dx-styles.scss";
@import "../themes/generated/variables.additional.scss";

.goto-buttons {
  top: 0;
  flex-direction: column;
  z-index: 4;
  position: fixed;
  display: flex;
  left: 0px;

  button {
    margin-left: 6px;
    border: none;
    outline: none;
    border-radius: 0px;
    display: flex;
    border-bottom: 1px solid white !important;
    gap: 4px;
    justify-content: space-between;
    align-items: center;
    background: transparent;
  }
}
.history-navigation {
  align-self: end;
  position: relative;
  width: 100%;
}
.chevron {
  transition: all 0.5s ease;
}
.compact-mode-side-menu {
      transition: width 0.5s ease;
      position: relative;
  .chevron {
    transform: rotate(180deg);
    transition: all 0.5s ease;
  }
  width: 60px;
  .menu-container {
    padding: 0 !important;
  }
  .toolbar-container {
    margin-left: 10px !important;
  }
}
.compact-mode-switcher {
  cursor: pointer;
  background-color: #ff7819;
  width: 25px;
  height: 50px;
  position: absolute;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  right: 0;
  top: 0px;
}
.active-button {
  background: yellow;
}
.svg-wrapper {
  background: rgba(219, 219, 219, 0.4666666667);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 6px;
  border: 1px solid rgba(0, 0, 0, 0.158);
}
.side-navigation-menu {
  display: flex;
  grid-template-rows: auto auto;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
  position: relative;
  transition: all 1s ease-out;
  background: linear-gradient(
    1800deg,
    rgba(255, 255, 255, 1) 9%,
    rgba(240, 248, 255, 1) 50%,
    rgba(255, 255, 255, 1) 95%
  );
  .menu-container {
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    gap: 10px;
    padding: 0px 10px 0 0px;
    max-height: 100%;
    margin-bottom: 10px;
    flex-grow: 1;
    .dx-treeview {
      // ## Long text positioning
      white-space: nowrap;
      // ##

      // ## Icon width customization
      .dx-treeview-item {
        padding-left: 0;
        padding-right: 0;

        .dx-icon {
          width: $side-panel-min-width !important;
          margin: 0 !important;
        }
      }

      // ##

      // ## Arrow customization
      .dx-treeview-node {
        padding: 0 0 !important;
      }

      .dx-treeview-toggle-item-visibility {
        right: 10px;
        left: auto;
      }

      .dx-rtl .dx-treeview-toggle-item-visibility {
        left: 10px;
        right: auto;
      }

      // ##

      // ## Item levels customization
      .dx-treeview-node {
        &[aria-level="1"] {
          font-weight: bold;
          border-bottom: 1px solid $base-border-color;
        }

        &[aria-level="2"] .dx-treeview-item-content {
          font-weight: normal;
          padding: 0 $side-panel-min-width;
        }
      }

      // ##
    }

    // ## Selected & Focuced items customization
    .dx-treeview {
      .dx-treeview-node-container {
        .dx-treeview-node {
          &.dx-state-selected:not(.dx-state-focused) > .dx-treeview-item {
            background: transparent;
          }

          &.dx-state-selected > .dx-treeview-item * {
            color: $base-accent;
          }

          &:not(.dx-state-focused) > .dx-treeview-item.dx-state-hover {
            background-color: lighten($base-bg, 4);
          }
        }
      }
    }

    .dx-theme-generic .dx-treeview {
      .dx-treeview-node-container
        .dx-treeview-node.dx-state-selected.dx-state-focused
        > .dx-treeview-item
        * {
        color: inherit;
      }
    }

    // ##
  }
}

.arrow-svg {
  transform: rotate(-90deg);
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
  width: 6px;
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

.dx-drawer-panel-content {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  max-width: 360px;
  min-width: 300px;
  transition: all 0.5s ease;
}

.v-pagination__list {
  padding: 0;
  margin-bottom: 4px !important;
  position: absolute;
  bottom: 0;
  gap: 14px;
}
.v-pagination__item {
  width: 20px !important;
  height: 20px !important;
}
span.v-btn__content {
  font-size: 12px !important;
  font-weight: 700 !important;
}
.v-pagination__prev {
  width: 20px !important;
  height: 20px !important;
}
.v-pagination__next {
  width: 20px !important;
  height: 20px !important;
}
.v-btn {
  width: 20px !important;
  height: 20px !important;
}

.v-pagination__item:hover,
button:hover span {
  background: transparent !important;
  //   color: rgb(255, 255, 255) !important;
  font-weight: 800;
}
</style>
