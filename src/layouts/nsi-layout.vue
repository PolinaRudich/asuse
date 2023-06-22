<template>
    <app-main-menu id="app-main-menu" />
    <EditingNsi/>
</template>

<script>

export default {
  name: 'nsiLayout'
}
</script>

<script setup>
import AppMainMenu from "@/components/app-main-menu.vue";
import EditingNsi from '@/views/editing-nsi.vue';
</script>
