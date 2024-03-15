<script>
    import { onMount } from "svelte";
    import TrendingIcon from "$icons/TrendingIcon.svelte";
    import ArticleGif from "$components/ArticleGif.svelte";

    let gifs = [];
    let API_KEY = 'qgCO5ESnIKrH8g5YRpmh7F6odZ5eIPjQ';

    onMount( async () => {
        await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`)
        .then((res) => res.json())
        .then((data) => gifs = data.data);
    });

</script>
<div>
    <header class="flex items-center gap-x-2">
        <TrendingIcon size={40} />
        <h1 class="text-2xl">Trending now</h1>
    </header>
    <section class="grid grid-cols-4 gap-8 mt-8">
        {#each gifs as gif }
            <ArticleGif {gif} />
        {:else}
            <article class="w-full h-60 overflow-hidden rounded-md skeleton"></article>
            <article class="w-full h-60 overflow-hidden rounded-md skeleton"></article>
            <article class="w-full h-60 overflow-hidden rounded-md skeleton"></article>
            <article class="w-full h-60 overflow-hidden rounded-md skeleton"></article>
            <article class="w-full h-60 overflow-hidden rounded-md skeleton"></article>
            <article class="w-full h-60 overflow-hidden rounded-md skeleton"></article>
            <article class="w-full h-60 overflow-hidden rounded-md skeleton"></article>
            <article class="w-full h-60 overflow-hidden rounded-md skeleton"></article>
            <article class="w-full h-60 overflow-hidden rounded-md skeleton"></article>
            <article class="w-full h-60 overflow-hidden rounded-md skeleton"></article>
            <article class="w-full h-60 overflow-hidden rounded-md skeleton"></article>
        {/each}
    </section>
</div>