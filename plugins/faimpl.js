import {
  faGithub,
  faLinkedin,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome";
import Vue from 'vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// thanks ven

library.add(
  faGithub,
  faLinkedin,
  faDiscord
)

Vue.component('font-awesome-icon', FontAwesomeIcon);
