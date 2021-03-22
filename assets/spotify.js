import axios from "axios";

export const client_id = process.env.SPOTIFY_CLIENT_ID;
export const client_secret = process.env.SPOTIFY_SECRET;

export async function getSong(accessToken) {
  let res =  await axios.get("https://api.spotify.com/v1/me/player/currently-playing",  {
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

export async function getToken(clientId, clientSecret) {
  return await axios.post("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      'Accept': '*/*, application/json',
      'Content-Type': 'application/json',
    },
    data: {
      "grant_type": "client_credentials",
      "client_secret": clientId,
      "client_id": clientSecret
    }
  })
}
