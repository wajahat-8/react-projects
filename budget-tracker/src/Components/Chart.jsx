import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ expenses }) {
    if(!expenses||expenses.length==0){
        return null;
    }
    const processData = (expenses) => {
        const dailyTotals = expenses.reduce((acc, expense) => {
            const date = expense.date;
            acc[date] = (acc[date] || 0) + expense.amount;
            return acc;
        }, {});

        return Object.entries(dailyTotals)
            .map(([date, amount]) => ({
                date,
                amount
            }))
            .sort((a, b) => new Date(a.date) - new Date(b.date));
    };

    return (
        <div className="my-8">
        
            <h2 className="text-xl font-semibold mb-4 text-black">Daily Spending</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={processData(expenses)}>
                        <XAxis
                            dataKey="date"
                            tickFormatter={(date) => new Date(date).toLocaleDateString()}
                        />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="amount" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}