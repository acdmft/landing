<script lang="ts">
  import Card from './Card.svelte';
  import Sidebar from './Sidebar.svelte';
  // Weather App 
  let weatherAppText = "SPA built with React and OpenWeather API. Shows the current weather of the selected city. Has favorites section where you can add the cities that are most interesting to you."; 
  let weatherAppBadges = ["React", "Tailwindcss"];
  // Memory Game
  let memoryText = "Classic card game where you must find all paired cards. Made with React and Bootstrap. Components are written with JS classes, use lifecycle functions onMount, onDidUpdate and setState function.";
  let memoryBadges = ["React", "Bootstrap"];
  // Green meet 
  let greenText = "Functional React application. Where user can create events and join events. Uses Express and Postgresql in the backand. Work in team of developers inspired by Agile method"
  let greenBadges = ["React", "Express", "Postgresql", "Tailwindcss"]
  // Peertuber 
  let ptuberText = "Video preview gallery. Discover the Peertube videos and instances. Put likes, create playlists and add videos to them. Built with Svelte and Express."
  let ptuberBadges = ["Svelte", "Node.js", "Express.js", "Mongodb"]
</script>

<!-- SIDEBAR  -->
<Sidebar />

<h3 class="md:text-3xl text-md font-semibold text-primary">My projects:</h3>
<div class="w-5/6 mt-6 mx-auto flex flex-wrap jusify-around">
  <div class="flex flex-wrap">
    <Card src={"/weather-app.png"} margins={'md:ml-4 mx-auto mt-4 '} title={"Weather App"} text={weatherAppText} badges={weatherAppBadges} gitLink="https://github.com/acdmft/weather-app" deplLink="https://acdmft-weather-app.netlify.app/" />
    <Card src={"/memory.png"} margins={'md:ml-auto mx-auto mt-4 '} title={"Memory Game"} text={memoryText}  badges={memoryBadges} gitLink="https://github.com/acdmft/memory-game" deplLink="https://acdmf-memo-game.netlify.app/" />
    <Card src={"/meet.png"} margins={'md:ml-auto mx-auto mt-4 md:mr-4'} title={"Green Meet"} text={greenText} badges={greenBadges} gitLink="https://github.com/Green-Meet" deplLink="#" />
    <Card src={"/Peertuber.png"} margins={'md:ml-4 mx-auto mt-4 '} title={"Peertuber"} text={ptuberText} badges={ptuberBadges} gitLink="https://github.com/acdmft/peertuber-front" deplLink="https://peertuber.vercel.app" />
  </div>

</div>
<div class="h-10"></div>
