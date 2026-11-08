// core
import { createApp } from "vue";

// self-hosted fonts (no font CDN) and global style
import "@fontsource/instrument-sans/latin-400.css";
import "@fontsource/instrument-sans/latin-500.css";
import "@fontsource/instrument-sans/latin-600.css";
import "@fontsource/instrument-serif/latin-400.css";
import "./../css/app.css";

import router from "./router";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
