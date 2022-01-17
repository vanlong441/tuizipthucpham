<script>
  import Fb from "./fb.svelte";
  import Search from "./search.svelte";
  import ZaloText from "./zalo-text.svelte";
</script>

<div class="l1">
  <nav>
    <a href="/">Trang chủ</a>
    <a href="/san-pham/tui-zip-giay-cua-so">Túi zip giấy cửa sổ</a>
    <a href="/san-pham/tui-zip-mot-mat-trong">Túi zip một mặt trong</a>
    <a href="/san-pham/tui-zip-tra-sua">Túi zip trà sữa</a>
    <a href="/in-tui-zip-giay">In túi zip giấy</a>
    <a href="/gioi-thieu">Giới thiệu</a>
    <a href="/lien-he">Liên hệ</a>
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
    gap: 0.5rem;
    font-family: "Roboto", sans-serif;
    border-radius: 3px;
  }
  a {
    border-radius: 4px;
    border: none;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 9%);
    background: #06ac06;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 0.75rem;
    box-sizing: border-box;
    font-size: 0.85rem;

    /* font-weight: bold; */
    letter-spacing: 1px;
  }
  a:hover {
    background: #098809;
  }
</style>
