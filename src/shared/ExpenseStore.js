import { writable} from 'svelte/store';
import { tweened } from 'svelte/motion';
import { cubicOut	} from 'svelte/easing';

import expenseService from "./ExpenseService.js";

let expensesFirestore = [];
let store = writable([]);

expenseService
  .readExpenses()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      expensesFirestore = [
        ...expensesFirestore,
        {
          id: doc.id,
          date: doc.data().date,
          paymentType: doc.data().paymentType,
          category: doc.data().category,
          amount: parseFloat(doc.data().amount),
          quantity: doc.data().quantity,
          subtotal: parseFloat(doc.data().subtotal)
        }
      ];
      
      // store = writable([
        //   {
          //     id: 1,
          //     date: '3rd',
      //     paymentType: 'direct debit',
      //     category: 'rent',
      //     amount: 600,
      //     quantity: 1,
      //     subtotal: 600
      //   },
      //  {
        //     id: 2,
        //     date: '1st',
        //     paymentType: 'direct debit',
        //     category: 'internet service provider',
        //     amount: 39,
        //     quantity: 1,
        //     subtotal: 39
        //   },
        // ]);
      });
    console.log('expensesFirestore', expensesFirestore);
    store.set(expensesFirestore);
  })
  .catch(err => console.error(err.message));

  export const totalTweenStore = tweened(0, {
    delay: 800,
    duration: 500,
    easing: cubicOut
  });

  export default store;