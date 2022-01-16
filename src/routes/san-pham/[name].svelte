<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`./product.json`);
    const posts = await res.json();
    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  export let posts;
  console.log(posts)
</script>
