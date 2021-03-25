<template>
  <div class="columns m-5 is-multiline">
    <div class="column">
      song
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import { client_id, client_secret, getSong, getTokenFromRefresh, spotify_rf_token } from "~/assets/spotify";
import * as path from "path";

require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });


@Component({
  name: 'SpotifyHook',
  data: {
    inst: new SpotifyHook().getSongData(),
    // @ts-ignore
    sn: this.inst.name,
    // @ts-ignore
    a: this.inst.artist
  }
})
export default class SpotifyHook extends Vue {

  songName? : string;
  artist? : string;

  async getToken() {
    return await getTokenFromRefresh("AQAG-LGAJgHdLV885D8BMeuHZv_jCgbpi3qN4MLQDFsV9Gil5g3shUaE2PwiSQ8mUw-QbhSnhFNm49ELxE8z5cFnVF4zquPldzEXXPBesOWBVfBjBFRAEv2ovSJu-zzY1jo", "0964b7bbfd1c486fb23ac4345d5cc9a0", "58ba7a5f1dc042fb8b531476b74d011e");
  }

  getSongData() {
    let token : any = null;

    this.getToken().then((res) => {
      token = res;
    })

    let res : any = null;
    getSong(token.data.access_token).then((ret) => {
      res = ret;
    });

    let name;
    let artist;


    if (res!.status !== 204) {
      name = res!.data.item.name;
      artist = res!.data.item.artists[0].name;
    }

    name = name !== undefined ? name : "Not Playing";
    artist = artist !== undefined ? artist : " ";

    this.songName = name;
    this.artist = artist;

    return { name, artist }
  }


}
</script>

<style scoped>

</style>
