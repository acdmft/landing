<script lang="ts">
    import { onMount } from "svelte";
  import Card from "./Card.svelte";
  import Sidebar from "./Sidebar.svelte";
  // Weather App
  let cardsInfo = [
    {
      title: "Weather App",
      text: "SPA built with React and OpenWeather API. Shows the current weather of the selected city. Has favorites section where you can add the cities that are most interesting to you.",
      badges: ["React", "Tailwindcss"],
      src: "/weather-app.png",
      gitLink: "https://github.com/acdmft/weather-app", 
      deplLink: "https://acdmft-weather-app.netlify.app/"
    },
    {
      title: "Memory Game",
      text: "Classic card game where you must find all paired cards. Made with React and Bootstrap. Components are written with JS classes, use lifecycle functions onMount, onDidUpdate and setState function.",
      badges: ["React", "Bootstrap"],
      src: "/memory.png",
      gitLink: "https://github.com/acdmft/memory-game", 
      deplLink: "https://acdmf-memo-game.netlify.app/"
    },
    {
      title: "Green Meet",
      text: "Functional React application. Where user can create events and join events. Uses Express and Postgresql in the backand. Work in team of developers inspired by Agile method",
      badges: ["React", "Express", "Postgresql", "Tailwindcss"],
      src: "/meet.png",
      gitLink: "https://github.com/Green-Meet", 
      deplLink: "#"
    },
    {
      title: "Peertuber",
      text: "Video preview gallery. Discover the Peertube videos and instances. Put likes, create playlists and add videos to them. Built with Svelte and Express.",
      badges: ["Svelte", "Node.js", "Express.js", "Mongodb"],
      src: "/Peertuber.png",
      gitLink: "https://github.com/acdmft/peertuber-front", 
      deplLink: "https://peertuber.vercel.app"
    },
  ];

  let cards = [];
  
  onMount(()=>{
    cards = [...cards, cardsInfo.pop()]
  })

  function toggleCard(n) {
    // console.log(cards.indexOf(cardsInfo[n-1]));
    if (cards.indexOf(cardsInfo[n-1]) == -1) {
      cards = [...cards, cardsInfo[n-1]]
	  }
  }

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

<h3 class="md:text-3xl text-md font-semibold text-primary">My projects:</h3>
<div class="w-5/6 mt-6 mx-auto flex flex-wrap jusify-around">
  
  <div class="flex flex-wrap">
    {#each cards as card}
    <div class="card-wrapper mt-20">
      <svelte:component this={Card}
        src={card.src}
        margins={"md:ml-4 mx-auto mt-4 "}
        title={card.title}
        text={card.text}
        badges={card.badges}
        gitLink={card.gitLink}
        deplLink={card.deplLink}
      />
    </div>
    {/each}
  </div>
</div>
<div class="h-10"></div>
