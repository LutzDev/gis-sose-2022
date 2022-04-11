import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TopicSelection from "../views/TopicSelection.vue";
import TutorialDevEnv from "../views/TutorialDevEnv.vue";
import Abgabeformat from "../views/Abgabeformat.vue";
import ProjectStructure from "../views/ProjectStructure.vue";
import GitHubTutorial from "../views/GithubTutorial.vue";
import Task1 from "../views/Task1.vue";
import Task2 from "../views/Task2.vue";
import Task3 from "../views/Task3.vue";
import ProjectPlanning from "../views/ProjektPlanning.vue";
import ESLintSetup from "../views/ESLintSetup.vue";

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
    },
    {
        path: `/Task1`,
        name: 'Task1',
        component: Task1
    },
    {
        path: `/Task2`,
        name: 'Task2',
        component: Task2
    },
    {
        path: `/Task3`,
        name: 'Task3',
        component: Task3
    },
    {
        path: `/ProjectPlanning`,
        name: 'ProjectPlanning',
        component: ProjectPlanning
    }, 
    {
        path: '/ESLintSetup',
        name: 'ESLintSetup',
        component: ESLintSetup
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router