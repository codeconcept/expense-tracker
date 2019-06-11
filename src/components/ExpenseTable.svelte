<script>
  import { fade } from "svelte/transition";
  export let expenses;

  const fadeOptions = {
    duration: 700
  };
</script>

<style>

</style>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Date</th>
      <th scope="col">Payment type</th>
      <th scope="col">Category</th>
      <th scope="col">Amount</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    {#each expenses as exp}
      <tr transition:fade={fadeOptions}>
        <th scope="row">{exp.id}</th>
        <td>{exp.date}</td>
        <td>{exp.paymentType}</td>
        <td>{exp.category}</td>
        <td>{exp.amount}</td>
        <td>{exp.quantity}</td>
        <td>{exp.subtotal}</td>
      </tr>
    {/each}
  </tbody>
</table>
