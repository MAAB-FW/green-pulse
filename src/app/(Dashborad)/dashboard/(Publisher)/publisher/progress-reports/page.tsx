"use client";
import ReduxProvider from "@/services/ReduxProvider";
import { useState } from "react";

export default function ProgressReports() {
  const [timeRange, setTimeRange] = useState("month");

  // Sample statistics - replace with actual API data
  const stats = {
    totalEvents: 12,
    completedEvents: 8,
    avgProgress: 75,
    totalParticipants: 450,
  };

  // Sample reports data - replace with actual API data
  const reports = [
    {
      id: 1,
      eventName: "River Cleanup Project",
      date: "May 15, 2025",
      type: "Progress Update",
      description: "Weekly progress report on river cleanup activities",
      downloadUrl: "#",
    },
    {
      id: 2,
      eventName: "Community Garden",
      date: "May 10, 2025",
      type: "Impact Assessment",
      description: "Monthly impact assessment of the community garden project",
      downloadUrl: "#",
    },
    {
      id: 3,
      eventName: "Solar Panel Workshop",
      date: "May 5, 2025",
      type: "Final Report",
      description: "Final report on workshop outcomes and participant feedback",
      downloadUrl: "#",
    },
  ];

  return (
    <ReduxProvider>
      <div className="container mx-auto p-6">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-bold text-gray-800">Progress Reports</h1>
          <select
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
        </div>

        {/* Statistics Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Events"
            value={stats.totalEvents}
            unit="events"
          />
          <StatCard
            title="Completed Events"
            value={stats.completedEvents}
            unit="events"
          />
          <StatCard
            title="Average Progress"
            value={stats.avgProgress}
            unit="%"
          />
          <StatCard
            title="Total Participants"
            value={stats.totalParticipants}
            unit="people"
          />
        </div>

        {/* Reports List */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Recent Reports
          </h2>
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex flex-col justify-between gap-4 rounded-lg border border-gray-200 p-4 hover:bg-gray-50 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {report.eventName}
                  </h3>
                  <p className="text-sm text-gray-600">{report.description}</p>
                  <div className="mt-1 space-x-4 text-sm text-gray-500">
                    <span>📅 {report.date}</span>
                    <span>📄 {report.type}</span>
                  </div>
                </div>
                <button className="rounded-lg bg-blue-600 px-4 py-2 whitespace-nowrap text-white hover:bg-blue-700">
                  Download Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ReduxProvider>
  );
}

function StatCard({
  title,
  value,
  unit,
}: {
  title: string;
  value: number;
  unit: string;
}) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        <p className="ml-2 text-sm text-gray-500">{unit}</p>
      </div>
    </div>
  );
}
