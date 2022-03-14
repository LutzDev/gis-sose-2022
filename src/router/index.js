import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Abgabeformat from "../views/Abgabeformat.vue";

const basePath= "/gis-sose-2022"

const routes = [
    {
        path: `${basePath}/Home`,
        name: 'Home',
        component: Home
    },
    {
        path: `${basePath}/Abgabeformat`,
        name: 'Abgabeformat',
        component: Abgabeformat
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router