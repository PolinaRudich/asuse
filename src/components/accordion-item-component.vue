<template>
  <div v-for="item in list" :key="item.id">
    <slot :name="item.slotName">
    </slot>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
    list: {
        type: Array,
        default: () => []
    }
});
console.log(props.list)
</script>

<script>
export default {
  name: "AccordionItemComponent",
};
</script>
