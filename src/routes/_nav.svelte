<script>
  import Fb from "./_fb.svelte";
  import Search from "./_search.svelte";
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
  <Search />
</div>

<style>
  .l1 {
    display: flex;
    justify-content: space-between;
    padding: 1rem calc((100% - 1200px) / 2);
    justify-items: center;
  }
  nav {
    display: flex;
    gap: 0rem;
    font-family: "Roboto", sans-serif;
    border-radius: 3px;
    background: #06ac06;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 9%);
  }
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    box-sizing: border-box;
    font-size: 0.9rem;
    /* font-weight: bold; */
    letter-spacing: 1px;
  }
  a:not(:last-child) {
    border-right: 1px solid rgb(14, 148, 14);
  }
  a:hover {
    background: #098809;
  }
</style>
