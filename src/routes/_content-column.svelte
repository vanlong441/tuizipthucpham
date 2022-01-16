<script>
  export let content = [];
  $: columns = `repeat(${content.length}, 1fr)`;
</script>

<div style="grid-template-columns: {columns}" class="l1">
  {#each content as item}
    {#if /\.jpg/.test(item)}
      <img src="diem-manh/{item}" alt="" />
    {/if}
  {/each}
</div>

<style>
  .l1 {
    display: grid;
  }
  img {
    width: 100%;
  }
</style>
