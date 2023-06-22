<template>
  <div style="position: relative" class="modal-sprav">
    <DxPopup
      ref="popupRef"
      class="sprav-popup"
      v-model:visible="spravPopupVisible"
      :drag-enabled="true"
      :hide-on-outside-click="true"
      :show-close-button="false"
      :show-title="true"
      :width="2000"
      :height="500"
      container=".dx-viewport"
      title="Банки"
    >
      <DxPosition at="center" my="center" collision="fit" />

      <div class="buttons-container">
        <div @click="goToEditSprav">
          <button-icon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.204 10.796L19 9C19.5453 8.45475 19.8179 8.18213 19.9636 7.88803C20.2409 7.32848 20.2409 6.67152 19.9636 6.11197C19.8179 5.81788 19.5453 5.54525 19 5C18.4548 4.45475 18.1821 4.18213 17.888 4.03639C17.3285 3.75911 16.6715 3.75911 16.112 4.03639C15.8179 4.18213 15.5453 4.45475 15 5L13.1814 6.81866C14.1452 8.46926 15.5314 9.84482 17.204 10.796ZM11.7269 8.27311L4.8564 15.1436C4.43134 15.5687 4.21881 15.7812 4.07907 16.0423C3.93934 16.3034 3.88039 16.5981 3.7625 17.1876L3.1471 20.2646C3.08058 20.5972 3.04732 20.7635 3.14193 20.8581C3.23654 20.9527 3.40284 20.9194 3.73545 20.8529L6.81243 20.2375C7.40189 20.1196 7.69661 20.0607 7.95771 19.9209C8.21881 19.7812 8.43134 19.5687 8.8564 19.1436L15.7458 12.2542C14.1241 11.2386 12.7524 9.87627 11.7269 8.27311Z"
                fill="#222222"
              />
            </svg>
          </button-icon>
        </div>
        <buttonIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14 15L10 19L14 23"
              stroke="#33363F"
              stroke-width="2"
            ></path>
            <path
              d="M18.0622 8.5C18.6766 9.56413 19 10.7712 19 12C19 13.2288 18.6766 14.4359 18.0622 15.5C17.4478 16.5641 16.5641 17.4478 15.5 18.0622C14.4359 18.6766 13.2288 19 12 19"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path d="M10 9L14 5L10 1" stroke="#33363F" stroke-width="2"></path>
            <path
              d="M5.93782 15.5C5.32344 14.4359 5 13.2288 5 12C5 10.7712 5.32344 9.56413 5.93782 8.5C6.5522 7.43587 7.43587 6.5522 8.5 5.93782C9.56413 5.32344 10.7712 5 12 5"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </svg>
        </buttonIcon>
        <buttonIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            typy="submit"
          >
            <path
              d="M3 6L21 6"
              stroke="#14181F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4 20L20 20C20.5523 20 21 19.5523 21 19L21 5C21 4.44771 20.5523 4 20 4L4 4C3.44772 4 3 4.44772 3 5L3 19C3 19.5523 3.44772 20 4 20Z"
              stroke="#14181F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15 11L11 15L9 13"
              stroke="#14181F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </buttonIcon>
        <div @click="spravPopupVisible = false">
          <buttonIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#222222"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#222222"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </buttonIcon>
        </div>
      </div>
      <DxDataGrid
        :allow-column-resizing="true"
        :ref="dataGridRef"
        :allow-column-reordering="true"
        :data-source="sprav"
        key-expr="KODB"
        :show-borders="true"
        :column-min-width="30"
      >
        <DxSearchPanel
          :visible="true"
          class="search"
          width="400px"
          height="10px"
          placeholder="Search..."
        />
        <DxColumn type="buttons" :width="10">
          <DxButton
            icon="edit"
            type="success"
            text="Редактировать"
            @click="goToEditSprav"
          />
        </DxColumn>
        <DxColumn data-field="NAME" />
        <DxColumn data-field="FILIAL" />
        <DxColumn data-field="ADR" />
        <DxColumn data-field="IDX" />
        <DxColumn data-field="CITY" />
        <DxColumn data-field="NUMBER" />
        <DxScrolling mode="virtual" />
        <DxSelection mode="multiple" />
      </DxDataGrid>
      <template #toolbarbuttons>sdsd</template>
    </DxPopup>
  </div>
</template>

<script>
export default {
  name: "SpravModal",
};
</script>

<script setup>
import { DxPopup, DxPosition } from "devextreme-vue/popup";
import buttonIcon from "./button-icon.vue";
import {
  DxDataGrid,
  DxColumn,
  DxSelection,
  DxScrolling,
  DxSearchPanel,
  DxButton,
} from "devextreme-vue/data-grid";
import { store } from "../store/index.js";
import { inject, watch, ref } from "vue";
const spravPopupVisible = inject("spravPopupVisible");
const popupRef = ref(null);
let sprav = store.getters["card/getOpenedSprav"];
// const toolbarButtons = {
//   closeButtonOptions: {
//     text: "Close",
//     onClick: () => {
//       spravPopupVisible.value = false;
//     },
//   },
// };

watch(spravPopupVisible, () => {
  const note = document.querySelector("html");
  if (spravPopupVisible.value === true) {
    console.log("100");
    note.style.height = "100%";
    note.style.overflow = "hidden";
  } else {
    console.log("removed");
    note.style.removeProperty("height");
    note.style.removeProperty("overflow");
  }
});

const goToEditSprav = () => {
  store.dispatch("card/changeEditSpravMode");
  window.open("/#/nsi-layout/");
};
</script>

<style lang="scss">
.dx-popup-normal {
  & {
    font-family: "Montserrat" !important;
  }

  .dx-searchbox .dx-icon-search {
    position: absolute;
    top: 0;
  }
  .dx-searchbox .dx-texteditor-input,
  .dx-searchbox .dx-placeholder:before {
    padding-left: 8px;
    padding-right: 68px;
  }
  .dx-toolbar-after {
    position: absolute;
    right: 188px;
    top: -80px;
    max-height: 30px;
  }
  .dx-toolbar-items-container {
    height: 0;
  }
  .dx-toolbar-items-container {
    padding: 0 !important;
  }
  .dx-toolbar-items-container {
    position: relative;
    display: flex !important;
  }
  .buttons-container {
    position: absolute;
    top: 13px;
    right: 24px;
    display: flex;
    gap: 9px;
  }
  .dx-command-edit,
  .dx-command-edit-with-icons {
    max-width: 20px !important;
  }
  .dx-command-edit {
    max-width: 20px !important;
  }
  .dx-searchbox .dx-icon-search {
    position: absolute;
    top: 24px;
  }
  .dx-searchbox .dx-texteditor-input,
  .dx-searchbox .dx-placeholder:before {
    padding-left: 53px;
    padding-right: 68px;
  }
}
</style>
