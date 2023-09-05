import CAvatar from '@/tsx/CAvatar';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
import 'element-plus/es/components/message-box/style/css';
import 'element-plus/es/components/message/style/css';
import { createI18n } from 'vue-i18n';
import VueLayoutPage from 'vue-layout-page';
import App from './App.vue';
import router from './router';
import { apis } from './api';
import store from './store';
const app = createApp(App);
const i18n = createI18n({
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  messages
});

app.config.globalProperties.$apis = apis;

app.use(router);
app.use(store);
app.use(i18n);
//@ts-ignore
app.use(VueLayoutPage);
//@ts-ignore
app.component('CAvatar', CAvatar);
app.mount('#app');
