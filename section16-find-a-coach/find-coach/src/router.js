import { createRouter, createWebHistory  } from "vue-router";

import CoachesList from "./components/pages/coaches/CoachesList.vue";
import RequestsReceived from "./components/pages/requests/RequestsReceived.vue";
import RegisterCoach from "./components/pages/register/RegisterCoach.vue";

const router = createRouter({
  history: createWebHistory (),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    { path: '/requests', component: RequestsReceived },
    { path: '/register', component: RegisterCoach },
  ],
});

export default router;
