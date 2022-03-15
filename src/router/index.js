import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TopicSelection from "../views/TopicSelection.vue";
import TutorialDevEnv from "../views/TutorialDevEnv.vue";
import Abgabeformat from "../views/Abgabeformat.vue";
import ProjectStructure from "../views/ProjectStructure.vue";

const basePath = "/gis-sose-2022"

const routes = [
    {
        path: `${basePath}/Home`,
        name: 'Home',
        component: Home
    },
    {
        path: `${basePath}/Themenvergabe`,
        name: 'TopicSelection',
        component: TopicSelection
    },
    {
        path: `${basePath}/Entwicklungsumgebung`,
        name: 'EnvTutorial',
        component: TutorialDevEnv
    },
    {
        path: `${basePath}/Abgabeformat`,
        name: 'Abgabeformat',
        component: Abgabeformat
    },
    {
        path: `${basePath}/Projektstruktur`,
        name: 'Projektstruktur',
        component: ProjectStructure
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router