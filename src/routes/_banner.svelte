<script>
let banners = [1,2,3,4,5]
</script>

<div class="l1">
  <!-- <div class="nav">Left</div> -->
{#each banners as banner}
<img src="banners/{banner}.png" alt="">
{/each}
  <!-- <div class="nav">Right</div> -->
</div>

<style>
  .l1 {
    display: flex;
    overflow: hidden;
    width: 100%;
    align-items: center;
  }
</style>