export default async function getData(url) {
  try {
    let res = await fetch(url),
      json = await res.json();
    console.log(res);
    return json;
  } catch (e) {
    console.log(e);
  }
}
