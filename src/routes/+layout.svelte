<script>
    import "../app.css";
	import Footer from '$components/Footer.svelte';
	import Tags from '$components/Tags.svelte';
	import Search from '$components/Search.svelte';
    import Header from "$components/Header.svelte";
</script>

<div class="flex justify-center w-full min-h-screen" data-theme="dark">
    <div class="max-w-screen-xl w-full px-5 pt-6 flex flex-col">
        <Header />
        <Search />
        <Tags />
        <main class="flex-grow mt-10">
            <slot />
        </main>
        <Footer />
    </div>
</div>
