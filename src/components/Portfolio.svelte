<script>
    // Importing TailwindCSS
    // import 'tailwindcss/tailwind.css';

    // Sample data for portfolio items
    let portfolioItems = [
        { id: 1, title: "Peertuber", description: "Video preview gallery. Discover the Peertube videos and instances. Put likes, create playlists and add videos to them. Built with Svelte and Express.", imageUrl: "peertuber-thumb.png", url: "https://peertuber.vercel.app" },
        { id: 2, title: "WeatherApp", description: "SPA built with React and OpenWeather API. Shows the current weather of the selected city. Has favorites section where you can add the cities that are most interesting to you.", imageUrl: "weather-thumb.png", url: "https://acdmft-weather-app.netlify.app/" },
        { id: 3, title: "Memory Game", description: "Classic card game where you must find all paired cards. Made with React and Bootstrap.", imageUrl: "memory-thumb.png", url: "https://acdmf-memo-game.netlify.app/" },
        { id: 4, title: "Coach portfolio", description: "Wordpress one page site for a sport coach. Made with Elementor. Deployed on OVHcloud.", imageUrl: "coach-thumb.png", url: "https://coach.zhexigallery.art" },
        { id: 5, title: "Photo Gallery", description: "My personal Wordpress photo gallery. Made with Elementor and Visual Portfolio plugin. Deployed on DigitalOcean using WP docker image.", imageUrl: "gallery-thumb.png", url: "https://zhexigallery.art" },
        // ... add more items
    ];
</script>

<div class="container mx-auto mt-8 ">
    <div class="grid grid-cols-2 md:grid-cols-2 min-h-fit lg:grid-cols-3 gap-2 gap-y-4 md:gap-x-2 md:gap-y-8 bg-neutral-50 border-2 transition duration-700 hover:border-violet-600 border-violet-800 rounded-md py-8 px-8 slide-in-from-left duration-300">
        {#each portfolioItems as item}
            <div class="max-w-sm rounded overflow-hidden shadow-lg hover:bg-violet-800 transition duration-700 bg-violet-900 border-2 hover:border-violet-800 border-violet-900 max-h-20 md:max-h-fit">
                <a class="h-full " href="{item.url}" target="_blank">
                    <img class="w-full" src={item.imageUrl} alt={item.title} />
                    <div class="px-6 py-4 ">
                        <div class="font-bold text-xl mb-2">{item.title}</div>
                        <p class="text-neutral-100 text-base">
                            {item.description}
                        </p>
                    </div>
                </a>
            </div>
        {/each}
    </div>
</div>