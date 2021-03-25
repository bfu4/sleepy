import axios from "axios";
import querystring from 'querystring';

export const client_id = process.env.SPOTIFY_CLIENT_ID;
export const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
export const spotify_rf_token = process.env.SPOTIFY_REFRESH_TOKEN;

export async function getSong(accessToken) {
  let res = await axios.get(`https://api.spotify.com/v1/me/player/currently_playing`, {
    method: "GET",
    headers: {
      'Accept': '*/*, application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ accessToken }`
    }
  }).then((res) => {
    return res;
  }).catch(console.log);

  return res;
}

export async function getAppToken(clientId, clientSecret) {
  return await axios.post("https://accounts.spotify.com/api/token",
    querystring.stringify({
      grant_type: 'client_credentials'
    }),
    {
      method: "POST",
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(clientId + ":" + clientSecret).toString('base64')}`
      },
    }).catch((err) => {
    console.error(err)
    return err;
  })
}

export async function getPersonalToken(clientId, clientSecret, access_code) {
  return await axios.post("https://accounts.spotify.com/api/token",
    querystring.stringify({
      grant_type: 'authorization_code',
      code: access_code,
      redirect_uri: 'https://sleeepy.ninja/',

    }),
    {
      method: "POST",
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(clientId + ":" + clientSecret).toString('base64')}`
      },
    }).catch((err) => {
    console.error(err)
    return err;
  })
};

export async function getTokenFromRefresh(refresh_token, clientId, clientSecret) {
  return await axios.post("https://accounts.spotify.com/api/token",
    querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
    {
      method: "POST",
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(clientId + ":" + clientSecret).toString('base64')}`
      },
    }).catch((err) => {
    console.error(err)
    return err;
  })
}

export async function getSongDataWrapped() {
  const token = await getTokenFromRefresh(spotify_rf_token, client_id, client_secret);
  const song = await getSong(token.data.access_token);

  let name;
  let artist;

  if (song.status !== 204) {
    name = song.data.item.name;
    artist = song.data.item.artists[0].name;
  }

  name = name !== undefined ? name : "Not Playing";
  artist = artist !== undefined ? artist : " ";

  return { name, artist }

}
