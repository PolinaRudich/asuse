<template>
  <div class="rows-container">
    <div class="rows">
      <div class="row-item">
        <div class="row-widget">
          <div class="widget-button">
            <img
              class="widget-image"
              src="../assets/contract-doc-l0002.svg"
              alt=""
            />
            <div class="widget-text" style="margin-top: 0px">Договор</div>
          </div>
          <div class="widget-search">
            <img
              class="widget-search-image"
              src="../assets/icons8-search.svg"
              alt=""
            />
            <div class="dx-field">
              <div id="dx-field-value" class="dx-field-value">
                <DxDropDownBox
                  placeholder="Поиск Договора..."
                  :input-attr="{ class: 'input-autocomplit' }"
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
                  <search-contract-grid
                    :find_text="find_text"
                    ref="searchContract"
                  />
                </DxDropDownBox>
              </div>
            </div>
          </div>
          <div class="widget-search">
            <img
              class="widget-search-image"
              src="../assets/icons8-search.svg"
              alt=""
            />
            <div class="dx-field">
              <div id="dx-field-value" class="dx-field-value">
                <DxDropDownBox
                  placeholder="Поиск ТУ..."
                  :input-attr="{ class: 'input-autocomplit' }"
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
                  <search-contract-grid
                    :find_text="find_text"
                    ref="searchTUGrid"
                  />
                </DxDropDownBox>
              </div>
            </div>
          </div>
        </div>
        <div class="row-widget">
          <div class="widget-button">
            <img
              class="widget-image"
              src="../assets/contract-losses.svg"
              alt=""
            />
            <div class="widget-text">ДУиП Договоры услуг и потерь</div>
          </div>
          <div class="widget-search">
            <img
              class="widget-search-image"
              src="../assets/icons8-search.svg"
              alt=""
            />

            <div class="dx-field">
              <div id="dx-field-value" class="dx-field-value">
                <DxDropDownBox
                  placeholder="Поиск ДУиП..."
                  :input-attr="{ class: 'input-autocomplit' }"
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
                          <span class="s-group-item-col"
                            >Назначение сооружения:</span
                          >
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
                          <span class="s-group-item-col"
                            >Идентификатор Гос.контракта:</span
                          >
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
            <img class="widget-image" src="../assets/abonents.svg" alt="" />
            <div class="widget-text" style="margin-top: 0">Абоненты</div>
          </div>
          <div class="widget-search">
            <img
              class="widget-search-image"
              src="../assets/icons8-search.svg"
              alt=""
            />
            <div class="dx-field">
              <div id="dx-field-value" class="dx-field-value">
                <DxDropDownBox
                  placeholder="Поиск Абонента..."
                  :input-attr="{ class: 'input-autocomplit' }"
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
                          <span class="s-group-item-col"
                            >Назначение сооружения:</span
                          >
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
                          <span class="s-group-item-col"
                            >Идентификатор Гос.контракта:</span
                          >
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
            <img class="widget-image" src="../assets/user-card.png" alt="" />
            <div class="widget-text" style="margin-top: 0px">Неплательщики</div>
          </div>
          <div class="widget-search">
            <img
              class="widget-search-image"
              src="../assets/icons8-search.svg"
              alt=""
            />
            <div class="dx-field">
              <div id="dx-field-value" class="dx-field-value">
                <DxDropDownBox
                  placeholder="Поиск неплатель..."
                  :input-attr="{ class: 'input-autocomplit' }"
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
                          <span class="s-group-item-col"
                            >Назначение сооружения:</span
                          >
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
                          <span class="s-group-item-col"
                            >Идентификатор Гос.контракта:</span
                          >
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
    <div class="ai-background-image-piter"></div>
  </div>
</template>

<script>
import { DxDropDownBox } from "devextreme-vue/drop-down-box";

import contractList from "@/data/contract-list.json";
import SearchContractGrid from "@/components/search/search-contract-grid.vue";

// getMainMenuHeight();
export default {
  name: "home-start",
  components: {
    SearchContractGrid,
    DxDropDownBox,
  },
  setup() {
    const dataSource = contractList;
    return {
      dataSource,
    };
  },
  data() {
    return {
      find_text: "",
      firstName: "",
      lastName: "",
      state: "",
      currentClient: "",
      fullInfo: "",

      inputAttr: { class: "input-autocomplit" },

      validationStatus: "valid",
      validationErrors: [],
      isValid: true,
      opened: false,
      openedObj: false,
      openedTU: false,
      openedDUiP: false,
      openedAbon: false,
      openedNePlat: false,
      dropDownOptions: { width: "1500px" },
      searchData: {
        find_text: "",
        filterAll: [],
        checkedButtonID: "allButton",
        buttons: {
          all: {
            count: 0,
            options: {
              type: "default",
              style: { fontSize: "10px", color: "yellow", textAlign: "right" },
              disable: false,
            },
          },
          numDog: {
            count: 0,
            options: {
              type: "normal",
              style: { fontSize: "10px", color: "gray", textAlign: "right" },
              disable: false,
            },
          },
          numAbon: {
            count: 0,
            options: {
              type: "normal",
              style: { fontSize: "10px", color: "gray", textAlign: "right" },
              disable: false,
            },
          },
          nameAbon: {
            count: 0,
            options: {
              type: "normal",
              style: { fontSize: "10px", color: "gray", textAlign: "right" },
              disable: false,
            },
          },
          adress: {
            count: 0,
            options: {
              type: "normal",
              style: { fontSize: "10px", color: "gray", textAlign: "right" },
              disable: false,
            },
          },
          inn: {
            count: 0,
            options: {
              type: "normal",
              style: { fontSize: "10px", color: "gray", textAlign: "right" },
              disable: true,
            },
          },
          kpp: {
            count: 0,
            options: {
              type: "normal",
              style: { fontSize: "10px", color: "gray", textAlign: "right" },
              disable: true,
            },
          },
        },
      },
    };
  },

  methods: {
    findButtonOptions(id) {
      this.searchData.buttons.all.options.type = "normal";
      this.searchData.buttons.numDog.options.type = "normal";
      this.searchData.buttons.numAbon.options.type = "normal";
      this.searchData.buttons.nameAbon.options.type = "normal";
      this.searchData.buttons.adress.options.type = "normal";

      this.searchData.buttons.all.options.style.color = "gray";
      this.searchData.buttons.numDog.options.style.color = "gray";
      this.searchData.buttons.numAbon.options.style.color = "gray";
      this.searchData.buttons.nameAbon.options.style.color = "gray";
      this.searchData.buttons.adress.options.style.color = "gray";

      switch (id) {
        case "allButton":
          this.searchData.buttons.all.options.type = "default";
          this.searchData.buttons.all.options.style.color = "yellow";
          break;
        case "numdogButton":
          this.searchData.buttons.numDog.options.type = "default";
          this.searchData.buttons.numDog.options.style.color = "yellow";
          break;
        case "numabonButton":
          this.searchData.buttons.numAbon.options.type = "default";
          this.searchData.buttons.numAbon.options.style.color = "yellow";
          break;
        case "abonButton":
          this.searchData.buttons.nameAbon.options.type = "default";
          this.searchData.buttons.nameAbon.options.style.color = "yellow";
          break;
        case "adressButton":
          this.searchData.buttons.adress.options.type = "default";
          this.searchData.buttons.adress.options.style.color = "yellow";
          break;
        default:
          break;
      }
    },

    onClick(e) {
      this.findButtonOptions(e.component.elementAttr.id);
      this.searchData.checkedButtonID = e.component.elementAttr.id;
      this.findDog();
      console.log(e.component.elementAttr.id);
    },
    updateEmployeeInfo() {
      let fullInfo = "";
      fullInfo += `${this.firstName || ""} ${this.lastName || ""}`.trim();
      fullInfo +=
        fullInfo && this.position ? `, ${this.position}` : this.position || "";
      fullInfo += fullInfo && this.state ? `, ${this.state}` : this.state || "";
      fullInfo +=
        fullInfo && this.currentClient
          ? `, ${this.currentClient}`
          : this.currentClient || "";
      this.fullInfo = fullInfo;
    },

    onInput(e) {
      this.find_text = e.event.currentTarget.value;
      if (e.event.currentTarget.value.length > 2) {
        this.opened = false;
        this.opened = true;
        const searchContractGrid = this.$refs["searchContract"];
        searchContractGrid.findDog(e.event.currentTarget.value);
      } else {
        this.opened = false;
      }
    },

    onFindObj(e) {
      this.openedObj = e.event.currentTarget.value.length > 4;
    },
    onFindTU(e) {
      this.find_text = e.event.currentTarget.value;
      if (e.event.currentTarget.value.length > 3) {
        this.openedTU = false;
        this.openedTU = true;
        const searchContractGrid = this.$refs["searchTUGrid"];
        searchContractGrid.findDog(e.event.currentTarget.value);
      } else {
        this.openedTU = false;
      }
    },
    onFindDUiP(e) {
      this.openedDUiP = e.event.currentTarget.value.length > 4;
    },
    onFindAbon(e) {
      this.openedAbon = e.event.currentTarget.value.length > 4;
    },
    onFindNePlat(e) {
      this.openedNePlat = e.event.currentTarget.value.length > 4;
    },
  },
};
</script>

<style lang="scss">
.ai-background-image-piter {
  width: 100%;
  height: 100%;

  background-image: url("../assets/photo_2023-06-02_17-30-19.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
}

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

  .rows {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    .row-item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 50px;

      .row-widget {
        margin-right: 50px;
        margin-left: 50px;

        .widget-button {
          display: flex;
          flex-direction: column;
          align-items: center;
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
            font-family: "Montserrat";
            text-align: center;
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
}

/*#contract-grid {
//  height: 320px;
//  //max-height: 320px
//}
*/
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
