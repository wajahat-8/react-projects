import { useState, useEffect } from 'react';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import Chart from './Components/Chart';
import './App.css';

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Budget Tracker

        </h1>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <ExpenseForm onAddExpense={addExpense} />
        </div>


        <Chart expenses={expenses} />


        {expenses.length > 0 ? (<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />

        </div>
        ) : null}
      </div>

    </div>
  );
}
