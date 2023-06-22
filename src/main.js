import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.additional.css';
import { createApp }  from "vue";
import router from "./router";
import {store} from './store'
import App from "./App";
import appInfo from "./app-info";
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives';
import ContextMenu from '@imengyu/vue3-context-menu';
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css';
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles';
const vuetify = createVuetify({
    components,
    directives
  })
const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify)
app.use(ContextMenu)
store.dispatch('drawer/initDrawer');
app.config.globalProperties.$appInfo = appInfo;
app.mount('#app');