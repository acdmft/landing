<script lang="ts">
  import router from "page";
  // components and pages
  import Navbar from "./components/Navbar.svelte";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";
  import Contact from "./components/Contact.svelte";
  import Projects from "./components/Projects.svelte";


  let page;
  //routes
  router("/", () => (page = Home));
  router("/about", () => (page = About));
  router("/contact", () => (page = Contact));
  router("/projects", () => (page = Projects));

  router.start();
</script>

<Navbar />
<main class="text-center p-4 mx-0">
  <svelte:component this={page} />
</main>
