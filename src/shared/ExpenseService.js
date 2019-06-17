import { db } from "./firebase.js";

function createExpense(expense) {
  return db.collection("expenses").add(expense);
}

function readExpenses() {
  return db.collection("expenses").get();
}

function updateExpense(expense) {
  // TODO
}

function deleteExpense(expense) {
  // TODO
}

const expenseService = {
  createExpense,
  readExpenses,
  updateExpense,
  deleteExpense
};

export default expenseService;