<script>
    import { onMount } from "svelte";
    import { page } from '$app/stores';
    import TrendingIcon from "$icons/TrendingIcon.svelte";
    import ArticleGif from "$components/ArticleGif.svelte";

    let search = $page.params.string.replace(/-/g, " ");
    let load = false;
    let gifs = [];
    let API_KEY = 'YOUR_API_KEY';

    onMount( async () => {
        await searchGifs();
        load = true;
    });

    const searchGifs = async () => {
        gifs = [];
        await fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=40`)
            .then((res) => res.json())
            .then((data) => gifs = data.data);
    };
    
    $: if($page.params.string) {
        if(load) {
            search = $page.params.string.replace(/-/g, " ");
            searchGifs();
        }
    }

</script>
<div>
    <header class="flex items-center gap-x-2">
        <TrendingIcon size={40} />
        <h1 class="text-2xl">Gifs found</h1>
    </header>
    <section class="grid grid-cols-4 gap-8 mt-8">
        {#each gifs as gif }
            <div class="custom-articles">
                <ArticleGif {gif} />
            </div>
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

<style>
    @keyframes show {
        from {
            opacity: 0.50;
            scale: 75%;
        }
        to {
            opacity: 1;
            scale: 100%;
        }
    }

    .custom-articles {
        view-timeline-name: --article;
        view-timeline-axis: block;
        animation-timeline: --article;
        animation-name: show;
        animation-range: entry 1% cover 50%;
        animation-fill-mode: both;
    }
</style>