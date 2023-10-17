<script lang="ts">
	import { Paginator, Table, tableMapperValues, type PaginationSettings, type TableSource } from "@skeletonlabs/skeleton";
	import type { PageData } from './$types';

	const pokemons = [
		{ number: 1, name: "Bulbasaur", type: "Grass/Poison", weight: 6.9 },
		{ number: 2, name: "Ivysaur", type: "Grass/Poison", weight: 13.0 },
		{ number: 3, name: "Venusaur", type: "Grass/Poison", weight: 100.0 },
		{ number: 4, name: "Charmander", type: "Fire", weight: 8.5 },
		{ number: 5, name: "Charmeleon", type: "Fire", weight: 19.0 }
	];
	
	export let data: PageData;
	console.log(data);

	let paginationSettings = {
		page: 0,
		limit: 5,
		size: data.count,
		amounts: [1,2,5,10],
	} satisfies PaginationSettings;
					
				
	const table: TableSource = {
		head: ["Number",'Name', 'URL'],
		body: tableMapperValues(data.results, ['number','name','url']),
	}

	function onPageChange(e: CustomEvent): void {
		console.log('event:page', e.detail);
	}

	function onAmountChange(e: CustomEvent): void {
		console.log('event:amount', e.detail);
	}
</script>

<div class="container mx-auto p-8 space-y-8">
	<Table source={table}></Table>
	<Paginator
		bind:settings={paginationSettings}
		showFirstLastButtons="{false}"
		showPreviousNextButtons="{true}"
		on:page={onPageChange}
		on:amount={onAmountChange}
	/>

</div>
