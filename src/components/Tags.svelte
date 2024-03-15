<script>
  import { onMount } from "svelte";
  import CustomBadge from "./CustomBadge.svelte";
  
  let tags = [];
  let API_KEY = 'YOUR_API_KEY';

  onMount( async () => {
    await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10`)
      .then((res) => res.json())
      .then((data) => tags = data.data);
  });

</script>
<section class="flex gap-2 mt-6 flex-wrap">
    {#each tags as {title}, idx }
        <CustomBadge tag={title} />
    {:else}
        <div class="skeleton w-96 h-[30px] rounded-md"></div>
        <div class="skeleton w-36 h-[30px] rounded-md"></div>
        <div class="skeleton w-44 h-[30px] rounded-md"></div>
        <div class="skeleton w-80 h-[30px] rounded-md"></div>
        <div class="skeleton w-32 h-[30px] rounded-md"></div>
        <div class="skeleton w-72 h-[30px] rounded-md"></div>
        <div class="skeleton w-36 h-[30px] rounded-md"></div>
        <div class="skeleton w-56 h-[30px] rounded-md"></div>
        <div class="skeleton w-80 h-[30px] rounded-md"></div>
        <div class="skeleton w-32 h-[30px] rounded-md"></div>
        <div class="skeleton w-72 h-[30px] rounded-md"></div>
        <div class="skeleton w-32 h-[30px] rounded-md"></div>
        <div class="skeleton w-56 h-[30px] rounded-md"></div>
        <div class="skeleton w-80 h-[30px] rounded-md"></div>
    {/each}
</section>