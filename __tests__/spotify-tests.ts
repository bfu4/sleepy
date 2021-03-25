import {
  getSong,
  getAppToken,
  getTokenFromRefresh,
  spotify_rf_token,
  client_id, client_secret, getSongDataWrapped
} from "../assets/spotify";

test("spotify request token", async () => {

  const token = await getAppToken(client_id, client_secret);
  console.log(token.data)
  expect(token.data !== null && token.data !== undefined)

});

test('spotify request song', async() => {
  const token = await getTokenFromRefresh(spotify_rf_token, client_id, client_secret)
  const song : any = await getSong(token.data.access_token);

  let dat;

  if (song.status !== 204) {
    console.log(song.data.item)

    dat = { songName: song.data.item.name, artist: song.data.item.artists[0], album: song.data.item.album.name }
  }

  console.log(dat);

  expect(song.data !== null && song.data !== undefined);
})

test('wrapper', async () => {
  const res = await getSongDataWrapped();

  expect(res != null)
  console.log(res);
})
