<script>
  import ShortHeader from "./short-header.svelte";
</script>

<div class="l0">
  <ShortHeader text="zz" />
  <div class="l1">
    <div class="l2">
      <img src="/logo.png" alt="" />
      <div class="l3">
        <div class="name">Túi zip thực phẩm</div>
        <div class="description">Chuyên cung cấp sỉ và lẻ</div>
      </div>
    </div>
    <div class="l2">
      <span class="iconify" data-icon="carbon:phone-voice" />
      <div class="l3">
        <div class="text">090 276 0975</div>
        <div class="text">076 308 7170</div>
      </div>
    </div>
  </div>
</div>

<style>
  .l1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Roboto", sans-serif;
    padding: 2rem calc((100% - 1200px) / 2);
    color: white;
    background: darkcyan;
  }
  img {
    height: 5rem;
  }
  .l2 {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .iconify {
    font-size: 3.75rem;
  }
  .l3 {
    display: grid;
    align-items: center;
    gap: 0.25rem;
  }
  .text {
    font-size: 1.5rem;
  }
  .name {
    font-weight: bold;
    font-size: 2.25rem;
    /* font-family: Montserrat; */
  }
  .description {
    font-size: 1.5rem;
  }
</style>
