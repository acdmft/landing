<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from 'svelte/transition';
  // image source and margins of the card
  export let src;
  export let margins;
  // title of the card
  export let title;
  //card's text
  export let text;
  // card's badges
  export let badges;
  // project's links
  export let gitLink = "";
  export let deplLink;
  export let alt;
  onMount(()=>{
    console.log('Mounted successfully')
  })
</script>

<div class="card max-w-[80em] bg-slate-500 shadow-xl {margins}" transition:fade|local={{delay:250, duration: 3000}}>
  <figure class="h-30">
    <a href={deplLink} target="_blank">

      <img {src} {alt} />
    </a>
  </figure>
  <div class="card-body px-2 py-4 md:px-4 md:py-4">
    <h2 class="card-title text-base md:text-lg">{title}</h2>
    <p class="text-left text-sm md:text-base">{text}</p>
    <div class="card-actions justify-end">
      {#if gitLink}
      <a href={gitLink} target="_blank" class="card-link leading-tight" 
        >View source</a
      >
      |
      {/if}
      <a href={deplLink} target="_blank" class="card-link leading-tight">Live demo</a>
    </div>
    <div class="card-actions justify-end">
      {#if badges.length > 0}
        {#each badges as badge}
        <div class="badge badge-outline">{badge}</div>
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .card-link {
    padding: 0.2rem 0;
    font-size: 0.9rem;
    letter-spacing: 0;
    cursor: pointer;
    color: white;
    text-decoration: none;
    background-image: linear-gradient(120deg, #ff7ac6 100%, #ff7ac6 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
  }

  .card-link:hover {
    background-size: 100% 88%;
  }
</style>
