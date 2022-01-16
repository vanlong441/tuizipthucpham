<script>
  // import { db } from "./db";

import Banner from "./_banner.svelte";
import Heading from "./_heading.svelte";
import ProductHighlight from "./_product_highlight.svelte";

</script>
<div class="l1">

  <Banner></Banner>
  <Heading></Heading>
  <ProductHighlight></ProductHighlight>
</div>

<style>
  :global(body) {
    background: #f5f5f5;
  }
  .l1 {
    display: grid;
    gap: 1rem;
    justify-content: center;
  }
</style>