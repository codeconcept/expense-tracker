import { writable } from 'svelte/store';

const store = writable([
  {
    id: 1,
    date: '3rd',
    paymentType: 'direct debit',
    category: 'rent',
    amount: 600,
    quantity: 1,
    subtotal: 600
  },
 {
    id: 2,
    date: '1st',
    paymentType: 'direct debit',
    category: 'internet service provider',
    amount: 39,
    quantity: 1,
    subtotal: 39
  },
]);

export default store;