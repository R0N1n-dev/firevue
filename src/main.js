import { createApp, markRaw } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { VueFire, VueFireAuth } from "vuefire";
import { appbase } from "./firebaseConfig.mjs";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/md-light-deeppurple/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

const app = createApp(App);
app.use(PrimeVue);
app.use(VueFire, {
  firebaseApp: appbase,
  modules: [VueFireAuth()],
});
app.use(router);
app.use(createPinia());
app.mount("#app");
