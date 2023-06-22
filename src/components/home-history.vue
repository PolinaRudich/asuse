<template>
  <div class="search-bar-container">
    <div class="history-title">
      <svg
        width="40"
        height="40"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="55" height="55" fill="url(#pattern0)"/>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlink:href="#image0_1774_3" transform="scale(0.00195312)"/>
          </pattern>
          <image
            id="image0_1774_3"
            width="512"
            height="512"
            xlink:href="data:image/png;base64,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"
          />
        </defs>
      </svg>

      <span>История</span>
    </div>
    <div class="search-bar">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="7" stroke="#33363F" stroke-width="2"/>
        <path
          d="M20 20L17 17"
          stroke="#33363F"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
  <div class="history-container scrollbar">
    <div v-for="(item, index) in historyData" :key="item.id">
      <div class="history-date" :style="`z-index: ${index + 1}`">
        {{ item.date }}
      </div>
      <div v-for="el in item.items" :key="el.id" class="history-item">
        <p>{{ el.topic }}</p>
        <p class="history-item-date">{{ el.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHistory",
};
</script>

<script setup>
const historyData = [
  {
    date: "Сегодня",
    items: [
      {
        id: 17,
        date: "25.11.2022",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
      {
        id: 1,
        date: "25.11.2022",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
      {
        id: 3,
        date: "25.11.2022",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
      {
        id: 5,
        date: "25.11.2022",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
    ],
  },
  {
    date: "Вчера",
    items: [
      {
        id: 7,
        date: "25.11.2022",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
      {
        id: 8,
        date: "29.12.2001",
        topic: "Внесены изменения по контрагенту ООО `Ленэнерго` ",
        details: "",
      },
      {
        id: 9,
        date: "25.11.2022",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
      {
        id: 10,
        date: "29.12.2001",
        topic: "Внесены изменения по контрагенту ООО `Ленэнерго` ",
        details: "",
      },
      {
        id: 22,
        date: "25.11.2022",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
      {
        id: 83,
        date: "29.12.2001",
        topic: "Внесены изменения по контрагенту ООО `Ленэнерго` ",
        details: "",
      },
      {
        id: 91,
        date: "25.11.2022",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
      {
        id: 18,
        date: "29.12.2001",
        topic: "Внесены изменения по контрагенту ООО `Ленэнерго` ",
        details: "",
      },
    ],
  },
  {
    date: "3 мая",
    items: [
      {
        id: 11,
        date: "25.11.2022",
        type: "19 сентября",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
      {
        id: 12,
        date: "29.12.2001",
        topic: "Внесены изменения по контрагенту ООО `Ленэнерго` ",
        details: "",
      },
      {
        id: 13,
        date: "25.11.2022",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
      {
        id: 14,
        date: "29.12.2001",
        topic: "Внесены изменения по контрагенту ООО `Ленэнерго` ",
        details: "",
      },
      {
        id: 15,
        date: "25.11.2022",
        type: "19 сентября",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
      {
        id: 16,
        date: "29.12.2001",
        topic: "Внесены изменения по контрагенту ООО `Ленэнерго` ",
        details: "",
      },
      {
        id: 199,
        date: "25.11.2022",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
      {
        id: 140,
        date: "29.12.2001",
        topic: "Внесены изменения по контрагенту ООО `Ленэнерго` ",
        details: "",
      },
    ],
  },
  {
    date: "6 сентября",
    items: [
      {
        id: 15,
        date: "25.11.2022",
        topic: "переоформление договора №2323467",
        details: "Договор переоформлен с договора №828392Е УУЦ",
      },
      {
        id: 16,
        date: "29.12.2001",
        topic: "Внесены изменения по контрагенту ООО `Ленэнерго` ",
        details: "",
      },
      {
        id: 18,
        date: "29.12.2001",
        topic: "Внесены изменения по контрагенту ООО `Ленэнерго` ",
        details: "",
      },
    ],
  },
];
</script>
<style scoped lang="scss">
.search-bar-container {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-left: 20px;

  .history-title {
    font-size: 20px;
    font-weight: 600;
    color: #445566;
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
      display: inline-block;
      margin-left: 10px;
    }
  }
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  height: 40px;
  background: #ebebebde;
  padding: 4px 20px;
  border-radius: 9px;
}

.history-container {
  margin: 0 auto;
  max-width: 1000px;
  max-height: 100%;
  overflow: scroll;
  position: relative;

  .history-date {
    font-size: 16px;
    font-weight: 600;
    color: #ff7819;
    padding: 20px;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    position: sticky;
    top: 0;
    background-color: white;
    margin-right: 20px;
  }

  .history-item {
    padding: 20px;
    color: #445566;
    font-weight: 500;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 13px;
    }

    .history-item-date {
      color: rgba(69, 86, 105, 0.603);
      align-self: end;
      margin-bottom: 0;
      font-size: 11px;
    }
  }
}
</style>
