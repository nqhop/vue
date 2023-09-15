import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMenbers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      component: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMenbers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      component: {
        default: UsersList,
        footer: UsersFooter,
      },
    },
    // this route will become active if the user enter /teams and the anything thereafter
    // therefore the order matters if you had another route such as /teams/new
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
