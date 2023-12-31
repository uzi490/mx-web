import CAvatar from '@/tsx/CAvatar';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
import 'element-plus/es/components/message-box/style/css';
import 'element-plus/es/components/message/style/css';
// import ElementPlus from 'element-plus';
// import locale from 'element-plus/es/locale/lang/zh-cn';
import { createI18n } from 'vue-i18n';
import VueLayoutPage from 'vue-layout-page';
import App from './App.vue';
import router from './router';

import store from './store';
const app = createApp(App);
const i18n = createI18n({
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  messages
});

app.use(router);
app.use(store);
app.use(i18n);
// app.use(ElementPlus);
// app.use(ElementPlus, { locale });
//@ts-ignore
app.use(VueLayoutPage);
//@ts-ignore
app.component('CAvatar', CAvatar);
app.mount('#app');
