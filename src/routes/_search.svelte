<script>
  export let shadow = true
</script>

<div class:shadow class="l2">
  <input placeholder="Bạn cần tìm gì?" type="text" />
  <span class="iconify" data-icon="eva:search-fill" />
</div>

<style>
  .shadow {
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 9%);
  }
  .l2 {
    display: flex;
    height: 2.5rem;
    box-sizing: border-box;
    padding: 0.5rem;
    border-radius: 2px;
    background: #fff;
    align-items: center;
  }
  input {
    display: flex;
    flex: 1;
    align-items: center;
    outline: none;
    border: 0;
    padding: 0 1rem;
    margin: 0;
    box-sizing: border-box;
  }
  .iconify {
    font-size: 1.5rem;
    color: #999;
  }
</style>
