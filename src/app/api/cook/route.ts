// import { type NextRequest } from 'next/server';
// import { type cooksResponse } from '@/type';

export async function GET(): Promise<Response> {
  return fetch(`http://s-ogawa.site/staticjson/res.json`);

  // return Response.json({ res });
  // const res: Promise<Response> = await fetch(
  //   `http://s-ogawa.site/staticjson/cookres.json`
  // )
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => data)
  //   .catch(() => {
  //     return null;
  //   });

  // // return Response.json({ res });
  // return res;
}
