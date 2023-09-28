import { createApp } from "vue";
import App from "./App.vue";
import BaseContainer from "./components/ui/BaseContainer.vue";
import router from "./router.js";
import store from "./store/index.js";
import Notifications from "@kyvg/vue3-notification";

const app = createApp(App);

app.use(router);

app.use(store);

app.use(Notifications);

app.component("base-container", BaseContainer);

app.mount("#app");
