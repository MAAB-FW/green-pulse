"use client";
import ReduxProvider from "@/services/ReduxProvider";

export default function TransactionHistory() {
  return (
    <ReduxProvider>
      <TransactionHistoryContent />
    </ReduxProvider>
  );
}

function TransactionHistoryContent() {
  // This would typically come from an API
  const transactions = [
    {
      id: "TXN001",
      date: "2025-05-20",
      type: "Donation",
      amount: 50.0,
      status: "Successful",
      paymentMethod: "Credit Card",
    },
    {
      id: "TXN002",
      date: "2025-05-15",
      type: "Donation",
      amount: 100.0,
      status: "Successful",
      paymentMethod: "PayPal",
    },
    {
      id: "TXN003",
      date: "2025-05-10",
      type: "Donation",
      amount: 75.0,
      status: "Successful",
      paymentMethod: "Credit Card",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Transaction History
        </h1>

        <div className="flex space-x-2">
          <select className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500">
            <option value="all">All Transactions</option>
            <option value="donations">Donations</option>
            <option value="refunds">Refunds</option>
          </select>
        </div>
      </div>

      <div className="rounded-lg bg-white shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Payment Method
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                    ${transaction.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-sm font-semibold text-green-800">
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                    {transaction.paymentMethod}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
