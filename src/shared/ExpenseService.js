import { db } from "./firebase.js";

function createExpense(expense) {
  return db.collection("expenses").add(expense);
}

function readExpenses() {
  return db.collection("expenses").get();
}

function updateExpense(expense) {
  return db.collection("expenses").doc(expense.id).update({...expense});
}

function deleteExpense(expense) {
  return db.collection("expenses").doc(expense.id).delete();
}

const expenseService = {
  createExpense,
  readExpenses,
  updateExpense,
  deleteExpense
};

export default expenseService;