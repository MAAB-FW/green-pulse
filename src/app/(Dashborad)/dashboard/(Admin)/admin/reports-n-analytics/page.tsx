"use client";
import ReduxProvider from "@/services/ReduxProvider";

export default function ReportsNAnalytics() {
  return (
    <ReduxProvider>
      <div className="container mx-auto p-6">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Reports & Analytics
        </h1>

        {/* KPI Summary */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <KPICard
            title="Total Revenue"
            value="$125,430"
            change="+12.5%"
            period="vs last month"
          />
          <KPICard
            title="Active Events"
            value="28"
            change="+3"
            period="vs last month"
          />
          <KPICard
            title="New Users"
            value="534"
            change="+22.3%"
            period="vs last month"
          />
          <KPICard
            title="Donation Rate"
            value="64%"
            change="+5.2%"
            period="vs last month"
          />
        </div>

        {/* Charts Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Donation Trends">
            {/* Placeholder for donation trend chart */}
            <div className="h-64 rounded-lg bg-gray-100 p-4">
              <div className="flex h-full items-center justify-center text-gray-500">
                Donation Trend Chart
              </div>
            </div>
          </ChartCard>

          <ChartCard title="Event Participation">
            {/* Placeholder for event participation chart */}
            <div className="h-64 rounded-lg bg-gray-100 p-4">
              <div className="flex h-full items-center justify-center text-gray-500">
                Event Participation Chart
              </div>
            </div>
          </ChartCard>
        </div>

        {/* Reports Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Reports
          </h2>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-800">
                Download Reports
              </h3>
              <select className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none">
                <option value="last7days">Last 7 Days</option>
                <option value="last30days">Last 30 Days</option>
                <option value="last90days">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>

            <div className="space-y-4">
              <ReportItem
                title="Monthly Donation Report"
                date="April 2025"
                size="2.3 MB"
              />
              <ReportItem
                title="Event Success Metrics"
                date="Q1 2025"
                size="4.1 MB"
              />
              <ReportItem
                title="User Engagement Analysis"
                date="March 2025"
                size="1.8 MB"
              />
              <ReportItem
                title="Environmental Impact Report"
                date="2024 Annual"
                size="5.5 MB"
              />
            </div>
          </div>
        </div>
      </div>
    </ReduxProvider>
  );
}

function KPICard({
  title,
  value,
  change,
  period,
}: {
  title: string;
  value: string;
  change: string;
  period: string;
}) {
  const isPositive = change.startsWith("+");
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        <p
          className={`ml-2 text-sm font-medium ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {change}
        </p>
      </div>
      <p className="mt-1 text-xs text-gray-500">{period}</p>
    </div>
  );
}

function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-lg font-medium text-gray-800">{title}</h3>
      {children}
    </div>
  );
}

function ReportItem({
  title,
  date,
  size,
}: {
  title: string;
  date: string;
  size: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
      <div>
        <h4 className="text-sm font-medium text-gray-800">{title}</h4>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-xs text-gray-500">{size}</span>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
          Download
        </button>
      </div>
    </div>
  );
}
