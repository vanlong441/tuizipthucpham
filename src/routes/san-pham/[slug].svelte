<script context="module">
  import { db } from "../db";
  export async function load({ url, params, fetch }) {
    let res = await db.query("everything/by-type", {
      startkey: ["page"],
      include_docs: true,
    });
    if (res.total_rows === 1) {
      let doc = res.rows[0].doc;
      return {
        props: {
          doc,
        },
      };
    }
    return {
      error: new Error(`Could not load ${url}`),
    };
  }
</script>

<script>
  import Calculator from "./_components/calculator.svelte";
  export let doc;
  $: sections = doc.sections || [];
  $: title = doc.title || "";
  $: maxPrice = doc.maxPrice || 0;
  $: minPrice = doc.minPrice || 0;
</script>

<div class="l0">
  <div class="l1">
    <h1>{title}</h1>
    <ol class="toc">
      {#each sections as section}
        <li>
          <a href="#{section.heading}">
            {#if section.heading.includes("giá")}
              <span class="iconify" data-icon="bi:arrow-right" style="color: red;" />
              <b style="font-size: 1.1rem">
                {section.heading}
                {new Date().getFullYear()}
              </b>
            {:else}
              {section.heading}
            {/if}
          </a>
        </li>
      {/each}
    </ol>
  </div>
  {#each sections as section}
    <div id={section.heading} class="l1 section">
      <h2>
        {section.heading}
      </h2>
      <p>
        {@html section.text}
      </p>
    </div>
    {#if section.images}
      <div
        style="grid-template-columns: repeat({section.images.length}, 1fr)"
        class="sub-section images"
      >
        {#each section.images as image}
          <img
            style="height: {section.images.length === 1 ? 400 : 250}px"
            src="/san-pham/{image}.jpg"
            alt=""
          />
        {/each}
      </div>
    {/if}
    {#if section.heading.toLowerCase().includes("giá")}
      <div class="sub-section">
        <Calculator {maxPrice} {minPrice}/>
      </div>
    {/if}
  {/each}
</div>

<style>
  .l0 {
    display: grid;
    gap: 1rem;
  }
  .l1 {
    background: white;
    padding: 2rem 4rem;
    box-sizing: border-box;
  }
  h2,
  p,
  ol {
    font-family: Roboto;
  }
  h1 {
    font-family: Montserrat;
    font-weight: bolder;
    text-transform: uppercase;
    margin-top: 0;
    color: #06ac06;
    padding-left: 1rem;
  }
  h2 {
    color: #06ac06;
    letter-spacing: 2px;
    font-weight: normal;
  }
  ol {
    margin: 0;
  }
  .toc {
    display: grid;
    gap: 0.5rem;
  }
  .toc a {
    text-decoration: none;
  }
  .section {
    border-left: 4px solid #06ac06;
    letter-spacing: 1px;
    line-height: 1.5rem;
  }
  .sub-section {
    border-left: 4px solid white;
    display: grid;
    justify-content: center;
    justify-items: center;
    background: white;
    padding: 2rem 4rem;
    box-sizing: border-box;
  }
</style>
