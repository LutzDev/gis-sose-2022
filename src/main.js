import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router/index.js";

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
import {root} from "postcss";

const app = createApp(App)

app.use(VueHighlightJS);
app.use(router);
app.mount('#app');

/*createApp(App).use(router).mount('#app')*/
