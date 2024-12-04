
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: "dashboard",
    component: () => import('../layout/dashboard/index.vue'),
    children: [
      {
        path: '',
        name: "home",
        component: () => import('../views/home/index.vue'),
      },
      {
        path: 'help',
        nama:'help',
        comment: () => import('../views/help/index.vue')
      },
      {
        path: 'income',
        nama:'income',
        comment: () => import('../views/income/index.vue')
      },
      {
        path: 'product',
        nama:'product',
        comment: () => import('../views/product/index.vue')
      },
      {
        path: 'promate',
        nama:'promate',
        comment: () => import('../views/promate/index.vue')
      },
      // {
      //   path: 'customers',
      //   nama:'customers',
      //   comment: () => import('../views/customers/index.vue')
      // },
    ]
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  });

export default routes
