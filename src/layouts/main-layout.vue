<template>
  <app-main-menu id="main-menu"/>
  <slot/>
</template>

<script>


import menuItems from "../app-navigation";
import {computed} from 'vue';
import AppMainMenu from "@/components/app-main-menu.vue";

export default {
  props: {
    title: String,
    isXSmall: Boolean,
    isLarge: Boolean
  },
  setup(props) {

    const headerMenuTogglerEnabled = computed(() => {
      return props.isXSmall;
    });

    return {
      menuItems,
      headerMenuTogglerEnabled,
    };
  },
  components: {
    AppMainMenu,
  }
};
</script>

<style lang="scss">


</style>
