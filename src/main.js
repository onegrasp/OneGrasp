import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/aos.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/icofont.min.css";
import "./assets/css/slick.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/style.css";

createApp(App).use(store).use(router).mount("#app");
