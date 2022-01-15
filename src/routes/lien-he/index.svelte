<script context="module">
  import { db } from "../db";
  import { DateTime } from "luxon";

  export async function load({ params, fetch, session, stuff }) {
    let res = await db.allDocs({ include_docs: true });
    let docs = res.rows.map((row) => row.doc);
    return { props: { docs } };
  }
</script>

<script>
  export let docs;
</script>

<div class="l1">
  {#each Object.keys(docs[0]) as key}
    {#if !key.startsWith("_")}
      <div class="key">{key}</div>
    {/if}
  {/each}
  {#each docs.sort((a,b) => a.time < b.time) as doc}
    {#each Object.keys(doc) as key}
      {#if !key.startsWith("_")}
        <div class="value">
          {key === "time"
            ? DateTime.fromISO(doc[key]).setLocale("vi").toLocaleString(DateTime.DATETIME_SHORT)
            : doc[key]}
        </div>
      {/if}
    {/each}
  {/each}
</div>

<style>
  .l1 {
    max-width: 100%;
    width: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.25rem;
    border: 1px solid black;
    padding: 0.5rem;
  }
  .key {
    font-weight: bold;
  }
</style>
