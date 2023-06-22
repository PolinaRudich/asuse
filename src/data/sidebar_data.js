import { reactive } from "vue";

export default reactive({
  contragent: {
    id: 1,
    title: "Контрагент",
    svg: "counterparty",
    description:
      "ОВО по Заинскому району – филиал ФГКУ «УВО ВНГ России по Республике Татарстан»",
  },
  contract: {
    id: 2,
    title: "Договор",
    svg: "contract",
    description: "6115T от 04.02.2021",
    items: [],
  },
  object: {
    id: 3,
    title: "Объект",
    svg: "object",
    description: "6115T от 04.02.2021",
    items: [],
  },
});
