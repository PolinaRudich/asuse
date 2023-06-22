<template>
  <div class="top-container">
    <div id="main-button-container">
      <dx-button id="main-button"
                 icon="assets\logo-black64.png"
                 @click="onHomeClick"
      />
    </div>
    <dx-toolbar
      class="header-toolbar"
      :multiline="true"
    >
      <dx-item
        location="before"
      >
        <dx-menu>
          <dxItem class="top-menu"
                  icon="assets\hands-min.svg"
                  text="Договор"

          >
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
              @click="menuItemClick"

            >
            </dxItem>
          </dxItem>
        </dx-menu>

      </dx-item>
      <dx-item
        location="before"
      >

        <dx-menu>
          <dxItem
            icon="assets\lap2-svg.svg"
            text="Эл. Сети"
          >
          </dxItem>
        </dx-menu>

      </dx-item>
      <dx-item
        location="before"
      >

        <dx-menu>
          <dxItem
            icon="assets\pipes-svg.svg"
            text="Теп. Сети"
          >
          </dxItem>
        </dx-menu>

      </dx-item>
      <dx-item
        location="before"
      >

        <dx-menu>
          <dxItem
            icon="assets\ruble_svg_thin.svg"
            text="Финансы"
          >
            <dxItem
              text="Журналы"
              icon="assets\book.svg"
              @click="menuItemClick"
            >
            </dxItem>
            <dxItem
              text="Оплаты"
              icon="assets\pay2.png"
              @click="menuItemClick"
            >
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
      <dx-item
        location="before"
      >

        <dx-menu>
          <dxItem
            text="НСИ"
          >

          </dxItem>
        </dx-menu>

      </dx-item>
      <dx-item
        location="before"
      >
        <dx-menu>
          <dxItem
            text="Сервис"
          >
            <dxItem
              text="Администрирование"
              app-form="tn-pgu"
              @click="menuItemClick"
            >
            </dxItem>
            <dxItem
              text="Итеграции"
              app-form="tn-bp"
              @click="menuItemClick"
            >
            </dxItem>
            <dxItem
              text="Пользователи"
              app-form="tn-gt"
              @click="menuItemClick"
            >
            </dxItem>
            <dxItem
              text="Журналы исключений"
              app-form="tn-ku"
              @click="menuItemClick"
            >
            </dxItem>
            <dxItem
              text="Настройки форм"
              @click="menuItemClick"
            >
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

    <div id="user-button-container">
      <dx-toolbar class="header-toolbar" :multiline="false">
        <dx-item
          location="before"
        >
          <dx-menu id="user-menu">
            <dxItem
              :text="user_fio"
              icon="assets\user2.svg"
            >
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
              <dxItem
                text="KPI"
                @click="menuItemClick"
                icon="assets\kpi.png"
              >
              </dxItem>

            </dxItem>
          </dx-menu>

        </dx-item>
      </dx-toolbar>
    </div>
  </div>
</template>

<script>

import DxButton from "devextreme-vue/button";
import DxMenu from 'devextreme-vue/menu';
import DxToolbar, {DxItem} from "devextreme-vue/toolbar";
import auth from "../auth";
import {useRouter, useRoute} from 'vue-router';
// import {ref} from 'vue';
import packageFile from '../../package.json'


export default {

  props: {
    title: String,
    logOutFunc: Function
  },


  data() {
    return {
      version: 'Версия: ' + packageFile.version,
      user_fio: "Иванова Е.А."
    }
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    //const email = "test";
    //auth.getUser().then((e) => email.value = e.data.email);

    function onHomeClick() {
      router.push(
        {
          path: "/home/uuu",
          query: {redirect: route.path}
        }
      );
    }

    function menuItemClick(event) {
      if (event.itemData.form === 'contracts-view') {
        router.push(
          {
            path: "/contracts-view",
            query: {redirect: route.path}
          }
        );
      }
      if (event.itemData.appForm === 'settings-contract') {
        window.open('/#/settings-contract/');
      }
    }

    function onLogoutClick() {
      auth.logOut();
      router.push({
        path: "/login-form",
        query: {redirect: route.path}
      });
    }

    return {
      //email,
      onLogoutClick,
      onHomeClick,
      menuItemClick
    };
  },
  components: {
    DxMenu,
    DxToolbar,
    DxItem,
    DxButton
  }
};
</script>

<style lang="scss">
.dx-item-content .dx-menu-item-content {
  padding-top: 0;
  padding-bottom: 0;

}

.dx-toolbar-button .dx-menu .dx-menu-item {
//   height: 50px;
}

.dx-menu-base .dx-icon {
  height: 40px;
  width: 40px;
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
          font-family: Roboto, RobotoFallback, "Noto Kufi Arabic", Helvetica, Arial, sans-serif;
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
