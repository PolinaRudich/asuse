<template>

  <div class="search-rows-container">
    <div class="row-item">
      <div class="row-widget">
        <div class="widget-button" v-if="showedControl==='search-all-component'">

          <search-all-component :data_search_result="data_search_result" :parent="viewBox"
                                @segmentClick="segmentClick" class="search-all-container"/>
        </div>
        <div class="widget-button" v-else>

          <search-contract-grid :find_text="find_text" ref="contract_grid_view"/>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

import contractList from "../../data/contract-list.json"
import SearchContractGrid from "@/components/search/search-contract-grid.vue";
import service from '../../data/data';
import ArrayStore from 'devextreme/data/array_store';
import SearchAllComponent from "@/components/search-all/search-all-component.vue";

export default {
  name: "home-search-all-panel",
  props: {
    find_text: {
      type: String,
      default: ''
    }
  },
  components: {
    SearchAllComponent,
    SearchContractGrid
  },
  mounted() {
    this.findAll(this.$props.find_text)
  },
  setup() {
    const dataSource = contractList;
    return {
      dataSource,
    };
  },
  data() {
    return {
      showedControl: 'search-all-component',
      viewBox: {
        size: {
          width: 800,
          height: 800
        }
      },
      data_search_result: [],
      flowNodesDataSource: new ArrayStore({
        key: 'id',
        data: service.getFlowNodes(),
      }),
      flowEdgesDataSource: new ArrayStore({
        key: 'id',
        data: service.getFlowEdges(),
      }),
      diagram_toolbox: {visibility: 'disabled'},
      view_tool_bar: {visible: false},
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
      }
    }
  },

  methods: {
    segmentClick: function (index) {
      switch (index) {
        case 0:
          this.showedControl = 'search-contract-grid'
          break;
        case 1:
          this.showedControl = 'search-contract-grid'
          break;
        default:
          break;
      }
      this.$nextTick(
        function () {
          const searchContractGrid = this.$refs['contract_grid_view'];
          searchContractGrid.findDog(this.find_text);
        }.bind(this))
    },
    styleExpr(obj) {
      if (obj.name === "all") {
        return {"fill": "#98c0ef", "stroke": "#ffffff", "height": '200px'}
      }
      return {"fill": "#8cb43e", "stroke": "#ffffff"};
    },
    textStyleExpr(obj) {
      if (obj.name === 'all') {
        return {'font-weight': 'bold', 'fill': '#000'}
      }
      return {'font-weight': 'bold', 'text-decoration': 'underline', 'fill': '#fff'}
    },

    findAll(text) {
      this.data_search_result = [];
      this.data_search_result.push(this.findDog(text))
      this.data_search_result.push(this.findContragent(text))
      this.data_search_result.push(this.findObj(text))
      this.data_search_result.push(this.findAdr(text))
      this.data_search_result.push(this.findTuT(text))
      this.data_search_result.push(this.findTuE(text))
      this.data_search_result.push(this.findPuT(text))
      this.data_search_result.push(this.findPuE(text))
      this.data_search_result.push(this.findPkT(text))
      this.data_search_result.push(this.findPkE(text))
      this.data_search_result.push(this.findType11(text))
      this.data_search_result.push(this.findType12(text))
    },

    findDog(text) {
      switch (text.length) {
        case 4:
          return {index: 1, text: 'договоры', count: 12}
        case 5:
          return {index: 1, text: 'договоры', count: 10}
        case 6:
          return {index: 1, text: 'договоры', count: 3}
        case 7:
          return {index: 1, text: 'договоры', count: 1}
        default:
          return {index: 1, text: 'договоры', count: 0}
      }

    },
    findContragent(text) {
      switch (text.length) {
        case 4:
          return {index: 2, text: 'контрагенты', count: 7}
        case 5:
          return {index: 2, text: 'контрагенты', count: 5}
        case 6:
          return {index: 2, text: 'контрагенты', count: 2}
        case 7:
          return {index: 2, text: 'контрагенты', count: 1}
        case 8:
          return {index: 2, text: 'контрагенты', count: 1}
        case 9:
          return {index: 2, text: 'контрагенты', count: 1}
        default:
          return {index: 2, text: 'контрагенты', count: 0}
      }
    },
    findObj(text) {
      switch (text.length) {
        case 4:
          return {index: 0, text: 'объекты', count: 71}
        case 5:
          return {index: 0, text: 'объекты', count: 22}
        case 6:
          return {index: 0, text: 'объекты', count: 1}
        default:
          return {index: 0, text: 'объекты', count: 0}
      }
    },
    findAdr(text) {
      switch (text.length) {
        case 4:
          return {index: 3, text: 'адреса', count: 431}
        case 5:
          return {index: 3, text: 'адреса', count: 303}
        case 6:
          return {index: 3, text: 'адреса', count: 77}
        case 7:
          return {index: 3, text: 'адреса', count: 5}
        case 8:
          return {index: 3, text: 'адреса', count: 1}
        default:
          return {index: 3, text: 'адреса', count: 0}
      }
    },
    findTuT(text) {
      switch (text.length) {
        case 4:
          return {index: 4, text: 'точки учета тепло', count: 109}
        default:
          return {index: 4, text: 'точки учета тепло', count: 0}
      }
    },
    findTuE(text) {
      switch (text.length) {
        case 4:
          return {index: 5, text: 'точки учета эл.', count: 4}
        default:
          return {index: 5, text: 'точки учета эл.', count: 0}
      }
    },
    findPuT(text) {
      switch (text.length) {
        case 4:
          return {index: 6, text: 'приборы учета тепло', count: 2}
        case 5:
          return {index: 6, text: 'приборы учета тепло', count: 1}
        default:
          return {index: 6, text: 'приборы учета тепло', count: 0}
      }
    },
    findPuE(text) {
      switch (text.length) {
        case 4:
          return {index: 7, text: 'приборы учета эл.', count: 36}
        case 5:
          return {index: 7, text: 'приборы учета эл.', count: 21}
        case 6:
          return {index: 7, text: 'приборы учета эл.', count: 2}
        default:
          return {index: 7, text: 'приборы учета эл.', count: 0}
      }

    },
    findPkT(text) {
      switch (text.length) {
        case 4:
          return {index: 8, text: 'показания тепло', count: 5}
        default:
          return {index: 8, text: 'показания тепло', count: 0}
      }
    },
    findPkE(text) {
      switch (text.length) {
        case 4:
          return {index: 9, text: 'показания эл.', count: 1}
        default:
          return {index: 9, text: 'показания эл.', count: 0}
      }
    },
    findType11(text) {
      switch (text.length) {
        case 4:
          return {index: 10, text: 'type 11', count: 3}
        default:
          return {index: 10, text: 'type 11', count: 0}
      }

    },
    findType12(text) {
      switch (text.length) {
        case 4:
          return {index: 11, text: 'type 12', count: 1045}
        default:
          return {index: 11, text: 'type 12', count: 0}
      }
    },

    onFindObj(e) {
      this.openedObj = (e.event.currentTarget.value.length > 4)

    },
    onFindTU(e) {
      this.$props.find_text = e.event.currentTarget.value
      if (e.event.currentTarget.value.length > 3) {
        this.openedTU = false;
        this.openedTU = true;
        const searchContractGrid = this.$refs['searchTUGrid'];
        searchContractGrid.findDog(e.event.currentTarget.value);
      } else {
        this.openedTU = false;
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
.search-all-container {

  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  min-width: 900px;

  .ai-search-line {
    width: 70%;
    height: 70%;
  }

  .col {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin-right: 1px;
  }

  .col-center {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 1px;
  }

}

.ai-search-contract-grid-view {
  height: 100%;

  #contract-grid {
    height: 100% !important;
  }

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
  height: calc(100% - 30px) !important;
}

.search-rows-container {
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


        height: 588px;
        width: 988px;
        padding: 20px;


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
        width: 988px;

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




