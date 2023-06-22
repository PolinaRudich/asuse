<template>
    <form class="contract-form" @submit.prevent="validateForm">
      <div class="flex-container title-container" :style="scrolledDistance > 0 && 'box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.05);'">
        <div class="flex-container">
          <span class="contract-title"> Договор </span>
          <custom-toggle-item v-show="false" :items="statuses" />
        </div>
        <div class="toolbar-container">
          <button-icon>
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_281_18477)">
                <g opacity="1">
                  <path
                    d="M8.64712 1.1875H2.47065C1.78842 1.1875 1.23535 1.71917 1.23535 2.375V16.625C1.23535 17.2809 1.78842 17.8125 2.47065 17.8125H17.2942C17.9764 17.8125 18.5295 17.2809 18.5295 16.625V10.6875"
                    fill="white"
                  />
                  <path
                    d="M8.64712 1.1875H2.47065C1.78842 1.1875 1.23535 1.71917 1.23535 2.375V16.625C1.23535 17.2809 1.78842 17.8125 2.47065 17.8125H17.2942C17.9764 17.8125 18.5295 17.2809 18.5295 16.625V10.6875"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </g>
                <path
                  d="M15.6101 0.168195C15.7065 0.0754454 15.8629 0.0754456 15.9594 0.168195L19.9774 4.03076C20.0739 4.12352 20.0739 4.27389 19.9774 4.36665L11.3106 12.6982C11.2766 12.7309 11.2335 12.7533 11.1864 12.7627L6.66311 13.6699C6.22736 13.7573 5.84143 13.3864 5.93234 12.9674L6.87604 8.61917C6.88586 8.57393 6.90921 8.53241 6.94321 8.49973L15.6101 0.168195Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_281_18477">
                  <rect width="21" height="19" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button-icon>
          <button-icon type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              typy="submit"
            >
              <path
                d="M3 6L21 6"
                stroke="#14181F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 20L20 20C20.5523 20 21 19.5523 21 19L21 5C21 4.44771 20.5523 4 20 4L4 4C3.44772 4 3 4.44772 3 5L3 19C3 19.5523 3.44772 20 4 20Z"
                stroke="#14181F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 11L11 15L9 13"
                stroke="#14181F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button-icon>
          <button-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="23"
              viewBox="0 0 20 23"
              fill="none"
            >
              <path
                d="M14.4001 23H5.49012C3.67512 23 2.24512 21.3125 2.24512 19.3125V8C2.24512 7.625 2.46512 7.375 2.79512 7.375C3.12512 7.375 3.9499 7.625 3.9499 8V13.7895L3.9499 19.3125C3.9499 20.6875 4.33512 21.0263 5.49012 21.0263H9.9999H14.3999C15.6099 21.0263 16.0499 20.625 16.0499 19.3125L16.0499 13.7895L16.0499 8C16.0499 7.625 16.7651 7.375 17.0951 7.375C17.4251 7.375 17.6451 7.625 17.6451 8V19.3125C17.6451 21.3125 16.1601 23 14.4001 23Z"
                fill="black"
              />
              <path
                d="M17.5304 3.69434H13.2432C12.9611 1.94434 11.6635 0.631836 10.0276 0.631836C8.3917 0.631836 6.98166 1.94434 6.69961 3.69434H2.41243C1.11499 3.69434 0.0996094 4.81934 0.0996094 6.25684C0.0996094 7.69434 1.11499 8.75684 2.41243 8.75684H17.5868C18.8842 8.75684 19.8996 7.63184 19.8996 6.19434C19.8996 4.75684 18.8278 3.69434 17.5304 3.69434ZM9.9714 1.88184C10.9868 1.88184 11.8329 2.63184 12.0586 3.69434H7.82782C8.10987 2.63184 8.95602 1.88184 9.9714 1.88184ZM17.5304 7.21078H10.0276H2.13016C1.50965 7.21078 1.22781 6.94434 1.22781 6.19434C1.22781 5.50684 1.73551 5.2371 2.41243 5.2371H9.9714H17.5868C18.2073 5.2371 18.7714 5.44434 18.7714 6.19434C18.715 6.94434 18.2073 7.21078 17.5304 7.21078Z"
                fill="black"
              />
            </svg>
          </button-icon>
          <button-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.1676 7.94004L19.1018 7.82619C18.9204 7.51217 18.8278 7.15475 18.8339 6.79216L18.8639 5.01333C18.87 4.64981 18.6783 4.3116 18.3633 4.13007L15.6266 2.55307C15.3124 2.372 14.9248 2.37524 14.6136 2.56155L13.0945 3.47113C12.7841 3.65704 12.429 3.75522 12.0671 3.75522H11.9354C11.5727 3.75522 11.2169 3.65661 10.906 3.46994L9.37989 2.55377C9.06765 2.36632 8.67819 2.36344 8.36321 2.54625L5.63522 4.12954C5.32173 4.31149 5.13124 4.64883 5.13733 5.01125L5.1673 6.79216C5.1734 7.15475 5.0808 7.51217 4.89941 7.82619L4.83452 7.93852C4.65303 8.25271 4.38949 8.5116 4.07212 8.68748L2.51724 9.54914C2.19854 9.72576 2.00113 10.0617 2.00196 10.4261L2.00911 13.5779C2.00994 13.9401 2.20649 14.2735 2.52297 14.4495L4.07039 15.3104C4.38884 15.4875 4.65283 15.7483 4.83386 16.0646L4.90339 16.186C5.08222 16.4985 5.17341 16.8534 5.16734 17.2133L5.1374 18.9865C5.13127 19.35 5.32294 19.6882 5.63798 19.8698L8.37461 21.4468C8.68883 21.6278 9.07647 21.6246 9.38762 21.4383L10.9067 20.5287C11.2172 20.3428 11.5723 20.2446 11.9341 20.2446H12.0658C12.4285 20.2446 12.7843 20.3432 13.0953 20.5299L14.6213 21.4461C14.9336 21.6335 15.323 21.6364 15.638 21.4536L18.366 19.8703C18.6795 19.6884 18.87 19.351 18.8639 18.9886L18.8339 17.2077C18.8278 16.8451 18.9204 16.4877 19.1018 16.1737L19.1667 16.0613C19.3482 15.7471 19.6117 15.4882 19.9291 15.3124L21.484 14.4507C21.8027 14.2741 22.0001 13.9381 21.9993 13.5738L21.9921 10.4219C21.9913 10.0598 21.7947 9.72638 21.4783 9.55032L19.9271 8.68741C19.611 8.51156 19.3485 8.25327 19.1676 7.94004Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button-icon>
        </div>
      </div>

      <CAccordion always-open>
        <CAccordionItem :item-key="1">
          <CAccordionHeader
            :class="hasGroupError.includes(1) ? `error-group` : ``"
          >
            <div class="title-accordion">Реквизиты</div>
            <div v-if="hasGroupError.includes(1)" class="error-group-message">
              Одно или несколько полей заполнгенцы неверно !
            </div>
          </CAccordionHeader>
          <CAccordionBody>
            <div class="flex-container input-container">
              <div class="input-item">
                <input-item
                  v-model="form.kod"
                  name="kod"
                  :is-req="true"
                  label="Номер"
                  type="text"
                  :errors="errors"
                />
              </div>
              <div class="input-item">
                <input-item
                  v-model="form.subdivision"
                  name="subdivision"
                  label="Подразделение"
                  type="text"
                  :errors="errors"
                />
              </div>
              <div class="input-item">
                <input-item
                  v-model="form.type"
                  name="type"
                  :is-req="true"
                  label="Вид энергии/услуга"
                  type="text"
                  :errors="errors"
                />
              </div>
            </div>
            <input-item
              v-model="form.item"
              name="item"
              :is-req="true"
              label="Вид договора"
              type="text"
              :errors="errors"
            />
            <input-item
              v-model="form.fin_source"
              name="fin_source"
              label="Источник финансирования"
              type="sprav"
              :errors="errors"
            />
            <div class="flex-container input-container">
              <div class="input-item">
                <input-item
                  v-model="form.id_gk"
                  name="id_gk"
                  label="Идентификатор гос. контракта"
                  type="text"
                  :errors="errors"
                />
              </div>
              <div class="input-item">
                <input-item
                  v-model="form.code"
                  name="code"
                  label="Идентификационный код"
                  type="text"
                  :errors="errors"
                />
              </div>
              <div class="input-item">
                <input-item
                  v-model="form.es_id"
                  name="es_id"
                  label="Идентификатор внешней системы"
                  type="text"
                  :errors="errors"
                />
              </div>
            </div>

            <div class="flex-container input-container">
              <div class="input-item">
                <input-item
                  v-model="form.payer"
                  name="payer"
                  label="Плательщик"
                  type="text"
                  :errors="errors"
                />
              </div>
              <div class="input-item">
                <input-item
                  v-model="form.gruz"
                  name="gruz"
                  label="Грузополучатель"
                  type="text"
                  :errors="errors"
                />
              </div>
            </div>
            <div class="flex-container">
              <div class="input-item">
                <input-item
                  v-model="form.start_date"
                  name="start_date"
                  :is-req="true"
                  label="Начало действия"
                  type="date"
                  :errors="errors"
                />
              </div>
              <div class="input-item">
                <input-item
                  v-model="form.planned_end_date"
                  name="planned_end_date"
                  :is-req="true"
                  label="Планируемое окончание"
                  type="date"
                  :errors="errors"
                />
              </div>
              <div class="input-item">
                <input-item
                  v-model="form.sign_date"
                  name="sign_date"
                  label="Подписан ЮЛ"
                  type="date"
                  :errors="errors"
                />
              </div>
              <div class="input-item">
                <input-item
                  v-model="form.reg_date"
                  label="Регистрация"
                  name="reg_date"
                  type="date"
                  :errors="errors"
                />
              </div>
            </div>
            <div class="flex-container">
              <div class="input-item">
                <input-item
                  v-model="form.oferta_date"
                  name="oferta_date"
                  label="Дата направления оферты"
                  type="date"
                  :errors="errors"
                />
              </div>
              <div class="input-item">
                <input-item
                  v-model="form.prolongation_date"
                  name="prolongation_date"
                  label="Пролонгация"
                  type="date"
                  :errors="errors"
                />
              </div>
              <div class="input-item">
                <input-item
                  v-model="form.end_date"
                  name="end_date"
                  label="Прекращение"
                  type="date"
                  :errors="errors"
                />
              </div>
              <div class="input-item">
                <input-item
                  v-model="form.archive_date"
                  label="Архивация"
                  name="archive_date"
                  type="date"
                  :errors="errors"
                />
              </div>
            </div>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem :item-key="2">
          <CAccordionHeader
            :class="hasGroupError.includes(4) ? `error-group` : ``"
          >
            <div class="title-accordion">Банковские реквизиты</div>
            <div v-if="hasGroupError.includes(4)" class="error-group-message">
              Одно или несколько полей заполнгенцы неверно !
            </div>
          </CAccordionHeader>
          <CAccordionBody>
            <div
              class="bank-type-button"
              :class="{
                active: !reqbank,
                invalidTabButton: payerGroupHasErrorsRef.value,
              }"
              @click="changeBankType"
            >
              Получателя
            </div>
            <div
              class="bank-type-button"
              :class="{ active: reqbank }"
              @click="changeBankType"
            >
              Плательщика
            </div>
            <div v-show="reqbank">
              <input-item
                v-model="form.payer_bank"
                :is-req="true"
                name="payer_bank"
                label="Банк"
                type="text"
                :errors="errors"
              />
              <div class="flex-container inputs-container">
                <div class="input-item">
                  <input-item
                    v-model="form.payer_bik"
                    name="payer_bik"
                    label="БИК"
                    type="text"
                    :errors="errors"
                  />
                  <input-item
                    label="Рассчетный счет"
                    type="text"
                    :errors="errors"
                  />
                </div>
                <div class="input-item">
                  <input-item label="Адрес" type="text" :errors="errors" />
                  <input-item label="Корр счет" type="text" :errors="errors" />
                </div>
              </div>
            </div>
            <div v-show="!reqbank">
              <input-item
                v-model="form.reciever_bank"
                name="reciever_bank"
                :is-req="true"
                label="Банк"
                type="text"
                :errors="errors"
              />
              <div class="flex-container inputs-container">
                <div class="input-item">
                  <input-item
                    v-model="form.reciever_bik"
                    name="reciever_bik"
                    label="БИК"
                    type="text"
                    :errors="errors"
                  />
                  <input-item
                    label="Рассчетный счет"
                    type="text"
                    :errors="errors"
                  />
                </div>
                <div class="input-item">
                  <input-item label="Адрес" type="text" :errors="errors" />
                  <input-item label="Корр счет" type="text" :errors="errors" />
                </div>
              </div>
              <input-item label="Казначейства" type="text" :errors="errors" />
              <input-item label="Доп счет ЮЛ" type="text" :errors="errors" />
              <input-item label="№лиц. счета" type="text" :errors="errors" />
              <input-item
                label="Доп банковский счет"
                type="text"
                :errors="errors"
              />
            </div>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem :item-key="3">
          <CAccordionHeader>
            <div class="title-accordion">Финансы</div>
          </CAccordionHeader>
          <CAccordionBody>
            <CFormLabel class="label" for="exampleFormControlPassword">
              Тип документа начислений
            </CFormLabel>
            <div style="display: block; margin: 0">
              <div style="margin-bottom: 10px">
                <custom-toggle-item :items="type_docs" />
              </div>
              <div class="flex-container input-container">
                <div class="input-item">
                  <input-item
                    label="Префикс № счет-фактуры"
                    type="text"
                    :errors="errors"
                  />
                </div>
                <div class="input-item">
                  <input-item
                    label="Тип основного платежного документа"
                    type="text"
                    :errors="errors"
                  />
                </div>
              </div>
              <div class="flex-container input-container">
                <div class="input-item">
                  <input-item
                    label="Состояние платежного документа по умолчанию"
                    type="text"
                    :errors="errors"
                  />
                </div>
                <div class="input-item">
                  <input-item
                    label="Дни до наступления задолженности"
                    type="text"
                    :errors="errors"
                  />
                </div>
              </div>
            </div>
            <input-item label="Тип оплаты" type="text" :errors="errors" />
            <div class="flex-container inputs-container" style="margin-bottom: 0">
              <div class="input-item" style="margin-top: 10px">
                <input
                  id="flexCheckChecked"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  checked
                  :errors="errors"
                />
                <CFormLabel
                  class="label label-check"
                  for="exampleFormControlPassword"
                >
                  Исключение автоматического разноса оплат
                </CFormLabel>
              </div>
              <p class="ecp" style="width: 50%; text-align: end">Есть ЭЦП</p>
              <div />
            </div>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem :item-key="4">
          <CAccordionHeader>
            <div class="title-accordion">Прочее</div>
          </CAccordionHeader>
          <CAccordionBody>
            <CFormLabel class="label" for="exampleFormControlPassword">
              Место нахождения
            </CFormLabel>
            <CFormInput id="floatingPassword" type="text" placeholder="Номер" />
            <CFormLabel class="label" for="exampleFormControlPassword">
              Для переписки
            </CFormLabel>
            <CFormInput id="floatingPassword" type="text" placeholder="Номер" />
            <div class="flex-container">
              <CFormFloating class="input-item">
                <input-item
                  v-model="form.reformFrom"
                  name="reformFrom"
                  label="Договор переоформлен с договора №"
                  type="text"
                  :errors="errors"
                />
              </CFormFloating>
              <CFormFloating class="input-item">
                <input-item
                  v-model="form.reformTo"
                  name="reformTo"
                  label="Договор переоформлен на договор №"
                  type="text"
                  :errors="errors"
                />
              </CFormFloating>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </form>
  </template>

  <script>
  export default {
    name: "ContractCardView",
    components: { customToggleItem },
  };
  </script>

  <script setup>
  import {
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
    CFormInput,
  } from "@coreui/vue";
  import { ref, reactive, provide, computed, onMounted, defineProps  } from "vue";
  // import { object, string } from "yup";
  import "@coreui/coreui/dist/css/coreui.min.css";
  import inputItem from "@/components/input-item.vue";
  import buttonIcon from "@/components/button-icon.vue";
  import "@coreui/coreui/dist/css/coreui.min.css";
  import customToggleItem from "@/components/custom-toggle-item.vue";

  defineProps({
    scrolledDistance: {
      type: Number,
      default: 0,
    },
  });
  const statuses = ["Активный", "Новый", "Архивный"];
  const type_docs = ["УПД", "СФ"];
  let reqbank = ref(true);
  let payerGroupHasErrorsRef = ref(false);
  let submittedForm = ref(false);
  const errorGroups = ref([]);
  provide("submittedForm", submittedForm.value);
  const payerGroupHasErrors = () => {
    if (submittedForm.value === true) {
      for (let key in errors) {
        if (errors[key] === "error") {
          payerGroupHasErrorsRef.value = true;
          break;
        }
      }
    }
    payerGroupHasErrorsRef.value = false;
  };

  const changeBankType = () => {
    reqbank.value = !reqbank.value;
  };
  onMounted(() => {
    const buttons = document.getElementsByClassName("accordion-button");
    console.log(`the component is now mounted.`, buttons);
    for (let t in buttons) {
      if (typeof buttons[t] === "object") buttons[t].click();
    }
  });
  const hasGroupError = computed(() => {
    return errorGroups.value;
  });

  const validateForm = () => {
    console.log(form);
    for (let key in errors) {
      errors[key] = "";
      errorGroups.value = [];
    }
    for (let key in form) {
      if (
        form[key] === "" &&
        (key === "kod" ||
          key === "item" ||
          key === "type" ||
          key === "start_date" ||
          key === "planned_end_date")
      ) {
        errors[key] = "error";
        errorGroups.value.push(1);
      }
      if (form[key] === "" && (key === "payer_bank" || key === "reciever_bank")) {
        console.log("we are here");
        errors[key] === "error";
        errorGroups.value.push(4);
      }
    }
    console.log("form", form);
    const nodes = document.getElementsByClassName("accordion-collapse");
    for (let item of nodes) {
      console.log(item.classList);
      item.classList.remove("show");
    }
    const buttons = document.getElementsByClassName("accordion-button");
    for (let item of buttons) {
      console.log(item.classList);
      item.classList.add("collapsed");
      item.setAttribute("aria-expanded", false);
    }
    console.log(errors, errorGroups.value);
    submittedForm = true;
    payerGroupHasErrors();
  };

  // function onSubmit(values) {
  //   console.log(JSON.stringify(values, null, 2));
  // }

  const form = reactive({
    kod: "",
    subdivision: "",
    id_gk: "",
    type: "",
    item: "",
    code: "",
    es_id: "",
    fin_source: "",
    payer: "",
    gruz: "",
    start_date: "",
    planned_end_date: "",
    end_date: "",
    archive_date: "",
    prolongation_date: "",
    sign_date: "",
    reg_date: "",
    oferta_date: "",
    reformFrom: "",
    reformTo: "",
    payer_bank: "",
    reciever_bank: "",
  });

  const errors = reactive({
    kod: "",
    subdivision: "",
    id_gk: "",
    type: "",
    item: "",
    code: "",
    es_id: "",
    fin_source: "",
    payer: "",
    gruz: "",
    start_date: "",
    planned_end_date: "",
    end_date: "",
    archive_date: "",
    prolongation_date: "",
    sign_date: "",
    reg_date: "",
    oferta_date: "",
    reformFrom: "",
    reformTo: "",
    payer_bank: "",
    reciever_bank: "",
  });
  </script>

  <style lang="scss">
  @import "/node_modules/@coreui/coreui/scss/functions";
  @import "/node_modules/@coreui/coreui/scss/variables";
  @import "/node_modules/@coreui/coreui/scss/maps";
  @import "/node_modules/@coreui/coreui/scss/mixins";
  @import "/node_modules/@coreui/coreui/scss/root";
  @import "../themes/generated/variables.base.scss";
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,400&display=swap");
  $accordion-transition: $btn-transition, border-radius 0.15s ease;
  .contract-form {
    margin-right: 20px;
    background: #f3f3f3;
    padding-top: 0;
    border-radius: 12px;
    font-family: "Montserrat";
    flex-grow: 1;
    font-weight: 500;
    line-height: 24px;
    padding-bottom: 30px;
    display: flex;
      flex-direction: column;
  }
  .title-container {
    justify-content: space-between;
    margin-bottom: 20px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    position: sticky;
    background: #f3f3f3;
    z-index: 5;
    top: 0;
    padding: 20px 30px 10px;
  }
  .warning-message {
    font-weight: 500;
    color: #ff6262;
    text-align: end;
    margin: 0;
  }
  .contract-form > * {
    transition: all 1s ease;
  }
  .accordion {
    display: flex;
    flex-direction: column;
    height: 93%;
    justify-content: space-between;
    padding: 0 30px;
    flex-grow: 1;
  }
  .input-container {
    margin: 0 !important;
  }
  .line {
    width: inherit;
    height: 2px;
    background: black;
    position: absolute;
    bottom: 0;
  }
  .title-accordion {
    padding: 0 15px 5px 5px;
    border-bottom: solid 2px transparent;
    clip-path: polygon(
      calc(0% + 5px) calc(0% + 5px),
      /* top left */ calc(100% - 5px) calc(0% + 1px),
      /* top right */ calc(100% - 5px) calc(100% - 5px),
      /* bottom right */ calc(0% + 5px) calc(100% - 1px) /* bottom left */
    );
    transition: all 0.2s linear;
  }
  .accordion-header {
    border-left: 2px solid #445566;
    position: relative;
  }
  .accordion-button:hover {
    .title-accordion {
      border-bottom: solid 2px #ff7819;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
  .ecp {
    align-self: end;
    margin-top: 10px;
    margin-bottom: 0;
  }
  .label-check {
    margin-left: 10px;
  }
  .input-item {
    width: 50%;
  }
  .bank-type-button {
    transition: all 0.5s ease;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 12px;
    border: 1px solid grey;
    display: inline-block;
  }
  .bank-type-button:not(:last-child) {
    margin-right: 10px;
  }

  .active {
    transition: all 0.5s ease;
    background-color: #445566;
    color: white;
  }
  .flex-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .input-container {
    width: 100%;
  }
  .toolbar-container {
    display: flex;
    gap: 5px;
  }
  .accordion-body {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    background: transparent;
    transition: all 1s ease;
    padding: 10px 16px;
  }
  .error-group-message {
    transition: all 0 ease;
    position: absolute;
    right: 56px;
    font-size: 13px;
    bottom: 10px;
  }
  .accordion-button {
    font-size: 20px;
    outline: none;
    color: black;
    border-radius: 16px !important;
    box-shadow: none;
    background: transparent;
    transition: all 1s ease;
    color: black;
    font-weight: 500;
  }
  .accordion-collapse {
    transition: all 0.5s ease;
  }
  .accordion-button:not(.collapsed) {
    box-shadow: none;
  }
  .accordion-item:not(:last-child) {
    margin-bottom: 20px;
  }
  .accordion-item {
    border: none;
    position: relative;
    background: transparent;
  }
  .accordion-button:focus {
    border-color: transparent !important;
    box-shadow: none;
  }
  .accordion-button:not(.collapsed) {
    background: transparent;
    color: black;
  }
  .error-group {
    border-left: 2px solid #db4545;
    .accordion-button {
      color: #ff5b5b;
    }
    .accordion-button:not(.collapsed) {
      background: transparent;
      color: #ff5b5b;
    }
  }
  .layout-body {
    padding: 0 20px;
  }
  .contract-title {
    font-size: 20px;
    color: #445566;
    font-weight: bold;
  }
  </style>
