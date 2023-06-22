<template>
  <div style="position: relative" :class="type === 'sprav' && 'sprav-item'">
    <CFormLabel class="label" for="exampleFormControlPassword">{{
      propsRefs.label.value + `${isReq ? " *" : ""}`
    }}</CFormLabel>
    <div
      :class="['flex-container', type === 'sprav' && 'grid-container']"
      style="
        position: relative;
        margin-bottom: 0;
        flex-grow: 2;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      "
    >
      <svg
        v-if="hasError"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="20"
        viewBox="0 0 16 40"
        fill="none"
        :style="
          props.type === 'date'
            ? 'position: absolute;   right: 14px; top: 10px;'
            : 'position: absolute; right: 10px; top: 10px;'
        "
      >
        <rect
          x="5"
          y="1"
          width="6"
          height="24"
          rx="3"
          stroke="#FF6262"
          fill="#FF6262"
          stroke-width="2"
        />
        <rect
          x="5"
          y="33"
          width="6"
          height="6"
          rx="3"
          stroke="#FF6262"
          fill="#FF6262"
          stroke-width="2"
        />
      </svg>
      <input
        v-if="type !== 'sprav'"
        :id="name"
        :value="value"
        :readonly="isDisabled"
        :type="type"
        :style="
          (props.type === 'date' ? 'padding-right: 13px;' : '') &&
          (isDisabled ? 'readonly' : '')
        "
        :class="[
          props.isReq ? `req-field form-control` : `form-control`,
          hasError ? 'error-input' : '',
          hasError && type === 'date' && 'error-input-date',
        ]"
        :placeholder="`${isDisabled ? '' : 'Введите'}  ${
          !isDisabled ? props.label.toLowerCase() : props.label
        }`"
        @input="onHandleChange($event)"
      />
      <div
        v-if="type === 'sprav'"
        :class="['field-sprav', value && 'fullfield']"
      >
        <p
          style="
            margin: 0;
            width: 90%;
            text-overflow: ellipsis;
            overflow: hidden;
          "
        >
          {{ !value ? "Выберите данные" : `${value}` }}
        </p>
      </div>
      <svg
        v-if="type !== 'date' && isCopy"
        :class="[
          'copy-field',
          hasError && 'copy-field-error',
          label === 'Местонахождения' && 'copy-field-place',
        ]"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 14 14"
        fill="none"
      >
        <g clip-path="url(#clip0_28_278)">
          <path
            d="M12.9632 0H5.22445C4.67291 0 4.22424 0.4487 4.22424 1.00021V3.34777H5.13729V1.00021C5.13729 0.952152 5.1764 0.913044 5.22445 0.913044H12.9632C13.0112 0.913044 13.0503 0.952152 13.0503 1.00021V8.73892C13.0503 8.78701 13.0112 8.82612 12.9632 8.82612H10.6888V9.73916H12.9632C13.5147 9.73916 13.9634 9.29046 13.9634 8.73892V1.00021C13.9633 0.4487 13.5147 0 12.9632 0Z"
            fill="black"
          />
          <path
            d="M8.77554 4.2608H1.03686C0.485321 4.2608 0.0366211 4.7095 0.0366211 5.26104V12.9998C0.0366515 13.5513 0.485321 14 1.03686 14H8.77557C9.32711 14 9.77581 13.5513 9.77581 12.9998V5.26104C9.77584 4.7095 9.32708 4.2608 8.77554 4.2608ZM8.7756 13.087H1.03686C0.988773 13.087 0.949665 13.0478 0.949665 12.9998V5.26104C0.949665 5.21296 0.988773 5.17385 1.03686 5.17385H8.77557C8.82366 5.17385 8.86277 5.21296 8.86277 5.26104V12.9998H8.8628C8.8628 13.0478 8.82366 13.087 8.7756 13.087Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_28_278">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        v-if="type === 'sprav'"
        :class="[
          'sprav-svg',
          hasError && 'sprav-svg-error',
          isDisabled && 'sprav-svg-disabled',
        ]"
        class="sprav-svg included"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="spravPopupOpen"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5C4 17.1193 5.11929 16 6.5 16ZM9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10L15 10C16.1046 10 17 9.10457 17 8C17 6.89543 16.1046 6 15 6L9 6Z"
          fill="#ff7819"
        />
        <path
          d="M19.4142 15.4142L18.7071 14.7071L18.7071 14.7071L19.4142 15.4142ZM19.4142 3.58579L18.7071 4.29289L18.7071 4.29289L19.4142 3.58579ZM9 6V5V6ZM9 10V9V10ZM15 10V11V10ZM15 6V5V6ZM16 15H6.5V17H16V15ZM18.7071 14.7071C18.631 14.7832 18.495 14.8774 18.0613 14.9357C17.5988 14.9979 16.9711 15 16 15V17C16.9145 17 17.701 17.0021 18.3278 16.9179C18.9833 16.8297 19.6117 16.631 20.1213 16.1213L18.7071 14.7071ZM19 12C19 12.9711 18.9979 13.5988 18.9357 14.0613C18.8774 14.495 18.7832 14.631 18.7071 14.7071L20.1213 16.1213C20.631 15.6117 20.8297 14.9833 20.9179 14.3278C21.0021 13.701 21 12.9145 21 12H19ZM19 7V12H21V7H19ZM18.7071 4.29289C18.7832 4.36902 18.8774 4.50496 18.9357 4.9387C18.9979 5.40121 19 6.02892 19 7H21C21 6.08546 21.0021 5.29896 20.9179 4.67221C20.8297 4.01669 20.631 3.38834 20.1213 2.87868L18.7071 4.29289ZM16 4C16.9711 4 17.5988 4.00212 18.0613 4.06431C18.495 4.12262 18.631 4.21677 18.7071 4.29289L20.1213 2.87868C19.6117 2.36902 18.9833 2.17027 18.3278 2.08214C17.701 1.99788 16.9145 2 16 2V4ZM8 4H16V2H8V4ZM5.29289 4.29289C5.36902 4.21677 5.50496 4.12262 5.9387 4.06431C6.40121 4.00212 7.02892 4 8 4V2C7.08546 2 6.29896 1.99788 5.67221 2.08214C5.01669 2.17027 4.38834 2.36902 3.87868 2.87868L5.29289 4.29289ZM5 7C5 6.02892 5.00212 5.40121 5.06431 4.9387C5.12262 4.50496 5.21677 4.36902 5.29289 4.29289L3.87868 2.87868C3.36902 3.38834 3.17027 4.01669 3.08214 4.67221C2.99788 5.29896 3 6.08546 3 7H5ZM5 18.5V7H3V18.5H5ZM6.5 15C4.567 15 3 16.567 3 18.5H5C5 17.6716 5.67157 17 6.5 17V15ZM8 8C8 7.44772 8.44772 7 9 7V5C7.34315 5 6 6.34315 6 8H8ZM9 9C8.44772 9 8 8.55228 8 8H6C6 9.65685 7.34315 11 9 11V9ZM15 9L9 9V11H15V9ZM16 8C16 8.55229 15.5523 9 15 9V11C16.6569 11 18 9.65686 18 8H16ZM15 7C15.5523 7 16 7.44772 16 8H18C18 6.34315 16.6569 5 15 5V7ZM9 7L15 7V5L9 5V7ZM11 20H6.5V22H11V20ZM3 18.5C3 20.433 4.567 22 6.5 22V20C5.67157 20 5 19.3284 5 18.5H3Z"
          fill="#ff7819"
        />
        <path
          d="M20 21H10"
          stroke="#ff7819"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <svg
        v-if="!isDisabled"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 10 10"
        fill="none"
        :class="[
          'clear-field',
          hasError && 'error-clear-field',
          hasError && type === 'date' && 'error-clear-field-date',
        ]"
      >
        <g clip-path="url(#clip0_27_272)">
          <path
            d="M6.54663 3.01147L4.99999 4.5581L3.45335 3.01147L3.01147 3.45335L4.5581 4.99999L3.01147 6.54663L3.45335 6.98851L4.99999 5.44188L6.54663 6.98851L6.98851 6.54663L5.44188 4.99999L6.98851 3.45335L6.54663 3.01147Z"
            fill="black"
          />
          <path
            d="M5 0C2.23846 0 0 2.23846 0 5C0 7.76154 2.23846 10 5 10C7.76154 10 10 7.76154 10 5C10 2.23846 7.76154 0 5 0ZM5 9.21875C2.66998 9.21875 0.78125 7.33002 0.78125 5C0.78125 2.66998 2.66998 0.78125 5 0.78125C7.33002 0.78125 9.21875 2.66998 9.21875 5C9.21875 7.33002 7.33002 9.21875 5 9.21875Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_27_272">
            <rect width="10" height="10" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div v-if="type === 'sprav'" class="sprav-button-container"></div>
  </div>
</template>

<script>
export default {
  name: "InputItem",
};
</script>

<script setup>
import { CFormLabel } from "@coreui/vue";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  defineProps,
  defineEmits,
  toRefs,
  computed,
  ref,
  inject
} from "vue";
const emit = defineEmits(["update:modelValue"]);
const onHandleChange = (event) => {
  console.log(event.target.value);
  emit("update:modelValue", event.target.value);
};

const hasError = computed(() => {
  return props.errors[`${props.name}`] === "error";
});

const props = defineProps({
  label: {
    type: String,
    default: () => "",
  },
  type: {
    type: String,
    default: () => "text",
  },
  isReq: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: "",
  },
  errors: {
    type: Object,
    default: () => {},
  },
  value: {
    type: String,
    default: "",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isCopy: {
    type: Boolean,
    default: false,
  },
});
const name = ref(props.name);
const propsRefs = toRefs(props);
const spravPopupVisible = inject('spravPopupVisible');
const spravPopupOpen = () => {
console.log(props)
spravPopupVisible.value = true;
}
</script>
<style lang="scss">
@import "/node_modules/@coreui/coreui/scss/functions";
@import "/node_modules/@coreui/coreui/scss/variables";
@import "/node_modules/@coreui/coreui/scss/maps";
@import "/node_modules/@coreui/coreui/scss/mixins";
@import "/node_modules/@coreui/coreui/scss/root";
@import "../themes/generated/variables.base.scss";

.label {
  font-size: 13px;
  //   color: #db4545;
  white-space: nowrap;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 0;
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.sprav-button {
  padding: 3px 11px 0px 0;
  border-right: 2px solid black;
  border-top: 2px solid black;
  line-height: 16px;
  text-align: end;
  display: flex;
  align-items: end;
}

.sprav-svg {
  position: absolute;
  right: 31px;
  top: 10px;
}
.sprav-button-container {
  display: flex;
  cursor: pointer;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  position: absolute;
  right: -4px;
  bottom: -3px;
}
.error-input,
.error-input:focus {
  border: 1px solid #db4545dc !important;

  box-shadow: 1px 1px 6px 0px #db454533 inset;
}
.clear-field {
  position: absolute;
  right: 10px;
  top: 13px;
  cursor: pointer;
}
.copy-field {
  position: absolute;
  right: 34px;
  top: 14px;
  cursor: pointer;
}
.copy-field-error {
  right: 55px;
}
.error-clear-field {
  right: 29px;
  path,
  rect {
    fill: #db4545;
  }
}
.error-input-date {
  padding: 10px 53px 10px 13px !important;
}
.form-control,
.form-control:focus {
  padding: 10px 13px;
  font-size: 15px;
  border: 1px solid #b1b7c1;
  background-color: #f3f3f3;
  border-radius: 5px;
  padding-right: 40px;
  margin-bottom: 15px;
  font-family: "Montserrat" !important;
  font-weight: 500;
}
.form-control[readonly] {
  border: none;
  box-shadow: none;
  background-color: #f7f7f7;
}
.form-control::placeholder {
  font-size: 13px;
  color: #b1b7c1;
  font-family: "Montserrat";
}
.sprav-svg-disabled {
  right: 5px;
}
.form-control::placeholder {
  color: rgba(83, 83, 83, 0.6);
  border: none !important;
  box-shadow: none;
}
.sprav-svg-error {
  right: 52px;
}
.grid-container {
  display: grid !important;
}
.fullfield {
  color: black !important;
}
.req-field:focus {
  border-color: transparent !important;
  box-shadow: none;
}

.copy-field-place {
  right: 65px;
}

.sprav-item {
  margin-bottom: 15px;
}
.form-control:focus {
  border-color: transparent !important;
  box-shadow: none;
}
.form-control[readonly]::placeholder {
  color: rgba(124, 124, 124, 0.6);
  border: none !important;
}
.error-clear-field-date {
  right: 34px;
}
.field-sprav {
  border-bottom: 1px solid black;
  min-width: 300px;
  min-height: 40px;
  display: inline-block;
  padding-top: 10px;
  align-items: center;
  color: rgba(0, 0, 0, 0.486);
  text-overflow: ellipsis;
  overflow: hidden;
}
#reformFrom,
#reformFrom {
  margin-bottom: 0;
}
</style>
