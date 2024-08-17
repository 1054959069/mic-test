import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "./permission";
import "./microApp";

/* import vConsole from "vconsole";
new vConsole(); */

const app = createApp(App);
app.use(router);

app.mount("#app");
