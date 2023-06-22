<template>
  <div id="root">
    <div :class="cssClasses">
      <component
        :is="$route.meta.layout"
        :title="title"
        :is-x-small="screen.getScreenSizeInfo.isXSmall"
        :is-large="screen.getScreenSizeInfo.isLarge"
      >
        <div id="current-layout" class="content">
          <router-view></router-view>
        </div>
      </component>
    </div>
  </div>
</template>

<script>

import {sizes, subscribe, unsubscribe} from "./utils/media-query";
import {
  getCurrentInstance,
  reactive,
  onMounted,
  onBeforeUnmount,
  computed
} from "vue";

function getScreenSizeInfo() {
  const screenSizes = sizes();

  return {
    isXSmall: screenSizes["screen-x-small"],
    isLarge: screenSizes["screen-large"],
    cssClasses: Object.keys(screenSizes).filter(cl => screenSizes[cl])
  };
}

export default {
  components: {},
  setup() {
    const vm = getCurrentInstance();

    const title = vm.proxy.$appInfo.title;
    const screen = reactive({getScreenSizeInfo: {}});
    screen.getScreenSizeInfo = getScreenSizeInfo();

    function screenSizeChanged() {
      screen.getScreenSizeInfo = getScreenSizeInfo();
    }

    onMounted(() => {
      subscribe(screenSizeChanged);
    });

    onBeforeUnmount(() => {
      unsubscribe(screenSizeChanged);
    });

    const cssClasses = computed(() => {
      return ["app"].concat(screen.getScreenSizeInfo.cssClasses);
    });

    return {
      title,
      screen,
      cssClasses
    };
  }
};
</script>

<style lang="scss">

html {
  min-height: 97vh;
  height: 97vh;


  body {
    margin: 0;
    height: 100%;

    #app {
      height: 100%;

      #root {
        height: 100%;

        .app {
          margin: 0;
          height: 100%;
          width: calc(100% - 30px);
          .content{
            display: flex;
            flex-grow: 1;
          }
        }
      }
    }
  }
}
@media all and (max-width: 1172px) {
  html {
    min-height: 95vh;
    height: 95vh;
  }
}
//body {
//  #app {
//    //@import "./themes/generated/variables.base.scss";
//    //background-color: darken($base-bg, 5);
//    //display: flex;
//    height: 100%;
//    width: 100%;
//  }
//}
//
//#root {
//  height: 100%;
//}
//
//* {
//  box-sizing: border-box;
//}
//

</style>
