import bank_sprav from  "../../data/bank_sprav.js"
export default {
  namespaced: true,
  state: {
    contextHistory: [],
    openedSprav: bank_sprav,
    editSpravMode: false
  },
  getters: {
    getContextHistory(state) {
      return state.contextHistory;
    },
    getOpenedSprav() {
        return bank_sprav
    },
    getEditSpravMode(state) {
        return state.editSpravMode
    }
  },
  mutations: {
    SET_ITEM_CONTEXT_HISTORY(state, item) {
      try {
        state.contextHistory.forEach((el) => {
          if (el.KOD_ABONENT === item.KOD_ABONENT) {
            throw new Error("there is the same el");
          }
        });
        state.contextHistory.push(item);
      } catch (e) {
        return;
      }
    },
    REMOVE_ITEM_CONTEXT_HISTORY(state, item) {
      let newState = [...state.contextHistory].filter(
        (el) => item.KOD_ABONENT !== el.KOD_ABONENT
      );
      state.contextHistory = newState;
    },
    SET_OPENED_SPRAV(state, item) {
        state.openedSprav = item;
    },
    CHANGE_EDIT_SPRAV_MODE(state) {
        state.editSpravMode = !state.changeEditSpravMode;
    }
  },
  actions: {
    setItemToContextHistory(ctx, item) {
      ctx.commit("SET_ITEM_CONTEXT_HISTORY", item);
    },
    removeItemFromContextHistory(ctx, item) {
      console.log(item);
      ctx.commit("REMOVE_ITEM_CONTEXT_HISTORY", item);
    },
    setOpenedSprav(ctx, item){
        ctx.commit('SET_OPENED_SPRAV', item)
    },
    changeEditSpravMode(ctx){
        ctx.commit('CHANGE_EDIT_SPRAV_MODE')
    }
  },
};
