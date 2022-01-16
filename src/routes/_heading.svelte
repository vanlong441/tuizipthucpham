<script>
  export let heading = "Túi Giấy Zip",
    description =
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
</script>

<div class="l1">
  <h2>{heading}</h2>
  <img src="divider.png" alt="">
  <p>{description}</p>
</div>

<style>
  .l1 {
    display: grid;
    justify-content: center;
    gap: 1.5rem;
    font-family: "Roboto";
    background: white;
    padding: 2rem;
  }
  h2,
  p {
    margin: 0;
    padding: 0;
  }
  h2 {
    text-align: center;
    font-family: "Playball", cursive;
    font-size: 3rem;
    color: #06ac06;
    letter-spacing: 3px;
    text-shadow: 1px 1px #008b8b40;
  }
  p {
    line-height: 1.5rem;
    letter-spacing: 1px;
  }
  img {
    width: 25%;
    justify-self: center;
    opacity: 0.35;
  }
</style>
