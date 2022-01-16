<script>
  import ShortHeader from "../_trang-chu/_short-header.svelte";

  let infos = [
    {
      icon: `<span class="iconify" data-icon="carbon:phone-incoming-filled"></span>`,
      // icon: `<span class="iconify" data-icon="carbon:phone-incoming-filled" style="color: #ffffff;"></span>`,
      text: "Hotline: 0902 760 975",
      value: "tel:0902 760 975",
    },
    {
      icon: `<span class="iconify" data-icon="ci:youtube"></span>`,
      // icon: `<span class="iconify" data-icon="ci:youtube" style="color: #f70000;"></span>`,
      text: "Youtube",
      value: "https://www.youtube.com/channel/UCUHdHe7MVSBjI8pRqHS0_Sw",
      color: "#f70000",
    },
    {
      icon: `<span class="iconify" data-icon="ci:facebook"></span>`,
      // icon: `<span class="iconify" data-icon="ci:facebook" style="color: #4064ac;"></span>`,
      text: "Facebook",
      value: "https://www.facebook.com/tuizipthucpham",
      color: "#4064ac",
    },
    {
      icon: `<span class="iconify" data-icon="el:shopping-cart-sign"></span>`,
      // icon: `<span class="iconify" data-icon="el:shopping-cart-sign" style="color: #e74c2b;"></span>`,
      text: "Shopee",
      value: "https://shp.ee/5aijyxg",
      color: "#e74c2b",
    },
    {
      icon: `<span class="iconify" data-icon="el:shopping-cart-sign"></span>`,
      // icon: `<span class="iconify" data-icon="el:shopping-cart-sign" style="color: #ef066a;"></span>`,
      text: "Lazada",
      value: "https://www.lazada.vn/shop/tui-zip-thuc-pham-mis/",
      color: "#ef066a",
    },
  ];
</script>

<div class="l0">
  <div class="l1">
    <div class="l2 infos">
      {#each infos as info}
        <div class="l3">
          <div class="icon">
            {@html info.icon}
          </div>
          <a href={info.value} class="text">{info.text}</a>
        </div>
      {/each}
    </div>
    <div class="l2 map">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            title="Map"
            width="100%"
            height="200px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=90%20l%C3%AA%20l%C3%A2m%20t%C3%A2n%20ph%C3%BA&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          /><a href="https://fmovies-online.net">fmovies</a><br /><style>
            .mapouter {
              position: relative;
              text-align: right;
              width: 100%;
              height: 200px;
            }
          </style><a href="https://www.embedgooglemap.net" /><style>
            .gmap_canvas {
              overflow: hidden;
              background: none !important;
              width: 100%;
              height: 200px;
            }
          </style>
        </div>
      </div>
    </div>
  </div>
  <ShortHeader text={"© Túi Zip Thực Phẩm " + new Date().getFullYear()} />
</div>

<style>
  .l0 {
    display: grid;
  }
  .l1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 3rem calc((100% - 1200px) / 2);
    color: white;
    background: darkcyan;
  }
  .l2 {
    display: grid;
    align-items: flex-start;
    align-content: flex-start;
  }
  .infos {
    display: grid;
    gap: 1.5rem;
  }
  .l3 {
    display: grid;
    grid-template-columns: 1rem max-content;
    align-items: center;
    gap: 0.5rem;
    font-family: Roboto;
  }
  a {
    color: white;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    letter-spacing: 1px;
  }
  a:hover {
    border-bottom: 1px solid white;
  }
  .icon {
    height: 100%;
    display: flex;
    align-items: center;
    transform: scale(1.25);
  }
</style>
