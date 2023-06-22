<template>
  <app-main-menu id="main-menu"/>
  <slot/>
</template>

<script>

import {computed} from 'vue';
import AppMainMenu from "@/components/app-main-menu.vue";

export default {
  name: "default-layout",
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
