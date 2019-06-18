<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let expense;
  const fadeOptions = {
    duration: 700
  };

  let isInEditMode = false;

  let itemEdit = {
    date: "",
    paymentType: "",
    category: "",
    amount: 0,
    quantity: 1,
    subtotal: 0
  };

  function toggleEdit(exp) {
    isInEditMode = !isInEditMode;
    if (isInEditMode) {
      itemEdit = { ...exp };
    }
  }

  function handleInput(event, fieldName) {
    itemEdit[fieldName] = event.target.value;
    if (fieldName === "quantity" || fieldName === "amount") {
      itemEdit["subtotal"] = itemEdit["quantity"] * itemEdit["amount"];
    }
  }

  function save() {
    dispatch("expense-update", itemEdit);
    isInEditMode = false;
  }
</script>

<style>
  .action {
    font-size: 14px;
    margin-right: 3px;
    cursor: pointer;
  }
  .id {
    font-size: 12px;
  }
</style>

{#if !isInEditMode}
  <tr transition:fade={fadeOptions}>
    <td>
      <span class="id">{expense.id}</span>
    </td>
    <td>{expense.date}</td>
    <td>{expense.paymentType}</td>
    <td>{expense.category}</td>
    <td>{expense.amount}</td>
    <td>{expense.quantity}</td>
    <td>{expense.subtotal}</td>
    <td>
      <span class="action" on:click={() => toggleEdit(expense)}>edit</span>
      <span class="action">delete</span>
    </td>
  </tr>
{:else}
  <tr>
    <th scope="row">
      <span class="id">{expense.id}</span>
    </th>
    <td>
      <input
        type="date"
        value={expense.date}
        on:change={evt => handleInput(evt, 'date')} />
    </td>
    <td>
      <input
        type="text"
        value={expense.paymentType}
        on:input={evt => handleInput(evt, 'paymentType')} />
    </td>
    <td>
      <input
        type="text"
        value={expense.category}
        on:input={evt => handleInput(evt, 'category')} />
    </td>
    <td>
      <input
        type="number"
        value={expense.amount}
        on:change={evt => handleInput(evt, 'amount')} />
    </td>
    <td>
      <input
        type="number"
        value={expense.quantity}
        on:change={evt => handleInput(evt, 'quantity')} />
    </td>
    <td>{expense.subtotal}</td>
    <td>
      <span class="action" on:click={save}>save</span>
      <span class="action" on:click={toggleEdit.bind(this)}>cancel</span>
    </td>
  </tr>
{/if}
