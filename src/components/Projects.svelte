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
  // Apm radio 
  let radioText = "Online radio site with live chat. After connecting to the site (login or signup) user can participate in discussions in the chat. Built with Ruby on Rails. Uses websockets with the help of Action Cable and Redis."
  let radioBadges = ["Ruby on Rails", "Node.js", "webpack", "redis"]
</script>

<!-- SIDEBAR  -->
<Sidebar />

<h1 class="md:text-5xl text-xl font-semibold text-primary">Projects I've built</h1>
<div class="w-5/6 mt-6 mx-auto flex flex-wrap jusify-around">
  <div class="flex flex-wrap">
    <Card src={"/weather-app.png"} margins={'md:ml-4 mx-auto mt-4 flex-none shrink-0'} title={"Weather App"} text={weatherAppText} badges={weatherAppBadges} gitLink="https://github.com/acdmft/weather-app" deplLink="https://acdmft-weather-app.netlify.app/" />
    <Card src={"/memory.png"} margins={'md:ml-auto mx-auto mt-4 flex-none srink-0'} title={"Memory Game"} text={memoryText}  badges={memoryBadges} gitLink="https://github.com/acdmft/memory-game" deplLink="https://acdmf-memo-game.netlify.app/" />
    <Card src={"/meet.png"} margins={'md:ml-auto mx-auto mt-4 md:mr-4 flex-none srink-0'} title={"Green Meet"} text={greenText} badges={greenBadges} gitLink="https://github.com/Green-Meet" deplLink="#" />
    <Card src={"/radio.png"} margins={'md:ml-4 mx-auto mt-4 flex-none'} title={"Apm Radio"} text={radioText} badges={radioBadges} gitLink="https://bitbucket.org/stgmft/apm_radio/src/master/" deplLink="https://apm-radio.herokuapp.com/" />
  </div>

</div>
<div class="h-10"></div>
