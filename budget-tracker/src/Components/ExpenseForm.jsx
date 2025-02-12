import { useState } from 'react';

export default function ExpenseForm({ onAddExpense }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !amount || !date) return;
        onAddExpense({
            name,
            amount: +amount,
            date,
            id: Date.now().toString()
        });
        setName('');
        setAmount('');
        setDate('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
        >
            <input
                type="text"
                placeholder="Expense name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500  focus:border-blue-500 text-black"
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 border  border-black  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  text-black"
              
            />
            
            <button
                type="submit"
                className="col-span-full md:col-span-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
                Add Expense
            </button>
        </form>
    );
}
