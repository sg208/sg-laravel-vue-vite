// core
import { createApp } from "vue";

// global style
import "./../css/app.css";

// everything else
import router from "./router";

// main component to mount
import App from "./App.vue";

const app = createApp(App);

// Add all the plugins here, which used to be Vue.use(plugin)
const plugins = [router];

// Loading all the plugins via this loop
plugins.forEach((plugin) => app.use(plugin));

app.mount("#app");
