import {
  faGithub,
  faLinkedin,
  faDiscord, faReadme
} from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome";
import Vue from 'vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// thanks ven

library.add(
  faGithub,
  faLinkedin,
  faDiscord,
  faReadme
)

Vue.component('font-awesome-icon', FontAwesomeIcon);
