import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TopicSelection from "../views/TopicSelection.vue";
import TutorialDevEnv from "../views/TutorialDevEnv.vue";
import Abgabeformat from "../views/Abgabeformat.vue";
import ProjectStructure from "../views/ProjectStructure.vue";
import GitHubTutorial from "../views/GithubTutorial.vue";

const routes = [
    {
        path: `/Home`,
        name: 'Home',
        component: Home
    },
    {
        path: `/Themenvergabe`,
        name: 'TopicSelection',
        component: TopicSelection
    },
    {
        path: `/Entwicklungsumgebung`,
        name: 'EnvTutorial',
        component: TutorialDevEnv
    },
    {
        path: `/Abgabeformat`,
        name: 'Abgabeformat',
        component: Abgabeformat
    },
    {
        path: `/Projektstruktur`,
        name: 'Projektstruktur',
        component: ProjectStructure
    },
    {
        path: `/GithubCrashkurs`,
        name: 'GithubCrashkurs',
        component: GitHubTutorial
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router