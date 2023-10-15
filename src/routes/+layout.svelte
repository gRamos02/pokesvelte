<script>
	import '../app.css';
	import { AppBar, AppShell, Avatar } from '@skeletonlabs/skeleton';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"><h1 class="text-2xl font-bold">PokeSvelte</h1></svelte:fragment>
			<svelte:fragment slot="trail">
                <Avatar initials="U" width="w-10" background="bg-emerald-200"/>
            </svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<nav class="list-nav h-screen">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/first-gen">Primera generacion</a></li>
			</ul>
		</nav>
	</svelte:fragment>
	<slot />
</AppShell>
