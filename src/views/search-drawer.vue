<template>
  <div class="menu-container">
    <div class="d-group-main" v-if="showAbn">
      <div>
        <div class="d-group-h">Абонент</div>
        <div class="status">
          <span>Статус</span>
          <dx-check-box v-model:value="isStatus"/>
          <dx-drop-down-box
              v-model:value="gridBoxValue"
              :defer-rendering="false"
              :data-source="gridDataSource"
              display-expr="name"
              value-expr="idx"
              class="drawer-dropdown"
              style="width: 69%"
          >
            <template #content>
              <DxDataGrid
                  :height="150"
                  :data-source="gridDataSource"
                  :columns="gridColumns"
                  :hover-state-enabled="true"
                  v-model:selected-row-keys="gridBoxValue"
              >
                <DxSelection mode="multiple"/>
              </DxDataGrid>
            </template>
          </dx-drop-down-box>
        </div>
        <div class="d-group-1">
          <div class="d-group-h-1">Код абонента</div>
          <div class="status">
            <dx-check-box v-model:value="isCode"/>
            <dx-text-box style="width: 88%" class="drawer-input-text"/>
          </div>

          <div class="d-group-1">
            <div class="d-group-h-1">Диапазон</div>
            <div class="status">
              <span>С</span>
              <dx-check-box v-model:value="isRangeStart1"/>
              <dx-text-box />
              <span>По</span>
              <dx-check-box v-model:value="isRangeEnd1"/>
              <dx-text-box />
            </div>
          </div>
        </div>
      </div>
      <div class="status">
        <span>Наименование</span>
        <dx-check-box v-model:value="isName"/>
        <dx-text-box style="width: 53%"/>
      </div>
      <div class="d-group-1">
        <div class="d-group-h-1">ИНН</div>
        <div class="status">
          <dx-check-box v-model:value="isINN"/>
          <dx-text-box style="width: 88%"/>
        </div>

        <div class="d-group-1">
          <div class="d-group-h-1">Диапазон</div>
          <div class="status">
            <span>С</span>
            <dx-check-box v-model:value="isRangeStart2"/>
            <dx-text-box />
            <span>По</span>
            <dx-check-box v-model:value="isRangeEnd2"/>
            <dx-text-box />
          </div>
        </div>
      </div>
    </div>
    <div class="d-group-main" v-if="showContr">
      <div class="d-group-h">Договор</div>
      <div class="status">
        <span>Статус</span>
        <dx-check-box v-model:value="isStatus"/>
        <dx-drop-down-box
            v-model:value="gridBoxValue"
            :defer-rendering="false"
            :data-source="gridDataSource"
            display-expr="name"
            value-expr="idx"
            style="width: 69%"
        >
          <template #content>
            <DxDataGrid
                :height="150"
                :data-source="gridDataSource"
                :columns="gridColumns"
                :hover-state-enabled="true"
                v-model:selected-row-keys="gridBoxValue"
            >
              <DxSelection mode="multiple"/>
            </DxDataGrid>
          </template>
        </dx-drop-down-box>
      </div>
      <div class="status">
        <span>Номер договора</span>
        <dx-check-box v-model:value="isContractNum"/>
        <dx-drop-down-box
            v-model:value="gridBoxValue"
            :defer-rendering="false"
            :data-source="gridDataSource"
            display-expr="name"
            value-expr="idx"
            style="width: 50%"
        >
          <template #content>
            <DxDataGrid
                :height="150"
                :data-source="gridDataSource"
                :columns="gridColumns"
                :hover-state-enabled="true"
                v-model:selected-row-keys="gridBoxValue"
            >
              <DxSelection mode="multiple"/>
            </DxDataGrid>
          </template>
        </dx-drop-down-box>
      </div>
      <div class="status">
        <span>Вид услуг</span>
        <dx-check-box v-model:value="isServiceType"/>
        <dx-drop-down-box
            v-model:value="gridBoxValue"
            :defer-rendering="false"
            :data-source="gridDataSource"
            display-expr="name"
            value-expr="idx"
            style="width: 63%"
        >
          <template #content>
            <DxDataGrid
                :height="150"
                :data-source="gridDataSource"
                :columns="gridColumns"
                :hover-state-enabled="true"
                v-model:selected-row-keys="gridBoxValue"
            >
              <DxSelection mode="multiple"/>
            </DxDataGrid>
          </template>
        </dx-drop-down-box>
      </div>
      <div class="status">
        <span>Отделение</span>
        <dx-check-box v-model:value="isDepartment" :disabled="true"/>
        <dx-text-box style="width: 61%" value="КАЗАНСКОЕ ГОРОДСКОЕ ОТДЕЛЕНИЕ" :disabled="true"/>
      </div>
      <div class="d-group-1">
        <div class="d-group-h-1">Дата начала действия</div>
        <div class="status">
          <span>С</span>
          <dx-check-box v-model:value="isRangeStart1"/>
          <dx-text-box style="width: 32%"/>
          <span>По</span>
          <dx-check-box v-model:value="isRangeEnd1"/>
          <dx-text-box style="width: 32%"/>
        </div>
      </div>
      <div class="d-group-1">
        <div class="d-group-h-1">Дата прекращения действия</div>
        <div class="status">
          <span>С</span>
          <dx-check-box v-model:value="isRangeStart2"/>
          <dx-text-box style="width: 32%"/>
          <span>По</span>
          <dx-check-box v-model:value="isRangeEnd2"/>
          <dx-text-box style="width: 32%"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {DxDataGrid} from "devextreme-vue/data-grid";
import {DxCheckBox, DxTextBox} from "devextreme-vue";
import {DxDropDownBox} from "devextreme-vue/drop-down-box";
import {DxSelection} from "devextreme-vue/data-grid";

export default {
  name: "search-drawer",
  components: {
    DxDataGrid,
    DxCheckBox,
    DxDropDownBox,
    DxSelection,
    DxTextBox
  },
  props: {
    showAbn: {type: Boolean, default: false},
    showContr: {type: Boolean, default: false}
  },
  data() {
    return {
      isStatus: true,
      isCode: false,
      isRangeStart1: false,
      isRangeEnd1: false,
      isName: false,
      isINN: false,
      isRangeStart2: false,
      isRangeEnd2: false,
      isContractNum: false,
      isServiceType: false,
      isDepartment: true,
      gridDataSource: [
        {"idx": 1, "name": 'Активный', "abbr": 'А'},
        {"idx": 2, "name": 'Неактивный', "abbr": 'У'},
        {"idx": 3, "name": 'Новый', "abbr": 'Н'}
      ],
      gridBoxValue: [1, 2],
      gridColumns: ['name', 'abbr'],
    }
  },
}
</script>

<style lang="scss">

.menu-container {
  overflow-y: auto;
  height: 750px;
  width: 400px;
}

//.menu-container::-webkit-scrollbar {
//  width: 14px;
//}
//
//.menu-container::-webkit-scrollbar-track {
//  background-color: #e4e4e4;
//  border-radius: 100px;
//}
//
//.menu-container::-webkit-scrollbar-thumb {
//  background-color: #807f7f;
//  border-radius: 100px;
//}

.drawer-input-text {
}

.d-group {
  margin-top: 22px;
  padding-top: 20px;
}

.d-group-h {
  background-color: #7a8ea1;
  margin-top: -22px;
  padding-top: 3px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 5px;
  color: white;
  width: fit-content;
  height: 27px;
}

.d-group-h-1 {
  margin-top: -22px;
  padding: 3px 10px 10px 10px;
  border-radius: 5px;
  border: 1px solid #7a8ea1;
  color: #7a8ea1;
  background-color: white;
  width: fit-content;
  height: 27px;
}

.d-group-main {
  margin-top: 22px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  width: 99%;
  height: fit-content;
  border-color: rgba(68, 85, 102, 0.8274509804);
}

.d-group-1 {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  width: 99%;
  height: fit-content;
}

.status {
  display: flex;
  align-items: center;
  padding-top: 10px;

  span {
    margin-right: 5px;
    margin-left: 5px;
  }

  .dx-texteditor.dx-editor-filled::after{
    border-bottom: none;
  }

  .dx-texteditor.dx-state-focused::before {
    border-bottom: none;
  }

  .dx-texteditor-input {
    width: 100%;
  }

  div {
    height: 32px;
    border-radius: 8px;
  }
}

</style>