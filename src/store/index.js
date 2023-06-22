import {createStore} from 'vuex';
import drawer from './modules/drawer';
import content from './modules/content';
import card from './modules/card';
import VuexPersist from 'vuex-persist';

 const vuexLocalStorage = new VuexPersist({
  key: 'vuex' ,
  storage: window.localStorage,
  reducer: state => ({
    card: state.card
  })
});

export const store = createStore(
  {
    strict: true,
    modules: {
      drawer,
      content,
      card
    },
    plugins: [vuexLocalStorage.plugin]
  });
