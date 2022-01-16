<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<!-- <a on:click={() => dispatch("click")} href="#">0906663532</a> -->
<a on:click|preventDefault={() => dispatch("click")} href="https://zalo.me/0906663532">0906663532</a>
