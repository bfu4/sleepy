import { getSong, getToken } from "../assets/spotify";

// TODO: fix token
test("spotify request", async () => {

  const token = await getToken();
  console.log(token)
  expect(token != undefined)
  let res = await getSong() as any;

  console.log(res.data.item.name);
  expect(res !== null && res !== undefined && res.data !== undefined )
  // @ts-ignore
  expect(res.data != null)
})
