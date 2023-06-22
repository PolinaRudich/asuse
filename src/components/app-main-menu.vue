<template>
  <div
    id="ai-search-all-panel"
    class="ai-search-all-panel"
    v-if="dxDropDownBoxOptions.opened"
  >
    <div class="v-tool-bar">
      <DxButton icon="assets\arrow-back-outline.svg" @click="backClick" />
      <DxButton icon="assets\close-outline.svg" @click="closeClick" />
    </div>
    <home-search-all-panel
      :find_text="find_text"
      :widget="widget"
    ></home-search-all-panel>
  </div>
  <div class="top-container">
    <div id="main-button-container">
      <dx-button
        id="main-button"
        icon="assets\logo-black64.png"
        @click="onHomeClick"
      />
    </div>
    <dx-toolbar class="header-toolbar-button" :multiline="true">
      <dx-item location="before">
        <dx-menu>
          <dxItem class="top-menu" text="Договор">
            <dxItem
              text="Журнал договоров"
              icon="assets\hands-min.svg"
              form="contracts-view"
              @click="menuItemClick"
            >
            </dxItem>
            <dxItem
              text="Журнал абонентов"
              icon="assets\abonents.svg"
              form="contragents-view"
              @click="menuItemClick"
            >
            </dxItem>
          </dxItem>
        </dx-menu>
      </dx-item>
      <dx-item location="before">
        <dx-menu>
          <dxItem text="Эл. Сети"> </dxItem>
        </dx-menu>
      </dx-item>
      <dx-item location="before">
        <dx-menu>
          <dxItem text="Теп. Сети"> </dxItem>
        </dx-menu>
      </dx-item>
      <dx-item location="before">
        <dx-menu>
          <dxItem text="Финансы">
            <dxItem
              text="Журналы"
              icon="assets\book.svg"
              @click="menuItemClick"
            >
            </dxItem>
            <dxItem text="Оплаты" icon="assets\pay2.png" @click="menuItemClick">
            </dxItem>
            <dxItem
              text="Пени"
              icon="assets\penalties2.png"
              @click="menuItemClick"
            >
            </dxItem>
          </dxItem>
        </dx-menu>
      </dx-item>
      <dx-item location="before">
        <dx-menu>
          <dxItem text="НСИ"> </dxItem>
        </dx-menu>
      </dx-item>
      <dx-item location="before">
        <dx-menu>
          <dxItem text="Сервис">
            <dxItem
              text="Администрирование"
              app-form="tn-pgu"
              @click="menuItemClick"
            >
            </dxItem>
            <dxItem text="Итеграции" app-form="tn-bp" @click="menuItemClick">
            </dxItem>
            <dxItem text="Пользователи" app-form="tn-gt" @click="menuItemClick">
            </dxItem>
            <dxItem
              text="Журналы исключений"
              app-form="tn-ku"
              @click="menuItemClick"
            >
            </dxItem>
            <dxItem text="Настройки форм" @click="menuItemClick">
              <dxItem
                text="Настройки формы - договор"
                app-form="settings-contract"
                @click="menuItemClick"
              >
              </dxItem>
            </dxItem>
          </dxItem>
        </dx-menu>
      </dx-item>
    </dx-toolbar>

    <dx-toolbar class="header-toolbar-search" :multiline="false">
      <dx-item widget="dxTextBox" :options="dxTextBoxOptions"> </dx-item>
    </dx-toolbar>

    <dx-toolbar class="header-toolbar-user" :multiline="false">
      <dx-item location="before">
        <dx-menu id="user-menu">
          <dxItem :text="user_fio" icon="assets\user2.svg">
            <dxItem
              text="Задачи"
              @click="menuItemClick"
              icon="assets\tasks4.png"
            >
            </dxItem>
            <dxItem
              text="Карточка"
              @click="menuItemClick"
              icon="assets\user-card3.png"
            >
            </dxItem>
            <dxItem text="KPI" @click="menuItemClick" icon="assets\kpi.png">
            </dxItem>
          </dxItem>
        </dx-menu>
      </dx-item>
    </dx-toolbar>
  </div>
</template>

<script>
// function startFunc() {
//   const elem = document.getElementById("ai-search-all-panel");
//   elem.stopPropagation();
// }

import DxButton from "devextreme-vue/button";
import DxMenu from "devextreme-vue/menu";
import DxToolbar, { DxItem } from "devextreme-vue/toolbar";
import auth from "../auth";
import { useRouter, useRoute } from "vue-router";

import packageFile from "../../package.json";

import HomeSearchAllPanel from "@/components/search-all/search-all-panel.vue";

export default {
  props: {
    title: String,
    logOutFunc: Function,
  },
  mounted() {
    //startFunc();
  },
  methods: {
    open() {
      return this.opened;
    },
    onInput(e) {
      this.find_text = e.event.currentTarget.value;
      if (e.event.currentTarget.value.length > 4) {
        this.dxDropDownBoxOptions.opened = true;
      } else {
        this.dxDropDownBoxOptions.opened = false;
      }
    },
    backClick() {
      this.widget = !this.widget;
    },
    closeClick() {
      this.dxDropDownBoxOptions.opened = false;
    },
  },

  data() {
    return {
      version: "Версия: " + packageFile.version,
      user_fio: "Иванова Е.А.",
      find_text: "Иванова Е.А.",
      opened: false,
      dxTextBoxOptions: {
        placeholder: "Поиск Договора...",
        width: 400,
        onInput: this.onInput,
        buttons: [
          {
            name: "find",
            location: "before",
            options: { icon: "/assets/icons8-search.svg" },
          },
        ],
      },
      dxDropDownBoxOptions: {
        opened: false,
      },
      find_button: {
        icon: "favorite",
      },
      widget: false,
    };
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    function onHomeClick() {
      router.push({
        path: "/home/uuu",
        query: { redirect: route.path },
      });
    }

    function menuItemClick(event) {
      if (event.itemData.form === "contracts-view") {
        router.push({
          path: "/contracts-view",
          query: { redirect: route.path },
        });
      }
      if (event.itemData.form === "contragents-view") {
        router.push({
          path: "/contragents-view",
          query: { redirect: route.path },
        });
      }
      if (event.itemData.appForm === "settings-contract") {
        window.open("/#/settings-contract/");
      }
    }

    function onLogoutClick() {
      auth.logOut();
      router.push({
        path: "/login-form",
        query: { redirect: route.path },
      });
    }

    return {
      //email,
      onLogoutClick,
      onHomeClick,
      menuItemClick,
    };
  },
  components: {
    HomeSearchAllPanel,
    DxMenu,
    DxToolbar,
    DxItem,
    DxButton,
  },
};
</script>

<style lang="scss">
.ai-search-all-panel {
  border-style: solid;
  border-width: 0.5px;
  border-color: lightgray;
  border-radius: 5px;
  background-color: white;
  position: absolute;
  top: 72px;
  left: calc(100% - 1000px);
  width: 900px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .v-tool-bar {
    border-width: 0.5px;
    border-bottom-style: solid;
    border-color: lightgray;
    margin-top: 16px;
    padding: 5px;
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.header-toolbar-search {
  padding-bottom: 8px;
  width: 410px;
  background-color: #ffffffff;
}

.header-toolbar-user {
  padding-bottom: 8px;
  background-color: #ffffffff;
  width: 350px;
}

.header-toolbar-button {
  margin-left: 10px;

  background-color: #ffffffff;
  .dx-toolbar-button .dx-menu .dx-menu-item {
    color: #4b4a4a;
    display: flex;
    align-items: center;
  }
}

.dx-item-content .dx-menu-item-content {
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  align-items: center;
}

.dx-menu-base .dx-icon {
  height: 30px;
  width: 30px;
}

.top-container {
  display: flex;
  flex-direction: row;

  #main-button-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60px;
    background-color: #ffffffff;

    #main-button {
      width: 64px;
      height: 64px;

      .dx-button-content {
        width: 64px;

        .dx-icon {
          width: 54px;
          height: 54px;
        }
      }
    }
  }

  #user-button-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 200px;
    background-color: #ffffffff;

    #user-button {
      margin-right: 4px;
      height: 54px;

      .dx-button-content {
        font-size: 14px;

        .dx-button-text {
          text-transform: none;
          font-family: Roboto, RobotoFallback, "Noto Kufi Arabic", Helvetica,
            Arial, sans-serif;
          font-weight: 400;
        }

        .dx-icon {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>
