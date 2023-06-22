export default {
  namespaced: true,
  state: {
    currentViewUUID: undefined,
    openViews: [],
    allViews: {
      'form-generator': {
        'name': 'form-generator',
        'title': 'Form Generator',
        'periods': [],
      },
      'sv-tec': {
        'name': 'sv-tec',
        'title': 'Общестанционные  показатели  работы  ТЭС',
        'periods': [
          'month',
        ],
      },
      'sv-vk': {
        'name': 'sv-vk',
        'title': 'ОВК. Водогрейные котлы',
        'periods': [
          'month',
        ],
      },
      'sv-pk': {
        'name': 'sv-pk',
        'title': 'Суточные ведомости паровых котлов Е-50.ТЭП ПК № 1',
        'periods': [
          'month',
        ],
      },
      'sv-sch': {
        'name': 'sv-sch',
        'title': 'Суточная ведомость показаний счетчиков э/э',
        'periods': [
          'month',
        ],
      },
      'sv-msn': {
        'name': 'sv-msn',
        'title': 'Суточная ведомость показаний счетчиков э/э по механизмам СН',
        'periods': [
          'month',
        ],
      },
      'sv-emsn': {
        'name': 'sv-emsn',
        'title': 'Суточная ведомость показаний счетчиков и расходов э/э на механизмы СН блоков ПГУ',
        'periods': [
          'month',
        ],
      },
      'sv-pub': {
        'name': 'sv-pub',
        'title': 'Общие показатели блоков ПГУ',
        'periods': [
          'month',
        ],
      },
      'sv-ku': {
        'name': 'sv-ku',
        'title': 'Суточные ведомости котлов-утилизаторов ПГУ',
        'periods': [
          'month',
        ],
      },
      'sv-pt': {
        'name': 'sv-pt',
        'title': 'Суточная ведомость паровой турбины блока ПГУ',
        'periods': [
          'month',
        ],
      },
      'sv-sne': {
        'name': 'sv-sne',
        'title': 'Суточные ведомости по расходам э/э на СН блоков ПГУ.',
        'periods': [
          'month',
        ],
      },
      'sv-gt': {
        'name': 'sv-gt',
        'title': 'Суточный учет и расчеты ТЭП  по ГТ.',
        'periods': [
          'month',
        ],
      },
      'sv-ta': {
        'name': 'sv-ta',
        'title': 'Суточный учет и расчет ТЭП за месяц по ТА',
        'periods': [
          'month',
        ],
      },
      'sv-nas': {
        'name': 'sv-nas',
        'title': 'Насосы',
        'periods': [
          'month',
        ],
      },
      'sv-pvk': {
        'name': 'sv-pvk',
        'title': 'Показатели работы',
        'periods': [
          'month',
        ],
      },
      'sv-ka': {
        'name': 'sv-ka',
        'title': 'Суточный учет и расчет ТЭП за месяц по эн. котлам',
        'periods': [
          'month',
        ],
      }
      ,
      'spr-kft': {
        'name': 'spr-kft',
        'title': 'Справочники коэффициентов для расчета ТЭП турбин.',
        'periods': [
          'month',
        ],
      },
      'sv-const': {
        'name': 'sv-const',
        'title': 'Справочник диапазонов давления и температуры и некоторые константы',
        'periods': [
          'month',
        ],
      },
      'sv-balp1': {
        'name': 'sv-balp1',
        'title': 'Баланс пара группы оборудования 12 (90ата)',
        'periods': [
          'month',
        ],
      },
      'sv-balp2': {
        'name': 'sv-balp2',
        'title': 'Баланс пара группы оборудования 10 (130ата)',
        'periods': [
          'month',
        ],
      },
      'co-udp': {
        'name': 'co-udp',
        'title': 'Расчет фактических удельных ТЭП',
        'periods': [
          'month',
        ],
      },
      'cf-udp-fm': {
        'name': 'cf-udp-fm',
        'title': 'Физический метод',
        'periods': [
          'month',
        ],
      },
      'cf-pk': {
        'name': 'cf-pk',
        'title': 'Факт.Показатели ПК',
        'periods': [
          'month',
        ],
      },
      'cf-vk': {
        'name': 'cf-vk',
        'title': 'Факт.Показатели ВК',
        'periods': [
          'month',
        ],
      },
      'tf-fm': {
        'name': 'tf-fm',
        'title': 'Фактические удельные расходы топлива по ФМ с фиксированным bт',
        'periods': [
          'month',
        ],
      },
      'tf-unfm2': {
        'name': 'tf-unfm2',
        'title': 'Фактические удельные расходы топлива по ФМ (новая методика)',
        'periods': [
          'month',
        ],
      },
      'tf-unfm': {
        'name': 'tf-unfm',
        'title': 'Фактические  удельные расходы топлива по ФМ по новой Методике. Версия 1',
        'periods': [
          'month',
        ],
      },
      'tf-upgu': {
        'name': 'tf-upgu',
        'title': 'Фактические  удельные расходы топлива по методу частичной эксергии.',
        'periods': [
          'month',
        ],
      },
      'tf-pub': {
        'name': 'tf-pub',
        'title': 'Общие показатели блоков ПГУ',
        'periods': [
          'month',
        ],
      },
      'tf-gt': {
        'name': 'tf-gt',
        'title': 'Факт ПГУ. Показатели  газовых  турбин',
        'periods': [
          'month',
        ],
      },
      'tf-ku': {
        'name': 'tf-ku',
        'title': 'Факт ПГУ. Показатели  котлов-утилизаторов',
        'periods': [
          'month',
        ],
      },
      'tf-pt': {
        'name': 'tf-pt',
        'title': 'ПГУ. ТЭП паровых турбин',
        'periods': [
          'month',
        ],
      },
      'tf-sne': {
        'name': 'tf-sne',
        'title': 'Фактические расходы электроэнергии на СН блоков ПГУ.',
        'periods': [
          'month',
        ],
      },
      'tf-snq': {
        'name': 'tf-snq',
        'title': 'Фактические расходы тепла на СН блоков ПГУ.',
        'periods': [
          'month',
        ],
      },
      'tf-btepl': {
        'name': 'tf-btepl',
        'title': 'Тепловые балансы, контроль показателей блоков ПГУ.',
        'periods': [
          'month',
        ],
      },
      'tf-mu': {
        'name': 'tf-mu',
        'title': 'Удельные расходы топлива по физическому методу по новой Методике. Версия 2.',
        'periods': [
          'month',
        ],
      },
      'tf-ueks': {
        'name': 'tf-ueks',
        'title': 'Фактические  удельные расходы топлива по методу частичной эксергии',
        'periods': [
          'month',
        ],
      },
      'tn-ovk': {
        'name': 'tn-ovk',
        'title': 'Общие показатели ОВК',
        'periods': [
          'month',
        ],
      },
      'tn-mh': {
        'name': 'tn-mh',
        'title': 'Мазутное хозяйство ОВК',
        'periods': [
          'month',
        ],
      },
      'tn-ppk': {
        'name': 'tn-ppk',
        'title': 'Внутристанционные потери пара и конденсата',
        'periods': [
          'month',
        ],
      },
      'tn-pk': {
        'name': 'tn-pk',
        'title': 'Показатели ПКНД',
        'periods': [
          'month',
        ],
      },
      'tn-vk': {
        'name': 'tn-vk',
        'title': 'Показатели водогрейных котлов',
        'periods': [
          'month',
        ],
      },
      'tn-tfu': {
        'name': 'tn-tfu',
        'title': 'Показатели ТФУ ОВК',
        'periods': [
          'month',
        ],
      },
      'tn-pgu': {
        'name': 'tn-pgu',
        'title': 'Общие показатели блоков ПГУ',
        'periods': [
          'month',
        ],
      },
      'tn-bp': {
        'name': 'tn-bp',
        'title': 'Топливо на пуски блоков ПГУ',
        'periods': [
          'month',
        ],
      },
      'tn-gt': {
        'name': 'tn-gt',
        'title': 'Показатели газовых турбин',
        'periods': [
          'month',
        ],
      },
      'tn-ku': {
        'name': 'tn-ku',
        'title': 'Показатели котлов - утилизаторов',
        'periods': [
          'month',
        ],
      },
      'tn-pt': {
        'name': 'tn-pt',
        'title': 'Показатели паровых турбин',
        'periods': [
          'month',
        ],
      },
      'tn-tfu2': {
        'name': 'tn-tfu2',
        'title': 'Показатели ТФУ ПГУ',
        'periods': [
          'month',
        ],
      },
      'tn-u323': {
        'name': 'tn-u323',
        'title': 'Удельные расходы топлива (Пр. № 323)',
        'periods': [
          'month',
        ],
      },
      'tn-ukpd': {
        'name': 'tn-ukpd',
        'title': 'Удельные расходы топлива (Кпд)',
        'periods': [
          'month',
        ],
      },
      'tn-u125': {
        'name': 'tn-u125',
        'title': 'Удельные расходы топлива (bт=125)',
        'periods': [
          'month',
        ],
      },
      'tn-u160': {
        'name': 'tn-u160',
        'title': 'Удельные расходы топлива (bт=160)',
        'periods': [
          'month',
        ],
      },
      'tbl-ppk': {
        'name': 'tbl-ppk',
        'title': 'Внутристанционные потери пара и конденсата блоков ПГУ',
        'periods': [
          'month',
        ],
      },
      'tbl-gt': {
        'name': 'tbl-gt',
        'title': 'Показатели газовых турбин',
        'periods': [
          'month',
        ],
      },
      'tbl-ku': {
        'name': 'tbl-ku',
        'title': 'Показатели котлов-утилизаторов',
        'periods': [
          'month',
        ],
      },
      'tbl-pgu': {
        'name': 'tbl-pgu',
        'title': 'Общие показатели блоков ПГУ',
        'periods': [
          'month',
        ],
      },
      'tbl-pt': {
        'name': 'tbl-pt',
        'title': 'Показатели паровых турбин',
        'periods': [
          'month',
        ],
      },
      'tbl-tfu2': {
        'name': 'tbl-tfu2',
        'title': 'Показатели ТФУ',
        'periods': [
          'month',
        ],
      },
      'tn-upgu': {
        'name': 'tn-upgu',
        'title': 'Удельные расходы топлива',
        'periods': [
          'month',
        ],
      },
      'xs-1tec': {
        'name': 'xs-1tec',
        'title': 'Справочник ТЭС',
      },
      'xs-oborud': {
        'name': 'xs-oborud',
        'title': 'Группы оборудования',
      },
      'stec-och': {
        'name': 'stec-och',
        'title': 'Группы оборудования ТЭС',
      },
      'sm3-tec': {
        'name': 'sm3-tec',
        'title': 'Состав макета 3-ТЭК',
      },
      'spr-qust': {
        'name': 'spr-qust',
        'title': 'Установленные мощности тепловых котлов',
      },
      'sustm-ta': {
        'name': 'sustm-ta',
        'title': 'Установленные мощности турбин',
      },
      'xs-pasport': {
        'name': 'xs-pasport',
        'title': 'Паспорт оборудования',
      },
      'xs-toplall': {
        'name': 'xs-toplall',
        'title': 'Топливо',
      },
      'xs-topliv': {
        'name': 'xs-topliv',
        'title': 'Виды топлива',
      },
      'frm3-tec': {
        'name': 'frm3-tec',
        'title': 'Форма 3-ТЭК',
        'periods': [
          'month', 'quarter', 'crescent', 'arbitrary',
        ],
      },
    },
    openedPeriodDialog: undefined,
  },
  actions: {
    closeView(ctx, uuid) {
      ctx.commit('CLOSE_VIEW', uuid);
    },
    setCurrentView(ctx, uuid) {
      ctx.commit('SET_CURRENT_VIEW', uuid);
    },
    // newView(ctx, itemData) {
    //
    // }
    changeViewIndex(ctx, {uuid, toIndex}) {
      ctx.commit('CHANGE_VIEW_INDEX', {uuid, toIndex});
    },
    newView(ctx, itemView) {
      ctx.commit('NEW_VIEW', itemView);
    },
    openPeriodDialog(ctx, type) {
      if (type === undefined) {
        throw ('err: bc8028c2-18bb-4f6a-acb8-e246038eda6f');
      }
      ctx.commit('OPEN_PERIOD_DIALOG', type);
    },
    closePeriodDialog(ctx) {
      ctx.commit('CLOSE_PERIOD_DIALOG');
    },
    changePeriodView(ctx, {uuid, period}) {
      ctx.commit('CHANGE_PERIOD_VIEW', {uuid, period});
    },
    saveViewInput(ctx, {uuid, input}) {
      ctx.commit('SAVE_VIEW_INPUT', {uuid, input});
    },
    clearViewInput(ctx, uuid) {
      ctx.commit('CLEAR_VIEW_INPUT', uuid);
    },
  },
  mutations: {
    CHANGE_PERIOD_VIEW(state, {uuid, period}) {
      const view = state.openViews.find(view => view.uuid === uuid);
      view.period = {...period};
    },
    SET_CURRENT_VIEW(state, uuid) {
      state.currentViewUUID = uuid;
    },
    CHANGE_VIEW_INDEX(state, {uuid, toIndex}) {
      const item = state.openViews.find(_item => _item.uuid === uuid);
      const fromIndex = state.openViews.indexOf(item);
      state.openViews.splice(fromIndex, 1);
      state.openViews.splice(toIndex, 0, item);
      state.openViews = [...state.openViews];
    },
    NEW_VIEW(state, itemView) {
      const arr = [...state.openViews];
      arr.push(JSON.parse(JSON.stringify(itemView)));
      state.openViews = [...arr];
    },
    OPEN_PERIOD_DIALOG(state, type) {
      state.openedPeriodDialog = {type: type};
    },
    CLOSE_PERIOD_DIALOG(state) {
      state.openedPeriodDialog = {};
    },
    CLOSE_VIEW(state, uuid) {
      const arr = [];
      for (const view of state.openViews) {
        if (view.uuid !== uuid) {
          arr.push(view);
        }
        state.openViews = [...arr];
      }
    },
    SAVE_VIEW_INPUT(state, {uuid, input}) {
      for (const view of state.openViews) {
        if (view.uuid === uuid) {
          view['input'] = input;
          view.input['grid'] = input.grid;
        }
      }
    },
    CLEAR_VIEW_INPUT(state, uuid) {
      for (const view of state.openViews) {
        if (view.uuid === uuid) {
          if (view.input) {
            view.input['grid'] = [];
          }
        }
      }
    },
  },

  getters: {
    getViewIndex(state) {
      return (uuid) => {
        let index = undefined;
        for (const view of state.openViews) {
          if (view.uuid === uuid) {
            return state.openViews.indexOf(view);
          }
        }
        return index;
      };
    },
    getViewInput(state) {
      return (uuid) => {
        for (const view of state.openViews) {
          if (view.uuid === uuid) {
            return view.input;
          }
        }
      };
    },
    getCurrentView(state) {
      const view = state.openViews.find(view => view.uuid === state.currentViewUUID);
      return view;
    },
    getOpenViewByType(state) {
      return (type) => {
        const view = state.openViews.find(view => view.type === type);
        return view;
      };
    },
    getOpenViews(state) {
      return state.openViews;
    },
    getViewTypeItem(state) {
      return (type) => {
        return state.allViews[type];
      };
    },
    getOpenPeriodDialog(state) {
      return state.openPeriodDialog;
    },
  },
};
