import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Exe1 from "../views/Exe1.vue";

const routes = [
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Exe1',
        name: 'Exe1',
        component: Exe1
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router