<script>
  let banners = [1, 2, 3, 4, 5];
  let index = 0;
  let wrapper = null;

  function next() {
    index = index + 1;
    if (index === banners.length) {
      index = 0;
      slide(0)
    } else {
      let x = index * -1200;
      slide(x)
    }
  }

  function previous() {
    index = index - 1;
    if (index === -1) {
      index = banners.length - 1;
      let x = index * -1200;
      slide(x)
    } else {
      let currentX = parseInt(wrapper.style.transform.match(/\((.+)px\)/)[1]);
      let x = currentX + 1200;
      slide(x)
    }
  }

  function slide(x) {
    wrapper.style.transform = `translateX(${x}px)`;
  }
</script>

<div class="l1">
  <div on:click={previous} class="wrapper left">
    <i class="ri-arrow-left-circle-fill"></i>
  </div>
  <div bind:this={wrapper} class="l2">
    {#each banners as banner}
      <img src="banners/{banner}.png" alt="" />
    {/each}
  </div>
  <div on:click={next} class="wrapper right">
    <i class="ri-arrow-right-circle-fill"></i>
  </div>
</div>

<style>
  .l1 {
    display: flex;
    overflow: hidden;
    width: 100%;
    align-items: center;
    position: relative;
  }
  .l2 {
    display: flex;
    transition: all ease 0.25s;
  }
  .wrapper {
    position: absolute;
    z-index: 1;
  }
  i {
    font-size: 3rem;
    color: rgba(0, 0, 0, 0.25);
    user-select: none;
  }
  i:hover {
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .left {
    left: 1rem;
  }
  .right {
    right: 1rem;
  }
</style>
