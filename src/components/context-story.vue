<template>
  <p class="data-card-title" v-if="!compactMode">История контекстов</p>
  <div v-if="!compactMode" class="context-story scrollbar">
    <div class="context-story-content">
      <div
        :class="[
          'context-story-item',
          layoutStore.currentContract.KOD_ABONENT === item.KOD_ABONENT &&
            'active-item',
        ]"
        v-for="(item, index) in list"
        :key="item.KOD_ABONENT"
        @mouseover="mouseOn = index"
        @mouseleave="mouseOn = -1"
      >
        <span>{{ item.NAME }}</span>
        <div
          style="width: 14px; height: 14px; display: flex; align-items: center"
        >
          <svg
            v-if="mouseOn === index"
            @click="removeItemFromContextStore(item)"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 15L10 12"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M14 15L14 12"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex-container"
    v-if="compactMode"
    style="justify-content: center"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 7L13 7" stroke="#222222" stroke-linecap="round" />
      <path d="M9 15L12 15" stroke="#222222" stroke-linecap="round" />
      <path d="M9 11L15 11" stroke="#222222" stroke-linecap="round" />
      <path
        d="M19 11V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H11C8.17157 3 6.75736 3 5.87868 3.87868C5 4.75736 5 6.17157 5 9V15C5 17.8284 5 19.2426 5.87868 20.1213C6.75736 21 8.17157 21 11 21H12"
        stroke="#222222"
        stroke-linecap="round"
      />
      <circle
        cx="17.5"
        cy="17.5"
        r="2.5"
        stroke="#222222"
        stroke-linecap="round"
      />
      <path d="M21 21L19.5 19.5" stroke="#222222" stroke-linecap="round" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "ContextStory",
};
</script>

<script setup>
import { store, defineProps } from "@/store";
import { ref, inject } from "vue";
defineProps({
  compactMode: {
    type: Boolean,
    default: false,
  },
});
let contextHistory = store.getters["card/getContextHistory"];
const list = ref(contextHistory);
let mouseOn = ref(-1);
let layoutStore = inject("layoutStore");
const removeItemFromContextStore = (item) => {
  store.dispatch("card/removeItemFromContextHistory", item);
  let contextHistory = store.getters["card/getContextHistory"];
  list.value = contextHistory;
};
</script>

<style scoped lang="scss">
.history-navigation {
  position: relative;
}
p {
  font-family: "Montserrat";
  color: #445566;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 4px;
  letter-spacing: 0.1rem;
  width: fit-content;
  margin-top: 4px;
  margin-left: 18px;
  z-index: 5;
  position: relative;
}
p::before {
  content: "";
  width: 100px;
  height: 1px;
  position: absolute;
  top: 8px;
  left: 162px;
  background-color: black;
}
.context-story {
  color: rgba(68, 85, 102, 0.9843137255);
  font-family: "Montserrat";
  border-radius: 0px;
  padding: 6px 10px 6px 10px;
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-right: 10px;
  max-width: 100%;
  overflow: scroll;

  position: relative;
  .context-story-item {
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    min-height: 20px;
    align-items: center;
    padding: 2px 4px 2px;
  }

  span {
    font-size: 10px;
  }
  svg {
    cursor: pointer;
  }
  .active-item {
    background: #ffebd4;
  }
}
// @media (max-height: 982px) {
//   .context-story {
//     max-height: 400px;
//   }
// }
// @media (max-height: 944px) {
//   .context-story {
//         max-height: 437px;
//   }
// }

// @media (max-height: 885px) {
//   .context-story {
//         max-height: 421px;
//   }
// }

// @media (max-height: 839px) {
//   .context-story {
//     max-height: 250px;
//   }
// }

// @media (max-height: 784px) {
//   .context-story {
//     max-height: 200px;
//   }
// }

// @media (max-height: 735px) {
//   .context-story {
//     max-height: 150px;
//   }
// }
</style>
