<script lang="ts">
  import Typewriter from 'svelte-typewriter';
  import Sidebar from '../components/Sidebar.svelte';
  
  let src = '/bussiness-man.png'

</script>

<div class="grid grid-col-2 content-around h-80 my-auto">
  <div class="avatar">
    <div class="w-20 md:w-24 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-2">
      <img {src} alt="avatar" class="min-h-[107%]" />
    </div>
  </div>
  <div>
    <h1 class="relative z-10 md:text-5xl text-xl font-semibold text-primary">Andrei Zheksi</h1>
    <Typewriter interval={100} loop={2000} cursor=true>
      <h1 class="relative z-10 md:text-4xl text-lg mt-2 md:mt-4 text-secondary">Developer web full stack</h1>
    </Typewriter>
  </div>
</div>
<!----------------     BUTTONS       -------------------->
<div class="mt-4 md:mt-6 relative z-20">

  <a type="button" href="/projects" class="btn hover:bg-success btn-info mr-4">Projects</a>
  <a type="button" href="/contact" class="btn btn-outline btn-accent">Contact me</a>
</div>

<!-- SIDEBAR -->
<Sidebar />


<!----------------      BACKGROUND IMAGE    ------------->
<div class="absolute right-0 top-1/3 md:top-10 w-1/2 md:w-1/3">
  <svg
  viewBox="0 0 486 534"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"  
>
  <circle cx={167} cy={60} r={60} fill="#ffb86b" />
  <circle cx={37.5} cy={215.5} r={37.5} fill="#8be8fd" />
  <path    
    d="M486 144.469c-38.145-31.86-87.255-51.033-140.842-51.033-121.415 0-219.842 98.427-219.842 219.842 0 14.167 1.34 28.02 3.9 41.441 47.414-86.154 91.678-142.17 146.717-170.767 56.069-29.132 121.816-29.08 210.067-6.68v-32.803zm0 48.288v289.33c-38.145 31.86-87.255 51.033-140.842 51.033-100.321 0-184.947-67.197-211.325-159.037l1.502.805c49.937-93.22 94.046-149.844 147.514-177.625 52.014-27.025 114.411-27.498 203.151-4.506z"
    fill="#8be8fd"
  />
</svg>
</div>

