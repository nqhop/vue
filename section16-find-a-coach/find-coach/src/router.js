import { createRouter, createWebHistory  } from "vue-router";

import CoachesList from "./components/pages/coaches/CoachesList.vue";
import RequestsReceived from "./components/pages/requests/RequestsReceived.vue";

const router = createRouter({
  history: createWebHistory (),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    { path: '/requests', component: RequestsReceived },
  ],
});

export default router;
