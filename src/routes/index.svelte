<script>
  // import { db } from "./db";

  import Banner from "./_components/trang-chu/banner.svelte";
  import Heading from "./_components/trang-chu/heading.svelte";
  import ContentColumn from "./_components/trang-chu/content-column.svelte";
  import ProductHighlight from "./_components/trang-chu/product_highlight.svelte";
  import Video from "./_components/trang-chu/video.svelte";
</script>

<div class="l1">
  <Banner />
  <!-- <Heading></Heading> -->
  <Heading
    heading="Túi Giấy Zip"
    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  />
  <ProductHighlight />
  <Heading
    heading="Lý do chọn chúng tôi"
    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  />
  <ContentColumn content={["1.jpg", "2.jpg", "1.jpg", "2.jpg"]} />
  <Video />
</div>

<style>
  .l1 {
    display: grid;
    gap: 2rem;
    justify-content: center;
  }
</style>
