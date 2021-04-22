import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook,faInstagram ,faTwitter,faYahoo,faFacebookF,faGoogle,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt,faPlayCircle,faArrowRight,faMapMarkerAlt,faEnvelope,faLongArrowAltRight,faArrowCircleDown,faUser,faLock} from '@fortawesome/free-solid-svg-icons';
library.add(faPhoneAlt,faPlayCircle,faArrowRight,faMapMarkerAlt,faFacebookF,faGoogle,faLinkedinIn,faEnvelope,faLongArrowAltRight,faFacebook,faArrowCircleDown,faUser,faLock,faYahoo,faInstagram,faTwitter)

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration:1000
});

import animated from "animate.css";
import "animate.css";
import "wowjs/css/libs/animate.css";



const app=createApp(App);
app.use(store);
app.use(router);
app.component('fa-icon', FontAwesomeIcon);
app.use(animated);
app.mount("#app");
