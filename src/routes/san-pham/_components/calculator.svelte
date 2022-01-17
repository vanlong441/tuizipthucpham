<script>
  import { onMount } from "svelte";
  import { DateTime } from "luxon";
  let sizes = [
    {
      text: "Size 1",
      minPrice: 10000,
      maxPrice: 11000,
      weight: 100,
      price: 0,
      amount: 0,
      total: 0,
    },
    {
      text: "Size 2",
      minPrice: 20000,
      maxPrice: 22000,
      weight: 200,
      price: 0,
      amount: 0,
      total: 0,
    },
    {
      text: "Size 3",
      minPrice: 30000,
      maxPrice: 33000,
      weight: 300,
      price: 0,
      amount: 0,
      total: 0,
    },
    {
      text: "Size 4",
      minPrice: 40000,
      maxPrice: 44000,
      weight: 400,
      price: 0,
      amount: 0,
      total: 0,
    },
    {
      text: "Size 5",
      minPrice: 50000,
      maxPrice: 55000,
      weight: 500,
      price: 0,
      amount: 0,
      total: 0,
    },
    {
      text: "Size 6",
      minPrice: 60000,
      maxPrice: 66000,
      weight: 600,
      price: 0,
      amount: 0,
      total: 0,
    },
    {
      text: "Size 7",
      minPrice: 70000,
      maxPrice: 77000,
      weight: 700,
      price: 0,
      amount: 0,
      total: 0,
    },
    {
      text: "Size 8",
      minPrice: 80000,
      maxPrice: 88000,
      weight: 800,
      price: 0,
      amount: 0,
      total: 0,
    },
  ];
  onMount(() => {
    sizes = sizes.map((size) => {
      return {
        ...size,
        price: getPrice(size),
      };
    });
  });
  function getPrice(size) {
    let { minPrice, maxPrice } = size;
    return Math.floor(Math.random() * (maxPrice - minPrice)) + minPrice;
  }
  function getDay() {
    let time = DateTime.now();
    return time.setLocale("vi").toLocaleString(DateTime.DATE_SHORT); //=>  'Thursday, 4/20/2017'
  }
</script>

<h3>Cập nhật {getDay()}</h3>

<div class="l1">
  <div class="head cell">Kích thước</div>
  <div class="head cell">Khối lượng</div>
  <div class="head cell">Đơn giá</div>
  <div class="head cell">Số lượng</div>
  <div class="head cell">Thành tiền</div>
  {#each sizes as size}
    <div class="cell">{size.text}</div>
    <div class="cell">{size.weight}</div>
    <div class="cell">{size.price}</div>
    <div
      on:keyup={(event) => {
        size.amount = event.target.innerText;
        size.total = size.price * size.amount;
      }}
      contenteditable="true"
      class="cell"
    >
      {@html "&nbsp;"}
    </div>
    <div class="cell">{size.total > 0 ? size.total.toLocaleString() : ""}</div>
  {/each}
</div>

<style>
  h3 {
    font-family: Montserrat;
    color: #008b8b;
  }
  .l1 {
    display: grid;
    grid-template-columns: repeat(5, 10rem);
    border: 1px solid #008b8b;
    font-family: Roboto;
  }
  .head {
    background: #008b8b;
    color: white;
  }
  .cell {
    padding: 0.15rem 0.25rem;
    display: flex;
    justify-content: center;
    border: 1px solid #008b8b;
  }
</style>
