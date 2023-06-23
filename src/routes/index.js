import KomponentKlientow from '../App.vue';
import UserUser from '../views/Klient.vue';

const routes = [
  { path: '/users', component: KomponentKlientow },
  { path: '/users/:id', component: UserUser },
  {
    path: '/users/addUser',
    component: KomponentKlientow
  },
  {
    path: '/users/:id/updateUsers',
    component: KomponentKlientow
  },
];

export default routes;
