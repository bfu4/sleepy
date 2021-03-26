import "vue-tsx-support/enable-check"
import { getSongDataWrapped } from "~/assets/spotify";
import { Component, Prop, Vue } from "vue-property-decorator";

const react = require('react');

namespace JSX {
  export interface IntrinsicElements {
    div : { [p : string] : any }
  }
}

type test = JSX.IntrinsicElements;

@Component({
  name: 'SpotifyHookImpl',
  fetchOnServer: false
})
export default class SpotifyHookImpl extends Vue {

  constructor() {
    super();
  }

  songName? : string;
  songArtist? : string;
  songAlbum? : string;

  // Static before life sucks ( can't access #this?)
  static async fetchData() {
    let res = await getSongDataWrapped().then((res) => {
      return res;
    });

    return { songName: res.name, songArtist: res.artist }
  }

  beforeCreate() {
    SpotifyHookImpl.fetchData().then((dat) => {
      this.songArtist = dat.songArtist;
      this.songName = dat.songName;
    })
  }

  render() {
    console.log("render")
    return (
      <div>
        <div>
          { this.songName }
        </div>
      </div>
    )
  }

}

