<script>
    export let tag;
</script>

<a href="/gifs/{tag.replace(/\s+/g, '-')}" class="rounded-lg border border-gray-600 px-3 py-1 text-sm hover:text-white/80 transition-all hover:border-white/80 duration-500">#{tag}</a>