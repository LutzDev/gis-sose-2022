import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Exe1 from "../views/Exe1.vue";

const basePath= "/gis-sose-2022"

const routes = [
    {
        path: `${basePath}/Home`,
        name: 'Home',
        component: Home
    },
    {
        path: `${basePath}/Exe1`,
        name: 'Exe1',
        component: Exe1
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router