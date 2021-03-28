import {
  faGithub,
  faLinkedin,
  faDiscord,
  faReadme,
  faSoundcloud,
  faGitlab,
  faJava,
  faCuttlefish,
  faSpotify,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome";
import Vue from 'vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleRight, faEnvelope, faTerminal } from "@fortawesome/free-solid-svg-icons";

// thanks ven

library.add(
  faGithub,
  faSpotify,
  faLinkedin,
  faDiscord,
  faReadme,
  faSoundcloud,
  faGitlab,
  faAngleRight,
  faJava,
  faCuttlefish,
  faTerminal,
  faEnvelope,
  faTwitter
)

Vue.component('font-awesome-icon', FontAwesomeIcon);
