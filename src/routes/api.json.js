export async function get({ params }) {
  let res = await fetch("https://api.ipify.org?format=text");
  let ip = await res.text();
  return {
    body: {
      ip,
    },
  };
}
