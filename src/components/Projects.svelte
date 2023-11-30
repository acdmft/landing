<script lang="ts">
    import { onMount } from "svelte";
  import Card from "./Card.svelte";
  import Sidebar from "./Sidebar.svelte";
  // Weather App
  let cardsInfo = [
    {
      title: "Photo gallery",
      text: "My personal Wordpress photo gallery.Made with Elementor and Visual Portfolio plugin. Deployed on DigitalOcean.",
      badges: ["Wordpress", "Elementor", "Visual Portfolio", "DigitalOcean"],
      src: "/gallery.png",
      // gitLink: "https://github.com/Green-Meet", 
      deplLink: "https://zhexigallery.art",
      alt: "wordpress photo gallery"
    },
    {
      title: "Sport coach landing",
      text: "Wordpress one page site for a sport coach. Made with Elementor. Deployed on OVHcloud.",
      badges: ["Wordpress", "Elementor", "OVH"],
      src: "/coach.png",
      // gitLink: "https://github.com/Green-Meet", 
      deplLink: "https://coach.zhexigallery.art",
      alt: "wordpress sport coach"
    },
    {
      title: "Weather App",
      text: "SPA built with React and OpenWeather API. Shows the current weather of the selected city. Has favorites section where you can add the cities that are most interesting to you.",
      badges: ["React", "Tailwindcss"],
      src: "/weather.png",
      gitLink: "https://github.com/acdmft/weather-app", 
      deplLink: "https://acdmft-weather-app.netlify.app/",
      alt: "weather app"
    },
    {
      title: "Memory Game",
      text: "Classic card game where you must find all paired cards. Made with React and Bootstrap. Components are written with JS classes, use lifecycle functions onMount, onDidUpdate and setState function.",
      badges: ["React", "Bootstrap"],
      src: "/memory.png",
      gitLink: "https://github.com/acdmft/memory-game", 
      deplLink: "https://acdmf-memo-game.netlify.app/",
      alt: "memory game board"
    },
    {
      title: "Peertuber",
      text: "Video preview gallery. Discover the Peertube videos and instances. Put likes, create playlists and add videos to them. Built with Svelte and Express.",
      badges: ["Svelte", "Node.js", "Express.js", "Mongodb"],
      src: "/Peertuber.png",
      gitLink: "https://github.com/acdmft/peertuber-front", 
      deplLink: "https://peertuber.vercel.app",
      alt: "peertuber home page"
    },
  ];

  let cards = [];
  
  onMount(()=>{
    cards = [...cards, cardsInfo.pop()]
  })

  function handleScroll() {
    const scrolledToBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 10);
    if (scrolledToBottom && cardsInfo.length !== 0) {
      const previousScrollY = window.scrollY;
      window.scroll(0, previousScrollY);
      // let card = cardsInfo.pop();
      cards = [...cards, cardsInfo.pop()];
    }
  }
</script>

<svelte:window on:scroll={handleScroll} />
<!-- SIDEBAR  -->
<Sidebar />

<h3 class="md:text-3xl text-lg font-semibold text-primary">My projects:</h3>
<div class="w-full md:w-5/6 mt-6 mx-auto flex flex-wrap justify-around">
  
  <div class="flex flex-wrap">
    {#each cards as card}
    <div class="card-wrapper md:mt-20 mt-8 mx-auto">
      <svelte:component this={Card}
        src={card.src}
        margins={"md:ml-4 mx-auto mt-4 "}
        title={card.title}
        text={card.text}
        badges={card.badges}
        gitLink={card.gitLink}
        deplLink={card.deplLink}
        alt={card.alt}
      />
    </div>
    {/each}
  </div>
</div>
<div class="h-10"></div>
