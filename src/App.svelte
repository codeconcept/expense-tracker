<script>
  import { onMount } from "svelte";

  import ExpenseTable from "./components/ExpenseTable.svelte";
  import ExpenseCreate from "./components/ExpenseCreate.svelte";
  import ExpenseTotal from "./components/ExpenseTotal.svelte";
  export let title;
  import store from "./shared/ExpenseStore.js";
  import { db } from "./shared/firebase.js";

  let expenses = [];
  let expensesFirestore = [];
  store.subscribe(data => {
    expenses = data;
  });

  onMount(() => {
    db.collection("expenses").onSnapshot(collectionSnapshot => {
      expensesFirestore = [];
      collectionSnapshot.forEach(doc => {
        expensesFirestore = [
          ...expensesFirestore,
          {
            id: doc.id,
            date: doc.data().date,
            paymentType: doc.data().paymentType,
            category: doc.data().category,
            amount: doc.data().amount,
            quantity: doc.data().quantity,
            subtotal: doc.data().subtotal,
          }
        ];
      });
      console.log("expensesFirestore", expensesFirestore);
    });
  });
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>{title}</h1>

<ExpenseTotal />
<ExpenseCreate />
<ExpenseTable {expenses} />
