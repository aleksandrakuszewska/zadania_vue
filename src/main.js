// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import UserList from './components/UserList.vue';
import AddUser from './components/AddUser.vue';
import EditUser from './components/EditUser.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: UserList },
  { path: '/add', component: AddUser },
  { path: '/edit/:id', component: EditUser }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(router)
  .mount('#app');


// import { createApp } from 'vue';

// import KomponentKlientow from './views/Klienci.vue';
// import UserUser from './views/Klient.vue';
// import { createRouter, createWebHistory } from 'vue-router';
// const routes = [
//   { path: '/users', component: KomponentKlientow },
//   { path: '/users/:id', component: UserUser },
//   {
//     path: '/users/addUser',
//     component: KomponentKlientow
//   },
//   {
//     path: '/users/:id/edit',
//     component: KomponentKlientow
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// });

// createApp(KomponentKlientow)
//   .use(router)
//   .mount('#app');
