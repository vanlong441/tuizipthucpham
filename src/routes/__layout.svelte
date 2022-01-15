<script>
  import { db } from "./db";
  import Fb from "./_fb.svelte";
  import ZaloText from "./_zalo-text.svelte";
  import { DateTime } from "luxon";
  class Instance {
    constructor({ ip, source }) {
      this.ip = ip;
      this.source = source;
      this.time = DateTime.now().toString();
    }
  }

  async function contact({ source }) {
    let ip = await fetch("api.json");
    ip = (await ip.json()).ip;
    db.post(new Instance({ source: "zalo", ip }))
  }
</script>

<svelte:head>
  <meta name="google-site-verification" content="IwPpzAGfTpJsu7xO_uU2TIQHWW935iD8Ze-nbok01Mk" />
</svelte:head>

<nav>
  <a href="/">Home</a>
  <a href="tui-zip-giay">Túi zip giấy</a>
  <a href="lien-he">Lien he</a>
  <!-- <Fb /> -->
  <ZaloText on:click={() => contact({ source: "zalo" })} />
</nav>

<slot />
