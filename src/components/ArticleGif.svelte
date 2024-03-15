<script>
    import Swal from "sweetalert2";
    export let gif;

    const {title, images} = gif;

    const handleCopyGif = () => {
        navigator.clipboard.writeText(images.original.url);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Gif successfully copied",
            showConfirmButton: false,
            timer: 1500
        });
    }
    
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<article class="hover:scale-105 transition-all duration-300 w-full h-60 overflow-hidden rounded-md skeleton" on:click={handleCopyGif} on:keypress={handleCopyGif} role="button">
    <img src={images.original.url} alt="{title}" class="w-full h-full object-cover">
</article>