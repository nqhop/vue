import { createApp } from "vue";

import BaseContainer from "./components/UI/BaseContainer.vue";
import BaseSearch from './components/UI/BaseSearch.vue'
import App from "./App.vue";

const app = createApp(App);

app.component("base-container", BaseContainer);
app.component("base-search", BaseSearch);

app.mount("#app");
