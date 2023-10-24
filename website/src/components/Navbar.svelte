<script>
    import GittyUpLogoWhite from '../images/GittyUp_Logo_White.svelte';
</script>

<header
	aria-label="Site Header"
	class="w-full bg-zinc-800 backdrop-filter backdrop-blur-lg bg-opacity-30 fixed border-b-2 border-zinc-900 border-opacity-10 z-20"
>
	<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- LOGO BRANDING -->
			<div class="">
				<a class="block" href="/">
					<span class="sr-only">Home</span>
					<GittyUpLogoWhite height="35" />
				</a>
			</div>
			
			<!-- NAVIGATION BUTTONS -->
			<div class="md:flex md:items-center md:gap-12">
				<nav aria-label="Site Nav" class="hidden md:block">
					<ul class="flex items-center gap-6 text-sm">
						<li>
							<a class="text-gray-200 transition hover:text-gray-300/75" href="/"> OSC Home </a>
						</li>

						<li>
							<a class="text-gray-200 transition hover:text-gray-300/75" href="www.oscvitap.org/team"> Team </a>
						</li>

						<li>
							<a class="text-gray-200 transition hover:text-gray-300/75" href="www.oscvitap.org/events"> Events </a>
						</li>

						<li>
							<a class="text-gray-200 transition hover:text-gray-300/75" href="oscvitap.org/contact">
								Contact
							</a>
						</li>
					</ul>
				</nav>

		</div>
	</div>
</header>