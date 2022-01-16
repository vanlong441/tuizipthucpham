export async function get() {
  const imports = import.meta.glob("./markdowns/*.{md,svx}");
  let body = [];

  for (const path in imports) {
    body.push(
      imports[path]().then(({ metadata }) => {
        console.log(metadata);
        return {
          metadata,
          path,
        };
      })
    );
  }

  const posts = await Promise.all(body);

  console.log(posts);

  return {
    body: JSON.stringify(posts),
  };
}
