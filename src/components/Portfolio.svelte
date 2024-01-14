<script>
    // Importing TailwindCSS
    // import 'tailwindcss/tailwind.css';

    // Sample data for portfolio items
    let portfolioItems = [
        { id: 1, title: "App 1", description: "Description for App 1", imageUrl: "peertuber-thumb.png" },
        { id: 2, title: "App 2", description: "Description for App 2", imageUrl: "weather-thumb.png" },
        { id: 3, title: "App 3", description: "Description for App 1", imageUrl: "memory-thumb.png" },
        { id: 4, title: "App 4", description: "Description for App 2", imageUrl: "coach-thumb.png" },
        { id: 5, title: "App 4", description: "Description for App 2", imageUrl: "gallery-thumb.png" },
        // ... add more items
    ];
</script>

<div class="container mx-auto mt-8 ">
    <div class="grid grid-cols-2 md:grid-cols-2 min-h-fit lg:grid-cols-3 gap-2 gap-y-4 md:gap-x-2 md:gap-y-8 bg-neutral-50 border-2 transition duration-700 hover:border-violet-600 border-violet-800 rounded-md py-8 px-8 slide-in-from-left duration-300">
        {#each portfolioItems as item}
            <div class="max-w-sm rounded overflow-hidden shadow-lg hover:bg-violet-800 transition duration-700 bg-violet-900 border-2 hover:border-violet-800 border-violet-900 max-h-20 md:max-h-fit">
                <img class="w-full" src={item.imageUrl} alt={item.title} />
                <div class="px-6 py-4 ">
                    <div class="font-bold text-xl mb-2">{item.title}</div>
                    <p class="text-neutral-100 text-base">
                        {item.description}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</div>