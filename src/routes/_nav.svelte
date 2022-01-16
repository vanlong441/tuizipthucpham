<script>
   import Fb from "./_fb.svelte";
  import ZaloText from "./_zalo-text.svelte";
</script>

<div class="l1">

<nav>
  <a href="/">Trang chủ</a>
  <a href="tui-zip-giay-cua-so">Túi zip giấy cửa sổ</a>
  <a href="tui-zip-mot-mat-trong">Túi zip một mặt trong</a>
  <a href="tui-zip-tra-sua">Túi zip trà sữa</a>
  <a href="in-tui-zip-giay">In túi zip giấy</a>
  <a href="gioi-thieu">Giới thiệu</a>
  <a href="lien-he">Liên hệ</a>
  <!-- <Fb /> -->
  <!-- <ZaloText on:click={() => contact({ source: "zalo" })} /> -->
</nav>
<div class="l2">
    <input placeholder="Bạn cần tìm gì?" type="text">
    <i class="ri-search-line"></i>
</div>
</div>

<style>
  nav {
    font-family: 'Roboto', sans-serif;
  }
  .l1 {
    display:flex;
    justify-content: space-between;
  }
  .l2 {
display: flex;
  }
</style>