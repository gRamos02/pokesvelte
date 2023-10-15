<script lang="ts">
	import { Table, tableMapperValues, type TableSource } from "@skeletonlabs/skeleton";

	const pokemons = [
		{ number: 1, name: "Bulbasaur", type: "Grass/Poison", weight: 6.9 },
		{ number: 2, name: "Ivysaur", type: "Grass/Poison", weight: 13.0 },
		{ number: 3, name: "Venusaur", type: "Grass/Poison", weight: 100.0 },
		{ number: 4, name: "Charmander", type: "Fire", weight: 8.5 },
		{ number: 5, name: "Charmeleon", type: "Fire", weight: 19.0 }
	];
				
	const table: TableSource = {
		head: ["Number",'Name', 'Type', 'Weight'],
		body: tableMapperValues(pokemons, ['number','name','type','weight']),
	}
</script>

<div class="container mx-auto p-8 space-y-8">
	<Table source={table}></Table>
</div>
