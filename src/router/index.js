import { createRouter, createWebHistory } from "vue-router";

import Layout from "@/layout/layout.vue";
import Home from "@/views/home/index.vue";
import Product from "@/views/product/index.vue"
import Costumers from "@/views/costumers/index.vue";
import Income from "@/views/income/index.vue";
import Help from "@/views/help/index.vue";


const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "",
                name: "Home",
                component: Home,
            },
            {
                path: "product",
                name: "Product",
                component: Product,
            },
            {
                path: "costumers",
                name: "Costumers",
                component: Costumers,
            },
            {
                path: "income",
                name: "Income",
                component: Income,
            },
            {
              path:"help",
              name:"Help",
              component: Help,
            }
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router






