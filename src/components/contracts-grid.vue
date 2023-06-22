<template>
  <dx-data-grid
      ref="contractsDataGrid"
      id="contract-grid"
      class="contract-grid"
      :data-source="dataSource"
      @row-prepared="onRowPrepared"
      @cell-prepared="onCellPrepared"
      :allow-column-resizing="true"
      column-resizing-mode="widget"
      :selection="{ mode: 'single' }"
      :hover-state-enabled="true"
      :showColumnLines="true"
      @rowDblClick="onOpenClick"
  >
    <DxPaging :page-size="23"/>
    <DxScrolling row-rendering-mode="virtual"/>
    <dx-column
        caption="Договор"
    >
      <dx-column
          caption="статус"
          data-field="ACTIVE_DOG"
          cell-template="statusTempl"
          alignment="center"
      />
      <dx-column
          caption="№ договора"
          data-field="NDOG"
      />
      <dx-column
          caption="тип договора"
          data-field="DTE_NAME"
      />
      <dx-column
          caption="вид договора"
          data-field="VDOG_NAME"
      />
      <dx-column
          caption="дата начала действия"
          data-field="DATE_START"
      />
      <dx-column
          caption="дата регистрации"
          data-field="DATE_CONCLUSION"
      />
      <dx-column
          caption="планируемое окончание"
          data-field="DATE_PLAN_END"
      />
      <dx-column
          caption="дата прекращения действия"
          data-field="DATE_FIN"
      />
      <dx-column
          caption="дата пролонгации"
          data-field="DATE_PROLONG"
      />
      <dx-column
          caption="личный договор"
          data-field="DOG_OF_USER"
          cell-template="userDogTempl"
          alignment="center"
      />
    </dx-column>
    <dx-column
        caption="Абонент"
    >
      <dx-column
          caption="ИНН"
          data-field="INN"
      />
      <dx-column
          caption="КПП"
          data-field="KPP"
      />
      <dx-column
          caption="Номер абонента"
          data-field="NUMP"
      />
      <dx-column
          caption="Наименование"
          data-field="NAME"
      />
      <dx-column
          caption="Наименование полное"
          data-field="PL_NAME"
      />
      <dx-column
          caption="ОКВЭД"
          data-field="OKVED"
      />
      <dx-column
          caption="ОКОПФ"
          data-field="FS_ABBR"
      />
    </dx-column>
    <template #userDogTempl="{ data }">
      <dx-check-box :value="data.value" :disabled="true"/>
    </template>
    <template #statusTempl="{ data }">
      <span>{{data.value === 0 ? 'А' : (data.value === 1 ? 'У' : 'Н')}}</span>
    </template>
  </dx-data-grid>
</template>

<script>
import {DxCheckBox} from "devextreme-vue";
import DxDataGrid, {DxColumn, DxPaging, DxScrolling} from "devextreme-vue/data-grid";

export default {
  name: "ContractsGrid",
  components: {
    DxCheckBox,
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxPaging
  },
  props: {
    dataSource: {
      type: Array,
      default: () => null
    },
    onRowPrepared: {
      type: Function,
      default: () => {}
    },
    onCellPrepared: {
      type: Function,
      default: () => {}
    },
    onOpenClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>