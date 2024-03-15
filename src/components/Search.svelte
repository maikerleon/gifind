<script>
    import { page } from '$app/stores';
    import {goto} from '$app/navigation';
    import SearchIcon from "$icons/SearchIcon.svelte";

    let search = '';

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        goto(`/gifs/${event.target.value}`);
      }
    }

    const updateSearch = () => search = $page.params.string.replace(/-/g, " ");
    const resetSeach = () => search = '';
    
    $: if($page.params.string) {
      updateSearch();
    }

    $: if($page.route.id) {
      if( $page.route.id === '/') {
        resetSeach();
      }
    }

</script>

<section>
    <label class="input input-bordered flex items-center gap-2">
        <input type="text" class="grow" placeholder="Search your GIF" name="search" bind:value={search} on:keypress={(e) => handleKeyPress(e)} />
        <SearchIcon size={25} />
    </label>
</section>