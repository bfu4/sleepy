import * as tsx from 'vue-tsx-support';
import { getSongDataWrapped } from "~/assets/spotify";
import { VNode } from 'vue';

const impl = tsx.component({
  name: 'SpotifyHookImpl',
  render() : VNode {
    return (
      <div>

      </div>
    ) as VNode
  }
})
export { impl };
