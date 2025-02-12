export default function ExpenseList({ expenses, onDelete }) {
    console.log(expenses)
    if (!expenses || expenses.length === 0){
        return null;
    }
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Expenses</h2>
            <ul className="space-y-2">
                {expenses.map((expense) => (
                    <li
                        key={expense.id}
                        className="grid grid-cols-[2fr_1fr_1fr_auto] items-center gap-4 p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-black"
                    >
                        <span className="font-medium">{expense.name}</span>
                        <span>${expense.amount}</span>
                        <span className="text-gray-600">
                            {expense.date?new Date(expense.date).toLocaleDateString():"Invalid Date"}
                        </span>
                        <button
                            onClick={() => onDelete(expense.id)}
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
