<script>
  let categories = [
    "Túi zip giấy cửa sổ",
    "Túi vàng",
    "Túi trắng",
    "Túi zip 1 mặt trong",
    "Túi giấy",
    "Túi nhôm",
    "Túi zip trà sữa",
  ];
  let images = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  let index = -1;
</script>

<div class="l1">
  <div class="l2 categories">
    {#each categories as category, categoryIndex}
      <div class="l3">
        {#if index === categoryIndex}
          <i class="ri-logout-circle-r-line" />
        {:else}
          <i class="ri-checkbox-blank-circle-line" />
        {/if}
        <div
          on:mouseleave={() => (index = -1)}
          on:mouseenter={() => (index = categoryIndex)}
          class="text"
        >
          {category}
        </div>
      </div>
    {/each}
  </div>
  <div class="l2 images">
    {#each images as image}
      <img src="san-pham/{image}.jpg" alt="" />
    {/each}
  </div>
</div>

<style>
  .l1 {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    background: white;
    padding: 3rem;
    box-sizing: border-box;
  }
  .categories {
    display: grid;
    min-width: max-content;
    gap: 1rem;
    font-family: Roboto;
    padding-right: 1rem;
  }
  .l3 {
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .text {
    border-bottom: 1px solid transparent;
  }
  .l3:hover > .text {
    border-bottom: 1px solid #222;
    cursor: pointer;
  }
  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    border-left: 1px solid #f5f5f5;
  }
  img {
    height: 16rem;
    border: 1px solid transparent;
    padding: 1rem;
    box-sizing: border-box;
  }
  img:hover {
    border-color: #06ac06;
    cursor: pointer;
  }
</style>
