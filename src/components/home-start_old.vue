<template>
  <div class="rows-container">
    <div class="row-item">
      <div class="row-widget">
        <div class="widget-button">
          <img class="widget-image" src="../assets/contract-doc-l0002.svg" alt="">
          <div class="widget-text" style="margin-top: 0px">Договор</div>
        </div>
        <div class="widget-search">
          <img class="widget-search-image" src="../assets/icons8-search.svg" alt="">
          <div class="dx-field">
            <div id="dx-field-value" class="dx-field-value">
              <DxDropDownBox
                placeholder="Поиск Договора..."
                :input-attr="{class: 'input-autocomplit'}"
                id="DxDropDownBox"
                active-state-enabled="false"
                :accept-custom-value="true"
                :is-valid="isValid"
                :buttons="[]"
                :opened="opened"
                label-mode="labelMode"

                :openOnFieldClick="false"
                @input="onInput"
                ref="myDropDownBox"
                :valid="true"
                :validation-status="validationStatus"
                :validation-errors="validationErrors"
                :dropDownOptions="dropDownOptions"
              >
                <DxDataGrid
                  :height=320
                  ref="dataGrid"
                  :row-alternation-enabled="true"
                  :show-borders="true"
                  :selection="{ mode: 'single' }"
                  :allow-column-resizing="true"
                  column-resizing-mode="widget"
                  :showColumnLines="true"
                  @rowDblClick="onOpenClick"
                  id="contract-grid"
                  class="contract-grid"
                  @row-prepared="onRowPrepared"
                  :data-source="dataSource"

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
                    class="filter-bar-button"
                    id="allButton"
                    text="Везде [7]"
                    styling-mode="contained"
                    @click="onClick($event)"
                    :type="searchData.buttons.all.options.type"
                    :disabled="searchData.buttons.all.options.disable"
                  >
                    <div class="filter-bar-button-content">
                      <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">Везде</div>
                      <div class=".filter-bar-button-content-count"
                           :style=searchData.buttons.all.options.style>
                        {{ searchData.buttons.all.count }}
                      </div>
                    </div>
                  </DxButton>
                  <DxButton
                    class="filter-bar-button"
                    id="numdogButton"
                    text="№ Договора"
                    :type="searchData.buttons.numDog.options.type"
                    styling-mode="contained"
                    @click="onClick($event)"
                    :disabled="searchData.buttons.numDog.options.disable"
                  >
                    <div class="filter-bar-button-content">
                      <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">№ Договора
                      </div>
                      <div class=".filter-bar-button-content-count"
                           :style=searchData.buttons.numDog.options.style>
                        {{ searchData.buttons.numDog.count }}
                      </div>
                    </div>
                  </DxButton>
                  <DxButton
                    class="filter-bar-button"
                    id="numabonButton"
                    :width="120"
                    text="№ Абонента"
                    :type="searchData.buttons.numAbon.options.type"
                    styling-mode="contained"
                    @click="onClick($event)"
                    :disabled="searchData.buttons.numAbon.options.disable"
                  >
                    <div class="filter-bar-button-content">
                      <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">№ Абонента
                      </div>
                      <div class=".filter-bar-button-content-count"
                           :style=searchData.buttons.numAbon.options.style>{{ searchData.buttons.numAbon.count
                        }}
                      </div>
                    </div>
                  </DxButton>
                  <DxButton
                    class="filter-bar-button"
                    id="abonButton"
                    :width="120"
                    text="Абонент"
                    :type="searchData.buttons.nameAbon.options.type"
                    styling-mode="contained"
                    @click="onClick($event)"
                  >
                    <div class="filter-bar-button-content">
                      <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">Абонент</div>
                      <div class=".filter-bar-button-content-count"
                           :style=searchData.buttons.nameAbon.options.style>{{ searchData.buttons.nameAbon.count
                        }}
                      </div>
                    </div>
                  </DxButton>
                  <DxButton
                    :width="120"
                    class="filter-bar-button"
                    id="adressButton"
                    text="Адрес"
                    :type="searchData.buttons.adress.options.type"
                    styling-mode="contained"
                    @click="onClick($event)"
                    :disabled="searchData.buttons.adress.options.disable"
                  >
                    <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">Адрес
                    </div>
                    <div class=".filter-bar-button-content-count"
                         :style=searchData.buttons.adress.options.style>{{ this.searchData.buttons.adress.count }}
                    </div>
                  </DxButton>
                  <DxButton
                    :width="120"
                    class="filter-bar-button"
                    id="innButton"
                    text="ИНН"
                    type="normal"
                    styling-mode="contained"
                    @click="onClick($event)"
                    :disabled="searchData.buttons.inn.options.disable"
                  >
                    <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">ИНН
                    </div>
                    <div class=".filter-bar-button-content-count"
                         style="font-size: 10px; color: gray; text-align: right;">0
                    </div>
                  </DxButton>
                  <DxButton
                    class="filter-bar-button"
                    :width="120"
                    text="КПП"
                    type="normal"
                    styling-mode="contained"
                    @click="onClick($event)"
                    :disabled="searchData.buttons.kpp.options.disable"
                  >
                    <div class=".filter-bar-button-content-text" style="font-size: 14px; height: 14px;">КПП
                    </div>
                    <div class=".filter-bar-button-content-count"
                         style="font-size: 10px; color: gray; text-align: right;">0
                    </div>
                  </DxButton>
                </div>
              </DxDropDownBox>
            </div>
          </div>

        </div>
        <div class="widget-search">
          <img class="widget-search-image" src="../assets/icons8-search.svg" alt="">
          <div class="dx-field">
            <div id="dx-field-value" class="dx-field-value">
              <DxDropDownBox
                placeholder="Поиск ТУ..."
                :input-attr="{class: 'input-autocomplit'}"
                id="DxDropDownBox"
                active-state-enabled="false"
                :accept-custom-value="true"
                :is-valid="isValid"
                :buttons="[]"
                :opened="openedTU"
                label-mode="labelMode"

                :openOnFieldClick="false"
                @input="onFindTU"
                ref="myDropDownBox"
                :valid="true"
                :validation-status="validationStatus"
                :validation-errors="validationErrors"
                :dropDownOptions="dropDownOptions"
              >
                <search-contract-grid :find_text="find_text" ref="searchContractGrid"/>
              </DxDropDownBox>
            </div>
          </div>

        </div>
      </div>
      <div class="row-widget">
        <div class="widget-button">
          <img class="widget-image" src="../assets/contract-losses.svg" alt="">
          <div class="widget-text">ДУиП Договоры услуг и потерь</div>
        </div>
        <div class="widget-search">
          <img class="widget-search-image" src="../assets/icons8-search.svg" alt="">

          <div class="dx-field">
            <div id="dx-field-value" class="dx-field-value">
              <DxDropDownBox
                placeholder="Поиск ДУиП..."
                :input-attr="{class: 'input-autocomplit'}"
                id="DxDropDownBox"
                active-state-enabled="false"
                :accept-custom-value="true"
                :is-valid="isValid"
                :buttons="[]"
                :opened="openedDUiP"
                label-mode="labelMode"
                :openOnFieldClick="false"
                @input="onFindDUiP"
                ref="myDropDownBox"
                :valid="true"
                :validation-status="validationStatus"
                :validation-errors="validationErrors"
                :dropDownOptions="dropDownOptions"
              >
                <div class="s-group">
                  <div class="s-group-h">Объекты:</div>
                  <div class="s-group-body">
                    <div class="s-group-item">
                      <span class="s-group-item-col">Наименование:</span>
                      <span class="s-group-item-val-find">test1</span>
                    </div>
                    <div class="s-group-item">
          <span>
            <span class="s-group-item-col">Наименование:</span>
            <span class="s-group-item-val-find">test1</span>
            <span class="s-group-item-val">23</span>
          </span>
                      <span>
          <span class="s-group-item-col">Назначение сооружения:</span>
          <span class="s-group-item-val-find">test1</span>
          <span>345</span>
            </span>
                    </div>
                  </div>
                </div>
                <div class="s-group">
                  <div class="s-group-h">Договор:</div>
                  <div class="s-group-body">
                    <div class="s-group-item">
          <span>
            <span class="s-group-item-col">Идентификатор Гос.контракта:</span>
            <span class="s-group-item-val-find">test1</span>
             <span>231231231231231543545646</span>
          </span>
                    </div>
                  </div>
                </div>
              </DxDropDownBox>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="row-item">
      <div class="row-widget">
        <div class="widget-button">
          <img class="widget-image" src="../assets/abonents.svg" alt="">
          <div class="widget-text" style="margin-top: 0">Абоненты</div>
        </div>
        <div class="widget-search">
          <img class="widget-search-image" src="../assets/icons8-search.svg" alt="">
          <div class="dx-field">
            <div id="dx-field-value" class="dx-field-value">
              <DxDropDownBox
                placeholder="Поиск Абонента..."
                :input-attr="{class: 'input-autocomplit'}"
                id="DxDropDownBox"
                active-state-enabled="false"
                :accept-custom-value="true"
                :is-valid="isValid"
                :buttons="[]"
                :opened="openedAbon"
                label-mode="labelMode"
                :openOnFieldClick="false"
                @input="onFindAbon"
                ref="myDropDownBox"
                :valid="true"
                :validation-status="validationStatus"
                :validation-errors="validationErrors"
                :dropDownOptions="dropDownOptions"
              >
                <div class="s-group">
                  <div class="s-group-h">Объекты:</div>
                  <div class="s-group-body">
                    <div class="s-group-item">
                      <span class="s-group-item-col">Наименование:</span>
                      <span class="s-group-item-val-find">test1</span>
                    </div>
                    <div class="s-group-item">
          <span>
            <span class="s-group-item-col">Наименование:</span>
            <span class="s-group-item-val-find">test1</span>
            <span class="s-group-item-val">23</span>
          </span>
                      <span>
          <span class="s-group-item-col">Назначение сооружения:</span>
          <span class="s-group-item-val-find">test1</span>
          <span>345</span>
            </span>
                    </div>
                  </div>
                </div>
                <div class="s-group">
                  <div class="s-group-h">Договор:</div>
                  <div class="s-group-body">
                    <div class="s-group-item">
          <span>
            <span class="s-group-item-col">Идентификатор Гос.контракта:</span>
            <span class="s-group-item-val-find">test1</span>
             <span>231231231231231543545646</span>
          </span>
                    </div>
                  </div>
                </div>
              </DxDropDownBox>
            </div>
          </div>
        </div>

      </div>
      <div class="row-widget">
        <div class="widget-button">
          <img class="widget-image" src="../assets/user-card.png" alt="">
          <div class="widget-text" style="margin-top: 0px">Неплательщики</div>
        </div>
        <div class="widget-search">
          <img class="widget-search-image" src="../assets/icons8-search.svg" alt="">
          <div class="dx-field">
            <div id="dx-field-value" class="dx-field-value">
              <DxDropDownBox
                placeholder="Поиск неплатель..."
                :input-attr="{class: 'input-autocomplit'}"
                id="DxDropDownBox"
                active-state-enabled="false"
                :accept-custom-value="true"
                :is-valid="isValid"
                :buttons="[]"
                :opened="openedNePlat"
                label-mode="labelMode"
                :openOnFieldClick="false"
                @input="onFindNePlat"
                ref="myDropDownBox"
                :valid="true"
                :validation-status="validationStatus"
                :validation-errors="validationErrors"
                :dropDownOptions="dropDownOptions"
              >
                <div class="s-group">
                  <div class="s-group-h">Объекты:</div>
                  <div class="s-group-body">
                    <div class="s-group-item">
                      <span class="s-group-item-col">Наименование:</span>
                      <span class="s-group-item-val-find">test1</span>
                    </div>
                    <div class="s-group-item">
          <span>
            <span class="s-group-item-col">Наименование:</span>
            <span class="s-group-item-val-find">test1</span>
            <span class="s-group-item-val">23</span>
          </span>
                      <span>
          <span class="s-group-item-col">Назначение сооружения:</span>
          <span class="s-group-item-val-find">test1</span>
          <span>345</span>
            </span>
                    </div>
                  </div>
                </div>
                <div class="s-group">
                  <div class="s-group-h">Договор:</div>
                  <div class="s-group-body">
                    <div class="s-group-item">
          <span>
            <span class="s-group-item-col">Идентификатор Гос.контракта:</span>
            <span class="s-group-item-val-find">test1</span>
             <span>231231231231231543545646</span>
          </span>
                    </div>
                  </div>
                </div>
              </DxDropDownBox>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

import {DxDropDownBox} from 'devextreme-vue/drop-down-box';

import {
  DxDataGrid,
  DxColumn,
  DxScrolling,
  DxPaging,
  DxPager
} from 'devextreme-vue/data-grid';
import DxButton from "devextreme-vue/button";
import contracts from "@/data/contract.json"
import SearchContractGrid from "@/components/search/search-contract-grid.vue";


// getMainMenuHeight();
export default {
  name: "home-start",
  components: {
    SearchContractGrid,
    DxDropDownBox,
    DxDataGrid,
    DxColumn,
    DxButton,
    DxScrolling,
    DxPaging,
    DxPager
  },
  setup() {
    const dataSource = contracts;
    return {
      dataSource,
    };
  },
  data() {
    return {
      find_text: '',
      firstName: '',
      lastName: '',
      state: '',
      currentClient: '',
      fullInfo: '',

      inputAttr: {class: 'input-autocomplit'},

      validationStatus: "valid",
      validationErrors: [],
      isValid: true,
      opened: false,
      openedObj: false,
      openedTU: false,
      openedDUiP: false,
      openedAbon: false,
      openedNePlat: false,
      dropDownOptions: {width: '1500px'},
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

    onClick(e) {
      this.findButtonOptions(e.component.elementAttr.id)
      this.searchData.checkedButtonID = e.component.elementAttr.id
      this.findDog()
      console.log(e.component.elementAttr.id)
    },
    updateEmployeeInfo() {
      let fullInfo = '';
      fullInfo += `${this.firstName || ''} ${this.lastName || ''}`.trim();
      fullInfo += (fullInfo && this.position) ? `, ${this.position}` : this.position || '';
      fullInfo += (fullInfo && this.state) ? `, ${this.state}` : this.state || '';
      fullInfo += (fullInfo && this.currentClient) ? `, ${this.currentClient}` : this.currentClient || '';
      this.fullInfo = fullInfo;
    },
    findDog() {

      const contractsDataGrid = this.$refs['dataGrid'].instance;
      this.searchData.buttons.all.count = 0
      this.searchData.buttons.numAbon.count = 0
      this.searchData.buttons.numDog.count = 0
      this.searchData.buttons.nameAbon.count = 0
      this.searchData.buttons.adress.count = 0
      this.searchData.buttons.inn.count = 0
      this.searchData.buttons.kpp.count = 0
      this.searchData.filterAll = contracts.filter(item => {
          let find = false
          if (item.NDOG.toString().toUpperCase().includes(this.searchData.find_text.toUpperCase())) {
            this.searchData.buttons.numDog.count = this.searchData.buttons.numDog.count + 1;
            find = true
          }
          if (item.NUMP.toString().toUpperCase().includes(this.searchData.find_text.toUpperCase())) {
            this.searchData.buttons.numAbon.count = this.searchData.buttons.numAbon.count + 1;
            find = true
          }
          if (item.NAME.toString().toUpperCase().includes(this.searchData.find_text.toUpperCase())) {
            this.searchData.buttons.nameAbon.count = this.searchData.buttons.nameAbon.count + 1;
            find = true
          }
          if (item.ADRESSU.toString().toUpperCase().includes(this.searchData.find_text.toUpperCase())) {
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
          if (item.NDOG.toString().includes(this.searchData.find_text)) {
            find = true
          }
          return find
        })
      }
      if (this.searchData.checkedButtonID === 'numabonButton') {
        this.dataSource = this.searchData.filterAll.filter(item => {
          let find = false
          if (item.NUMP.toString().includes(this.searchData.find_text)) {
            find = true
          }
          return find
        })
      }
      if (this.searchData.checkedButtonID === 'abonButton') {
        this.dataSource = this.searchData.filterAll.filter(item => {
          let find = false
          if (item.NAME.toString().toUpperCase().includes(this.searchData.find_text.toUpperCase())) {
            find = true
          }
          return find
        })
      }
      if (this.searchData.checkedButtonID === 'adressButton') {
        this.dataSource = this.searchData.filterAll.filter(item => {
          let find = false
          if (item.ADRESSU.toString().toUpperCase().includes(this.searchData.find_text.toUpperCase())) {
            find = true
          }
          return find
        })
      }
      // this.searchData.buttons.all.count = this.searchData.filterAll.length
      contractsDataGrid.option("dataSource", this.dataSource);
    },
    onInput(e) {

      if (e.event.currentTarget.value.length > 2) {
        this.searchData.find_text = e.event.currentTarget.value;
        this.findDog(e.event.currentTarget.value);
        this.opened = false;
        this.opened = true;
      } else {
        this.searchData.find_text = '';
        this.opened = false;
      }

    },

    onFindObj(e) {
      this.openedObj = (e.event.currentTarget.value.length > 4)

    },
    onFindTU(e) {
      this.find_text = e.event.currentTarget.value
      this.openedTU = (e.event.currentTarget.value.length > 4)
      if (this.openedTU) {
        const searchContractGrid = this.$refs['searchContractGrid'];
        searchContractGrid.findDog();
      }

    },
    onFindDUiP(e) {
      this.openedDUiP = (e.event.currentTarget.value.length > 4)
    },
    onFindAbon(e) {
      this.openedAbon = (e.event.currentTarget.value.length > 4)
    },
    onFindNePlat(e) {
      this.openedNePlat = (e.event.currentTarget.value.length > 4)
    }
  },

}
</script>


<style lang="scss">
.dx-button-has-text .dx-button-content {
  padding-top: 12px;
  padding-left: 6px;
}

.dx-datagrid .dx-row > td {
  padding: 2px;
}

.dx-datagrid .dx-row > td {
  font-size: 12px;
}

.dx-cell-focus-disabled {
  height: 30px;
  padding-top: 0 !important;
  padding-left: 7px !important;
  padding-bottom: 0 !important;
}

.filter-bar-button {
  margin-right: 2px;
}

.contract-grid {
  width: 100%;
//height: calc(100% - 100px); margin: 2px; border-top-style: solid; border-top-color: #ededed; border-width: 0.5px;
}

.rows-container {
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .row-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 50px;

    .row-widget {
      margin-right: 50px;
      margin-left: 50px;

      .widget-button {

        border-color: coral;
        border-style: solid;
        border-width: 1px;
        border-radius: 5px;
        height: 188px;
        width: 188px;
        padding: 20px;

        .widget-image {
          width: 90%;
        }

        .widget-text {
          margin-top: -10px;
        }
      }

      .widget-search {
        display: flex;
        flex-direction: row;
        margin-top: 5px;
        padding-top: 2px;
        padding-bottom: 5px;
        background-color: coral;
        border-radius: 5px;
        color: white;
        padding-left: 5px;
        width: 188px;

        .widget-search-image {
          height: 20px;
        }

        .dx-field {
          padding-left: 10px;
          padding-right: 10px;
          width: 100%;

          #dx-field-value {
            width: 100%;

            #DxAutocomplete {
              .dx-dropdowneditor-input-wrapper {
                .dx-texteditor-container {
                  .dx-texteditor-input-container {
                    .input-autocomplit {
                      padding: 0 !important;
                      color: white !important;
                    }

                    .dx-placeholder::before {
                      padding: 0;
                      color: #e7e7e8;
                      font-weight: lighter;
                      font-size: 14px;
                    }
                  }
                }
              }
            }

            #DxDropDownBox {
              height: 22px;

              .dx-dropdowneditor-input-wrapper {
                .dx-texteditor-container {
                  .dx-texteditor-input-container {
                    .input-autocomplit {
                      padding: 0 !important;
                      color: white !important;

                    }

                    .dx-placeholder::before {
                      padding: 0;
                      color: #e7e7e8;
                      font-weight: lighter;
                      font-size: 14px;
                    }
                  }

                }
              }
            }

            .dx-texteditor.dx-editor-filled::after {
              border-bottom: 1px solid #ffffff;
            }

            .dx-texteditor.dx-editor-filled.dx-state-hover::after {
              border-bottom: 1px solid #ffffff;
            }

            .dx-texteditor.dx-state-focused::before {
              border-bottom: 1px solid #ffffff;
            }

          }
        }
      }
    }
  }

}

//#contract-grid {
//  height: 320px;
//  max-height: 320px
//}

//dx-datagrid dx-gridbase-container dx-datagrid-borders
.s-group {
  margin-bottom: 14px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  border-color: rgba(255, 127, 80, 0.56);

  .s-group-h {
    background-color: #ef8d69;
    margin-top: -22px;
    padding-top: 2px;
    padding-left: 10px;
    border-radius: 5px;
    color: white;
    width: 90px;
    height: 22px;
  }

  .s-group-body {
    .s-group-item {
      padding-top: 5px;

      .s-group-item-col {
        color: #48535e;
        background-color: floralwhite;
        padding-right: 5px;
        padding-left: 15px;
      }

      .s-group-item-val {

      }

      .s-group-item-val-find {
        background-color: yellow;
      }
    }
  }


}

.s-group-footer {
  color: #647e32;
  background-color: white;
  margin-top: -23px;
  margin-left: 130px;
  padding-left: 2px;
  width: 134px;
  border-radius: 5px;
  font-size: 12px;
}
</style>
