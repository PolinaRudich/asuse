import {formatDateToDDMMYYYY, getMonth, getQuarterName, getQuarterOfMonth} from '@/utils/dateUtil';

export default {
  namespaced: true,
  state: {
    periods: {
      month: {
        type: 'month',
        text: 'Месяц',
        date_start: {M: undefined, YYYY: undefined},
      },
      quarter: {
        type: 'quarter',
        text: 'Квартал',
        date_start: {Q: undefined, YYYY: undefined},
      },
      crescent: {
        type: 'crescent',
        text: 'Нарастающий',
        date_start: {D: undefined, M: undefined, YYYY: undefined},
        date_end: {D: undefined, M: undefined, YYYY: undefined},
      },
      day: {
        type: 'day',
        text: 'День',
        date_start: {D: undefined, M: undefined, YYYY: undefined},
      },
      arbitrary: {
        type: 'arbitrary',
        text: 'Произвольный период',
        date_start: {D: undefined, M: undefined, YYYY: undefined},
        date_end: {D: undefined, M: undefined, YYYY: undefined},
      },
      period: {
        type: 'period',
        text: 'Отопительный период',
        date_start: {D: undefined, M: undefined, YYYY: undefined},
        date_end: {D: undefined, M: undefined, YYYY: undefined},
      },
      season: {
        type: 'season',
        text: 'Отопительный сезон',
        date_start: {D: undefined, M: undefined, YYYY: undefined},
        date_end: {D: undefined, M: undefined, YYYY: undefined},
      },
      range: {
        type: 'range',
        text: 'Диапазон дней',
        date_start: {D: undefined, M: undefined, YYYY: undefined},
        date_end: {D: undefined, M: undefined, YYYY: undefined},
      },
    },
    disablePeriods: ['crescent', 'period', 'season'],
    currentPeriod: 'month',
    flagCreateNew: false,
    isInit: false,
    pop: [],
  },
  getters: {

    getPop(state) {
      return state.pop;
    },
    getAllPeriods(state) {
      return state.periods;
    },
    getPeriodOption(state) {
      return (type) => {
        let disabled = state.disablePeriods.includes(type);
        let current = type === state.currentPeriod;
        return {...state.periods[type], disabled, current};
      };
    },
    getCurrentPeriod(state) {
      return state.periods[state.currentPeriod];
    },
    getCurrentPeriodValueText(state) {
      let date;
      let period_value;
      let q_name;
      const period = state.periods[state.currentPeriod];
      switch (state.currentPeriod) {
        case 'month':
          return getMonth(period.date_start.M - 1) + ' ' + period.date_start.YYYY;
        case 'quarter':
          q_name = getQuarterName(period.date_start.Q);
          return q_name + ' ' + period.date_start.YYYY;
        case 'crescent':
          date = new Date('-' + period.date_start.M + '-' + period.date_start.D + '-' + period.date_start.YYYY);
          period_value = 'с ' + formatDateToDDMMYYYY(date, '.');
          date = new Date('-' + period.date_end.M + '-' + period.date_end.D + '-' + period.date_end.YYYY);
          return period_value + ' по ' + formatDateToDDMMYYYY(date, '.');
        case 'day':
          date = new Date('-' + period.date_start.M + '-' + period.date_start.D + '-' + period.date_start.YYYY);
          return formatDateToDDMMYYYY(date, '.');
        case 'arbitrary':
          date = new Date('-' + period.date_start.M + '-' + period.date_start.D + '-' + period.date_start.YYYY);
          period_value = 'с ' + formatDateToDDMMYYYY(date, '.');
          date = new Date('-' + period.date_end.M + '-' + period.date_end.D + '-' + period.date_end.YYYY);
          return period_value + ' по ' + formatDateToDDMMYYYY(date, '.');
        case 'range':
          date = new Date('-' + period.date_start.M + '-' + period.date_start.D + '-' + period.date_start.YYYY);
          period_value = 'с ' + formatDateToDDMMYYYY(date, '.');
          date = new Date('-' + period.date_end.M + '-' + period.date_end.D + '-' + period.date_end.YYYY);
          return period_value = period_value + ' по ' + formatDateToDDMMYYYY(date, '.');
      }
    },
    getCurrentPeriodTypeText(state) {
      return state.periods[state.currentPeriod].text;
    },
    getFlagCreateNew(state) {
      return state.flagCreateNew;
    },
  },
  actions: {
    initDrawer(ctx) {
      ctx.commit('INIT');
    },
    setPop(ctx, pop) {
      ctx.commit('SET_POP', pop);
    },
    delPop(ctx, pop) {
      ctx.commit('DEL_POP', pop);
    },
    setPeriodValue(ctx, {type, date_start, date_end}) {
      ctx.commit('SET_PERIOD_VALUE', {type, date_start, date_end});
    },
    setFlagCreateNew(ctx, value) {
      ctx.commit('SET_FLAG_CREATE_NEW', value);
    },
    setEnablePeriods(ctx, periods) {
      ctx.commit('SET_ENABLE_PERIODS', periods);
    },
    enableAllPeriods(ctx) {
      ctx.commit('ENABLE_ALL_PERIODS');
    },
    setCurrentPeriod(ctx, type) {
      ctx.commit('SET_CURRENT_PERIOD', type);
    },
  },
  mutations: {
    INIT(state) {
      if (!state.isInit) {
        state.currentPeriod = 'month';
        const d = new Date();
        const YYYY = d.getFullYear();
        const M = d.getMonth() + 1;
        let Q = getQuarterOfMonth(M);
        const D = d.getDate();

        state.periods.month.date_start = {M: M, YYYY: YYYY};
        state.periods.quarter.date_start = {Q: Q, YYYY: YYYY};
        state.periods.crescent.date_start = {D: 1, M: 1, YYYY: YYYY};
        state.periods.crescent.date_end = {D: D, M: M, YYYY: YYYY};
        state.periods.day.date_start = {D: D, M: M, YYYY: YYYY};
        state.periods.arbitrary.date_start = {D: 1, M: M, YYYY: YYYY};
        state.periods.arbitrary.date_end = {D: D, M: M, YYYY: YYYY};
        state.periods.period.date_start = {D: 1, M: 1, YYYY: YYYY};
        state.periods.period.date_end = {D: D, M: M, YYYY: YYYY};
        state.periods.season.date_start = {D: 1, M: 1, YYYY: YYYY};
        state.periods.season.date_end = {D: D, M: M, YYYY: YYYY};
        state.periods.range.date_start = {D: 1, M: 1, YYYY: YYYY};
        state.periods.range.date_end = {D: D, M: M, YYYY: YYYY};
        state.isInit = true;
      }
    },
    SET_POP(state, pop) {
      state.pop.push(pop);
    },
    DEL_POP(state, pop) {
      state.pop = state.pop.filter(item => item !== pop);
    },
    SET_CURRENT_PERIOD(state, type) {
      state.currentPeriod = type;
    },
    SET_PERIOD_VALUE(state, {type, date_start, date_end}) {
      state.periods[type].date_start = date_start;
      state.periods[type].date_end = date_end;
    },
    SET_FLAG_CREATE_NEW(state, value) {
      state.flagCreateNew = value;
    },
    SET_ENABLE_PERIODS(state, periods) {
      let newDisablePeriods = [];
      if (periods !== undefined) {
        const periodTypes = Object.keys(state.periods);
        for (const period of periodTypes) {
          if (periods.indexOf(period) === -1) {
            newDisablePeriods.push(period);
          }
        }
      }
      state.disablePeriods = newDisablePeriods;
    },
    ENABLE_ALL_PERIODS(state) {
      state.disablePeriods = [];
    },
  },
};
