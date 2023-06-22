<template>
  <div id="home-page">
    <div id="home-toolbar" class="toolbar">
      <DxButton
        id="start"
        :class="[(toolbar_selected_button === 'start') ? 'button-selected' : 'button', 'dx-widget', 'dx-button', 'dx-button-mode-outlined', 'dx-button-normal', 'dx-button-has-text']"
        text="Стартовая"
        type="normal"
        styling-mode="outlined"
        @click="onClick($event)"
      />
      <DxButton
        id="search"
        :class="[(toolbar_selected_button === 'search') ? 'button-selected' : 'button', 'dx-widget', 'dx-button', 'dx-button-mode-outlined', 'dx-button-normal', 'dx-button-has-text']"
        text="Поиск везде"
        type="normal"
        styling-mode="outlined"
        @click="onClick($event)"
      />
      <DxButton
        id="opened"
        :class="[(toolbar_selected_button === 'opened') ? 'button-selected' : 'button', 'dx-widget', 'dx-button', 'dx-button-mode-outlined', 'dx-button-normal', 'dx-button-has-text']"
        text="Открытые"
        type="normal"
        styling-mode="outlined"
        @click="onClick($event)"
      />
      <DxButton
        id="favorite"
        :class="[(toolbar_selected_button === 'favorite') ? 'button-selected' : 'button', 'dx-widget', 'dx-button', 'dx-button-mode-outlined', 'dx-button-normal', 'dx-button-has-text']"
        text="Избраное"
        type="normal"
        styling-mode="outlined"
        @click="onClick($event)"
      />
      <DxButton
        id="history"
        :class="[(toolbar_selected_button === 'history') ? 'button-selected' : 'button', 'dx-widget', 'dx-button', 'dx-button-mode-outlined', 'dx-button-normal', 'dx-button-has-text']"
        text="История"
        type="normal"
        styling-mode="outlined"
        @click="onClick($event)"
      />
    </div>
    <div class="home-content">
      <div class="content-h">{{ getHomeH() }}</div>
      <home-start v-if="toolbar_selected_button === 'start'"/>
      <home-search v-if="toolbar_selected_button === 'search'"/>
      <home-opened v-if="toolbar_selected_button === 'opened'"/>
      <home-favorite v-if="toolbar_selected_button === 'favorite'"/>
      <home-history v-if="toolbar_selected_button === 'history'"/>
    </div>
  </div>

</template>
<script>
import DxButton from 'devextreme-vue/button';
import HomeOpened from "@/components/home-opened.vue";
import HomeFavorite from "@/components/home-favorite.vue";
import HomeHistory from "@/components/home-history.vue";
import {onBeforeUnmount, onMounted, reactive} from "vue";
import {subscribe, unsubscribe} from "@/utils/media-query";
import HomeStart from "@/components/home-start.vue";
import HomeSearch from "@/components/home-search.vue";
function getMainMenuHeight() {

  const mainMenu = document.getElementById("main-menu");
  const currentLayout = document.getElementById("current-layout");
  if (mainMenu&&currentLayout) {
    console.log('currentLayout: ' + currentLayout)
    console.log(`'calc(100% - ${mainMenu.clientHeight}px)'`)
    currentLayout.style.height = `calc(100% - ${mainMenu.clientHeight}px)`
    return {
      menuHeight: mainMenu.clientHeight
    }
  } else {
    return {
      menuHeight: 0
    }
  }
}
export default {
  name: "home-page",
  setup () {
    const mainMenuHeight = reactive({getMainMenuHeight: {}});
    mainMenuHeight['getMainMenuHeight'] = getMainMenuHeight();
    console.log('mainMenuHeight.getMainMenuHeight.menuHeight = ' + mainMenuHeight.getMainMenuHeight.menuHeight)

    function screenSizeChanged() {
      mainMenuHeight.getMainMenuHeight = getMainMenuHeight();
      //console.log('screenSizeChanged');
    }

    onMounted(() => {
      console.log('onMounted')
      getMainMenuHeight()
      subscribe(screenSizeChanged);

    });
    onBeforeUnmount(() => {
      unsubscribe(screenSizeChanged);
    });

    return {
      //mainMenuHeight
    };
  },
  components: {
    HomeStart,
    HomeSearch,
    HomeHistory,
    HomeFavorite,
    HomeOpened,
    DxButton,
  },
  data() {
    return {
      toolbar_selected_button: 'start'
    }
  },
  methods: {
    onClick(e) {
      this.toolbar_selected_button = e.component.elementAttr['id'];

      e.component.elementAttr['class'] = 'button-selected';
      // if (e.component.elementAttr['id'] === 'opened') {
      //
      // }
      console.log('log:' + e.component.elementAttr['class']);
    },
    getToolbarButtonClass(class_name) {
      console.log(class_name)
      return 'button'
    },
    getHomeH() {
      if (this.toolbar_selected_button === 'start') {
        return 'Стартовая страница';
      } else if (this.toolbar_selected_button === 'search') {
        return 'Поиск везде';
      } else if (this.toolbar_selected_button === 'opened') {
        return 'Открытые элементы';
      } else if (this.toolbar_selected_button === 'favorite') {
        return 'Избранное'
      } else {
        return 'История'
      }
    }
  }
}
</script>
<style lang="scss">
.content {
  height: 100%;
  #home-page {
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    width: 100%;

    .toolbar {
      padding-top: 4px;
      padding-left: 0px;
      margin-left: -25px;
      display: flex;
      flex-direction: column;
      background-color: rgb(255, 255, 255);
      width: 100px;
    }

    %button-class {
      margin-top: 40px;
      margin-bottom: 40px;
      border-radius: 10px;
      font-size: 10px;
      height: 24px;
      border-color: #d3cccc;
      transform: rotate(-90deg);

      justify-content: center;
      .dx-button-content {
        padding-top: 1px !important;
      }
    }

    .button {
      @extend %button-class;
    }

    .button-selected {
      @extend %button-class;
      color: #ffffff;
      //background-color: #9dd943;
      //border-color: #9dd943;
      //background-color: #3f2c25;
      background-color: #6aab77;
      border-color: #6aab77;

    }

      .home-content {
        //background-color: #EE8213FF;
        border-color: #d2cece;
        border-style: solid;
        border-width: 0.5px;
        width: 100%;
        border-bottom-style: none;
        border-right-style: none;
        margin-left: -25px;
        .content-h {
          margin: 1px;

          padding: 5px;
          height: 32px;
          width: 180px;
          background-color: coral;
          text-align: center;
          color: white;
        }
      }
  }
}

//.home-page {
//  height: 100%;
//  display: flex;
//  flex-direction: row;
//  background-color: #ffffff;
//
//
//  .toolbar {
//    padding-top: 4px;
//    padding-left: 0px;
//    display: flex;
//    flex-direction: column;
//    background-color: rgb(255, 255, 255);
//    width: 50px;
//
//
//    %button-class {
//      margin-top: 30px;
//      margin-bottom: 20px;
//      border-radius: 10px;
//      font-size: 10px;
//      height: 22px;
//      width: 58px;
//      border-color: #d3cccc;
//      transform: rotate(-90deg)
//    }
//
//    .button {
//      @extend %button-class;
//    }
//
//    .button-selected {
//      @extend %button-class;
//      color: #ffffff;
//      background-color: #9dd943;
//      border-color: #9dd943;
//    }
//
//  }
//
//  .content {
//    //background-color: #EE8213FF;
//    border-color: #d2cece;
//    border-style: solid;
//    border-width: 0.5px;
//    width: 100%;
//    border-bottom-style: none;
//    border-right-style: none;
//
//    .content-h {
//      position: absolute;
//      padding: 5px;
//      height: 30px;
//      width: 180px;
//      background-color: coral;
//      text-align: center;
//      color: white;
//    }
//  }
//}


</style>
