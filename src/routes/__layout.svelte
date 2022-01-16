<script>
  import { db } from "./db";
  import { DateTime } from "luxon";
  import { goto } from "$app/navigation";

  import Nav from "./_nav.svelte";
  import Header from "./_header.svelte";
  import Footer from "./_footer.svelte";

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
    await db.post(new Instance({ source: "zalo", ip }));
    goto("https://zalo.me/0906663532");
  }
</script>

<svelte:head>
  <meta name="google-site-verification" content="IwPpzAGfTpJsu7xO_uU2TIQHWW935iD8Ze-nbok01Mk" />
  <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
  <script src="https://code.iconify.design/2/2.1.1/iconify.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Playball&display=swap" rel="stylesheet" />
</svelte:head>

<div class="l1">
  <Header />
  <Nav />
  <div class="l2">
    <main>
      <slot />
    </main>
  </div>
  <br>
  <Footer />
</div>

<style>
  :global(body) {
    margin: 0
  }
  .l1 {
    display: grid;
    gap: 1rem;
  }
  .l2 {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
