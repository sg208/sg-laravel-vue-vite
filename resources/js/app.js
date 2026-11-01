// core
import { createApp } from "vue";

// self-hosted fonts (no font CDN) and global style
import "@fontsource/instrument-sans/latin-400.css";
import "@fontsource/instrument-sans/latin-500.css";
import "@fontsource/instrument-sans/latin-600.css";
import "@fontsource/instrument-serif/latin-400.css";
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
