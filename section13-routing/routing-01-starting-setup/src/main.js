import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMenbers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    // this route will become active if the user enter /teams and the anything thereafter
    // therefore the order matters if you had another route such as /teams/new
    { path: '/teams/:teamId', component: TeamMenbers },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
