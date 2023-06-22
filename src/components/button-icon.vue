<template>
    <button class="button-icon" :type="props.type" @click="props.onClick">
        <slot></slot>
    </button>

</template>

<script>
export default {
  name: "ButtonIcon"
}
</script>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
    onClick: {
        type: Function,
        default: () => {}
    },
    type: {
        type: String,
        default: "button"
    }
})
</script>
<style lang="scss">
button{
    outline: none;
    border: none;
    padding: 5px 6px;
border: 1px solid  rgba(0, 0, 0, 0.158);
border-radius: 6px !important;
}
.button-icon:hover{
    box-shadow: 1px 1px 6px 0px #0000001c inset;

}
.button-icon{
    width: 40px;
    height: 40px;
}

</style>
