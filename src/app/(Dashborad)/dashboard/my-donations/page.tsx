"use client";
import ReduxProvider from "@/services/ReduxProvider";

export default function MyDonations() {
  return (
    <ReduxProvider>
      <MyDonationsContent />
    </ReduxProvider>
  );
}

function MyDonationsContent() {
  // This would typically come from an API
  const donations = [
    {
      id: 1,
      date: "2025-05-20",
      amount: 50.0,
      project: "Tree Planting Initiative",
      status: "Completed",
    },
    {
      id: 2,
      date: "2025-05-15",
      amount: 100.0,
      project: "Ocean Cleanup Drive",
      status: "Completed",
    },
    {
      id: 3,
      date: "2025-05-10",
      amount: 75.0,
      project: "Renewable Energy Project",
      status: "Completed",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">My Donations</h1>

      <div className="rounded-lg bg-white shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {donation.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${donation.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">{donation.project}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-sm font-semibold text-green-800">
                      {donation.status}
                    </span>
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
