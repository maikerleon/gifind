<script>
	import LinkedinIcon from '$icons/LinkedinIcon.svelte';
	import GithubIcon from '$icons/GithubIcon.svelte';
    import PersonIcon from '$icons/PersonIcon.svelte';

</script>

<section class="flex justify-between items-center mb-8">
    <div>
        <a href="/" class="flex-row flex items-center gap-x-2 text-3xl font-semibold text-white/80 group">
            <img src="/logo.webp" class="w-10 group-hover:animate-pulse" alt="Gifind - find your GIF">
            Gifind
        </a>
    </div>
    <div class="flex gap-x-5 items-center mr-2 justify-center">
        <a href="https://github.com/maikerleon" target="_blank" class="hover:text-white/80 hover:scale-[1.15] duration-500 transition-all">
            <GithubIcon size={30} />
        </a>
        <a href="https://personal-portfolio-alpha-one.vercel.app/" target="_blank" class="hover:text-white/80 hover:scale-[1.15] duration-500 transition-all">
            <PersonIcon size={30} />
        </a>
        <a href="https://www.linkedin.com/in/maiker-leon-azuaje/" target="_blank" class="hover:text-white/80 hover:scale-[1.15] duration-500 transition-all">
            <LinkedinIcon size={35} />
        </a>
    </div>
</section>