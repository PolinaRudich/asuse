<template>
  <DxDataGrid

    id="contract-grid"
    ref="dataGrid"
    :row-alternation-enabled="true"
    :show-borders="true"
    :selection="{ mode: 'single' }"
    :allow-column-resizing="true"
    column-resizing-mode="widget"
    :show-column-lines="true"
    class="contract-grid"
    :data-source="dataSource"
    @rowDblClick="onOpenClick"
    @row-prepared="onRowPrepared"

  >
    <DxScrolling row-rendering-mode="virtual"/>
    <DxPaging :page-size="10"/>
    <DxPager
      :visible="true"
    />
    <DxColumn
      caption="№ Договора"
      :width="150"
      data-field="NDOG"
    />
    <DxColumn
      caption="№ Абонента"
      data-field="NUMP"
    />
    <DxColumn
      caption="Абонент"
      data-field="NAME"
    />
    <DxColumn
      caption="Юр. Адрес"
      data-field="ADRESSU"
      :width="550"
    />
    <DxColumn
      caption="ИНН"
      data-field="INN"
    />
    <DxColumn
      caption="КПП"
      data-field="KPP"
    />
    <DxColumn
      caption="Ст.Д."
    />
    <DxColumn

      caption="Ст.А."
    />
    <DxColumn

      caption="Отделение"
      data-field="DEP_NAME"
    />
  </DxDataGrid>
  <div class="filter-bar">
    <DxButton
      id="allButton"
      class="filter-bar-button"
      text="Везде [7]"
      styling-mode="contained"
      :type="searchData.buttons.all.options.type"
      :disabled="searchData.buttons.all.options.disable"
      @click="onClick($event)"
    >
      <div class="filter-bar-button-content">
        <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">Везде</div>
        <div
class=".filter-bar-button-content-count"
             :style=searchData.buttons.all.options.style>
          {{ searchData.buttons.all.count }}
        </div>
      </div>
    </DxButton>
    <DxButton
      id="numdogButton"
      class="filter-bar-button"
      text="№ Договора"
      :type="searchData.buttons.numDog.options.type"
      styling-mode="contained"
      :disabled="searchData.buttons.numDog.options.disable"
      @click="onClick($event)"
    >
      <div class="filter-bar-button-content">
        <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">№ Договора
        </div>
        <div
class=".filter-bar-button-content-count"
             :style=searchData.buttons.numDog.options.style>
          {{ searchData.buttons.numDog.count }}
        </div>
      </div>
    </DxButton>
    <DxButton
      id="numabonButton"
      class="filter-bar-button"
      :width="120"
      text="№ Абонента"
      :type="searchData.buttons.numAbon.options.type"
      styling-mode="contained"
      :disabled="searchData.buttons.numAbon.options.disable"
      @click="onClick($event)"
    >
      <div class="filter-bar-button-content">
        <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">№ Абонента
        </div>
        <div
class=".filter-bar-button-content-count"
             :style=searchData.buttons.numAbon.options.style>{{ searchData.buttons.numAbon.count
          }}
        </div>
      </div>
    </DxButton>
    <DxButton
      id="abonButton"
      class="filter-bar-button"
      :width="120"
      text="Абонент"
      :type="searchData.buttons.nameAbon.options.type"
      styling-mode="contained"
      :disabled="searchData.buttons.nameAbon.options.disable"
      @click="onClick($event)"
    >
      <div class="filter-bar-button-content">
        <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">Абонент</div>
        <div
class=".filter-bar-button-content-count"
             :style=searchData.buttons.nameAbon.options.style>{{ searchData.buttons.nameAbon.count
          }}
        </div>
      </div>
    </DxButton>
    <DxButton
      id="adressButton"
      :width="120"
      class="filter-bar-button"
      text="Адрес"
      :type="searchData.buttons.adress.options.type"
      styling-mode="contained"
      :disabled="searchData.buttons.adress.options.disable"
      @click="onClick($event)"
    >
      <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">Адрес
      </div>
      <div
class=".filter-bar-button-content-count"
           :style=searchData.buttons.adress.options.style>{{ searchData.buttons.adress.count }}
      </div>
    </DxButton>
    <DxButton
      id="innButton"
      :width="120"
      class="filter-bar-button"
      text="ИНН"
      type="normal"
      styling-mode="contained"
      :disabled="searchData.buttons.inn.options.disable"
      @click="onClick($event)"
    >
      <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">ИНН
      </div>
      <div
class=".filter-bar-button-content-count"
           style="font-size: 10px; color: gray; text-align: right;">0
      </div>
    </DxButton>
    <DxButton
      class="filter-bar-button"
      :width="120"
      text="КПП"
      type="normal"
      styling-mode="contained"
      :disabled="searchData.buttons.kpp.options.disable"
      @click="onClick($event)"
    >
      <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">КПП
      </div>
      <div
class=".filter-bar-button-content-count"
           style="font-size: 10px; color: gray; text-align: right;">0
      </div>
    </DxButton>
  </div>
</template>

<script>

import {
  DxDataGrid,
  DxColumn,
  DxScrolling,
  DxPaging,
  DxPager
} from 'devextreme-vue/data-grid';
import DxButton from "devextreme-vue/button";
import contractList from "../../data/contract-list";

export default {
  name: "SearchContractGrid",
  components: {
    DxDataGrid,
    DxColumn,
    DxButton,
    DxScrolling,
    DxPaging,
    DxPager
  },
  props: {
    find_text: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      searchData: {
        find_text: '',
        filterAll: [],
        checkedButtonID: 'allButton',
        buttons: {
          all: {
            count: 0,
            options: {
              type: "default",
              style: {fontSize: '10px', color: 'yellow', textAlign: 'right'},
              disable: false
            }
          },
          numDog: {
            count: 0,
            options: {
              type: "normal",
              style: {fontSize: '10px', color: 'gray', textAlign: 'right'},
              disable: false
            }
          },
          numAbon: {
            count: 0,
            options: {
              type: "normal",
              style: {fontSize: '10px', color: 'gray', textAlign: 'right'},
              disable: false
            }
          },
          nameAbon: {
            count: 0,
            options: {
              type: "normal",
              style: {fontSize: '10px', color: 'gray', textAlign: 'right'},
              disable: false
            }
          },
          adress: {
            count: 0,
            options: {
              type: "normal",
              style: {fontSize: '10px', color: 'gray', textAlign: 'right'},
              disable: false
            }
          },
          inn: {
            count: 0,
            options: {
              type: "normal",
              style: {fontSize: '10px', color: 'gray', textAlign: 'right'},
              disable: true
            }
          },
          kpp: {
            count: 0,
            options: {
              type: "normal",
              style: {fontSize: '10px', color: 'gray', textAlign: 'right'},
              disable: true
            }
          }
        }
      }
    }
  },
  methods: {
    onClick(e) {
      this.findButtonOptions(e.component.elementAttr.id)
      this.searchData.checkedButtonID = e.component.elementAttr.id
      this.findDog()
      console.log(e.component.elementAttr.id)
    },
    findButtonOptions(id) {

      this.searchData.buttons.all.options.type = 'normal';
      this.searchData.buttons.numDog.options.type = 'normal';
      this.searchData.buttons.numAbon.options.type = 'normal';
      this.searchData.buttons.nameAbon.options.type = 'normal';
      this.searchData.buttons.adress.options.type = 'normal';

      this.searchData.buttons.all.options.style.color = 'gray'
      this.searchData.buttons.numDog.options.style.color = 'gray'
      this.searchData.buttons.numAbon.options.style.color = 'gray'
      this.searchData.buttons.nameAbon.options.style.color = 'gray'
      this.searchData.buttons.adress.options.style.color = 'gray'

      switch (id) {
        case 'allButton':
          this.searchData.buttons.all.options.type = 'default';
          this.searchData.buttons.all.options.style.color = 'yellow'
          break;
        case 'numdogButton':
          this.searchData.buttons.numDog.options.type = 'default';
          this.searchData.buttons.numDog.options.style.color = 'yellow'
          break;
        case 'numabonButton':
          this.searchData.buttons.numAbon.options.type = 'default';
          this.searchData.buttons.numAbon.options.style.color = 'yellow'
          break;
        case 'abonButton':
          this.searchData.buttons.nameAbon.options.type = 'default';
          this.searchData.buttons.nameAbon.options.style.color = 'yellow'
          break;
        case 'adressButton':
          this.searchData.buttons.adress.options.type = 'default';
          this.searchData.buttons.adress.options.style.color = 'yellow'
          break;
        default:
          break;
      }
    },


    findDog(text) {
      let find_value = ''
      if (text !== undefined){
        find_value = text;
      } else {
        find_value = this.$props.find_text
      }
      const contractsDataGrid = this.$refs['dataGrid'].instance
      this.searchData.buttons.all.count = 0
      this.searchData.buttons.numAbon.count = 0
      this.searchData.buttons.numDog.count = 0
      this.searchData.buttons.nameAbon.count = 0
      this.searchData.buttons.adress.count = 0
      this.searchData.buttons.inn.count = 0
      this.searchData.buttons.kpp.count = 0
      this.searchData.filterAll = contractList.filter(item => {
          let find = false

          if (item.NDOG.toString().toUpperCase().includes(find_value.toUpperCase())) {
            this.searchData.buttons.numDog.count = this.searchData.buttons.numDog.count + 1;
            find = true
          }
          if (item.NUMP.toString().toUpperCase().includes(find_value.toUpperCase())) {
            this.searchData.buttons.numAbon.count = this.searchData.buttons.numAbon.count + 1;
            find = true
          }
          if (item.NAME.toString().toUpperCase().includes(find_value.toUpperCase())) {
            this.searchData.buttons.nameAbon.count = this.searchData.buttons.nameAbon.count + 1;
            find = true
          }
          if (item.ADRESSU.toString().toUpperCase().includes(find_value.toUpperCase())) {
            this.searchData.buttons.adress.count = this.searchData.buttons.adress.count + 1;
            find = true
          }
          if (find) {
            this.searchData.buttons.all.count = this.searchData.buttons.all.count + 1
          }
          return find
        }
      )
      this.searchData.buttons.numDog.options.disable = (this.searchData.buttons.numDog.count === 0);
      this.searchData.buttons.numAbon.options.disable = (this.searchData.buttons.numAbon.count === 0);
      this.searchData.buttons.nameAbon.options.disable = (this.searchData.buttons.nameAbon.count === 0);
      this.searchData.buttons.adress.options.disable = (this.searchData.buttons.adress.count === 0);
      this.searchData.buttons.inn.options.disable = (this.searchData.buttons.inn.count === 0);
      this.searchData.buttons.kpp.options.disable = (this.searchData.buttons.kpp.count === 0);
      if (this.searchData.checkedButtonID === 'allButton') {
        this.dataSource = this.searchData.filterAll;
      }
      if (this.searchData.checkedButtonID === 'numdogButton') {
        this.dataSource = this.searchData.filterAll.filter(item => {
          let find = false
          if (item.NDOG.toString().includes(find_value)) {
            find = true
          }
          return find
        })
      }
      if (this.searchData.checkedButtonID === 'numabonButton') {
        this.dataSource = this.searchData.filterAll.filter(item => {
          let find = false
          if (item.NUMP.toString().includes(find_value)) {
            find = true
          }
          return find
        })
      }
      if (this.searchData.checkedButtonID === 'abonButton') {
        this.dataSource = this.searchData.filterAll.filter(item => {
          let find = false
          if (item.NAME.toString().toUpperCase().includes(find_value.toUpperCase())) {
            find = true
          }
          return find
        })
      }
      if (this.searchData.checkedButtonID === 'adressButton') {
        this.dataSource = this.searchData.filterAll.filter(item => {
          let find = false
          if (item.ADRESSU.toString().toUpperCase().includes(find_value.toUpperCase())) {
            find = true
          }
          return find
        })
      }
      // this.searchData.buttons.all.count = this.searchData.filterAll.length
      contractsDataGrid.option("dataSource", this.dataSource);
    },
  }
}
</script>

<style scoped>

</style>
