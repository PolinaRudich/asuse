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
    <DxPaging :page-size="24"/>
    <DxScrolling row-rendering-mode="virtual"/>
    <dx-column
        caption="статус"
        data-field="PRIZN_ACTIV"
        cell-template="statusTempl"
        alignment="center"
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
        caption="ИНН"
        data-field="INN"
    />
    <dx-column
        caption="Адрес местонахождения"
        data-field="ADRESSF"
    />
    <template #statusTempl="{ data }">
      <span>{{data.value === 0 ? 'А' : (data.value === 1 ? 'У' : 'Н')}}</span>
    </template>
  </dx-data-grid>
</template>

<script>

import {
  DxDataGrid,
  DxColumn,
  DxScrolling, DxPaging
} from "devextreme-vue/data-grid";


export default {
  name: "contragents-grid",
  components: {
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