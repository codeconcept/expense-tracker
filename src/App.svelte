<script>
import ExpenseTable from './components/ExpenseTable.svelte';
	export let title;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>{title}</h1>

<ExpenseTable/>
