<script>
  // export let video = "https://www.youtube.com/watch?v=Yp7PiSkz0To&feature=emb_title"
  export let text =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
</script>

<div class="l1">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/Yp7PiSkz0To"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
  <div class="l2">
    {text}
  </div>
</div>

<style>
  .l1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    background: white;
  }
  .l2 {
    padding: 2rem 3rem;
    font-family: Roboto;
    line-height: 1.5rem;
    letter-spacing: 1px;
  }
</style>