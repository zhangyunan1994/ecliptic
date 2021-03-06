import {createRouter, createWebHashHistory} from 'vue-router'

import Home from "../views/Home.vue";
import Parent from "../views/Parent.vue";
import Dashboard from "../views/Dashboard.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/app',
    name: 'app',
    component: Parent,
    children: [
      {
        path: "dash",
        name: "dash",
        component: Dashboard
      },
    ]
  }]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
