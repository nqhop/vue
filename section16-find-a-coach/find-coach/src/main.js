import { createApp } from "vue";
import App from "./App.vue";
import BaseContainer from "./components/ui/BaseContainer.vue";
import router from "./router.js";
import store from "./store/index.js";

const app = createApp(App);

app.use(router);

app.use(store);

app.component("base-container", BaseContainer);

app.mount("#app");
