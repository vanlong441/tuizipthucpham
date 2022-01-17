export async function get({ params }) {
  console.log(params.slug);
  let content = (await import(`./_content/${params.slug}.json`)).default;
  // console.log(content);
  // let data = JSON.stringify(content);
  return {
    body: JSON.stringify("content"),
  };
}
