<template>
  <div class="columns m-5 is-multiline">
    <div class="column">
      <spotify-hook-impl></spotify-hook-impl>
    </div>
  </div>
</template>

<script>

import { Vue } from "vue-property-decorator";
import * as path from "path";

import SpotifyHookImpl from "./spotifyHookImpl";
import { data } from "./spotifyHookImpl";

require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });

export default Vue.extend({
  components: {
     SpotifyHookImpl
  }
})
</script>
