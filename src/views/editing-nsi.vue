<template>
  <v-app>
    <v-stepper non-linear>
      <v-stepper-header>
        <v-stepper-step editable step="1">
          Select campaign settings
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="2"> Create an ad group </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" editable> Create an ad </v-stepper-step>
      </v-stepper-header>
    </v-stepper>

    <v-stepper class="mt-12" non-linear>
      <v-stepper-header>
        <v-stepper-step complete editable step="1">
          Select campaign settings
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="2"> Create an ad group </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step complete editable step="3">
          Create an ad
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>

    <v-stepper class="mt-12" non-linear value="3">
      <v-stepper-header>
        <v-stepper-step complete editable step="1">
          Select campaign settings
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step complete editable step="2">
          Create an ad group
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step complete editable step="3">
          Create an ad
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </v-app>
</template>

<script>
export default {
  name: "EditingNsi",
};
</script>

<script setup>
 import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css';
import '@mdi/font/css/materialdesignicons.css'
</script>
