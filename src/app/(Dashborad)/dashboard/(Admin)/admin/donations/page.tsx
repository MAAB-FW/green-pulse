"use client";
import ReduxProvider from "@/services/ReduxProvider";
import { useState } from "react";
import { FaDownload, FaSearch } from "react-icons/fa";

export default function Donations() {
  const [dateRange, setDateRange] = useState("last30days");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ReduxProvider>
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Donations Overview
          </h1>
          <p className="mt-2 text-gray-600">
            Track and manage all donations across the platform
          </p>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            title="Total Donations"
            value="$285,420"
            subtext="Last 30 days"
          />
          <SummaryCard
            title="Average Donation"
            value="$78.50"
            subtext="Per transaction"
          />
          <SummaryCard
            title="Total Donors"
            value="3,642"
            subtext="Unique contributors"
          />
          <SummaryCard
            title="Success Rate"
            value="98.5%"
            subtext="Transaction success"
          />
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 sm:max-w-xs">
              <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search donors..."
                className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-blue-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="last7days">Last 7 Days</option>
              <option value="last30days">Last 30 Days</option>
              <option value="last90days">Last 90 Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            <FaDownload /> Export Report
          </button>
        </div>

        {/* Donations Table */}
        <div className="overflow-x-auto rounded-lg bg-white shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Donor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Campaign
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <DonationRow
                donor="John Doe"
                email="john@example.com"
                amount={150.0}
                date="2025-04-30"
                status="completed"
                campaign="Tree Planting Initiative"
              />
              <DonationRow
                donor="Jane Smith"
                email="jane@example.com"
                amount={75.5}
                date="2025-04-29"
                status="completed"
                campaign="Beach Cleanup"
              />
              <DonationRow
                donor="Mike Johnson"
                email="mike@example.com"
                amount={500.0}
                date="2025-04-28"
                status="pending"
                campaign="Wildlife Protection"
              />
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">97</span> results
          </div>
          <div className="flex items-center space-x-2">
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </ReduxProvider>
  );
}

function SummaryCard({
  title,
  value,
  subtext,
}: {
  title: string;
  value: string;
  subtext: string;
}) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{subtext}</p>
    </div>
  );
}

function DonationRow({
  donor,
  email,
  amount,
  date,
  status,
  campaign,
}: {
  donor: string;
  email: string;
  amount: number;
  date: string;
  status: "completed" | "pending" | "failed";
  campaign: string;
}) {
  const statusColors = {
    completed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    failed: "bg-red-100 text-red-800",
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">{donor}</div>
            <div className="text-sm text-gray-500">{email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">${amount.toFixed(2)}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{date}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${
            statusColors[status]
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
        {campaign}
      </td>
    </tr>
  );
}
