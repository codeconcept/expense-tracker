<script>
import ExpenseTable from './components/ExpenseTable.svelte';
import ExpenseCreate from './components/ExpenseCreate.svelte';
	export let title;
	import store from './shared/ExpenseStore.js';
	
	let expenses = [];
	store.subscribe(data => {
		expenses = data;
	});
  

</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>{title}</h1>

<ExpenseCreate/>
<ExpenseTable expenses={expenses}/>
