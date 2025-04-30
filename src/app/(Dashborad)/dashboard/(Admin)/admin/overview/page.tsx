"use client";
import ReduxProvider from "@/services/ReduxProvider";
import { CgOrganisation } from "react-icons/cg";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";

export default function Overview() {
  return (
    <ReduxProvider>
      <div className="container mx-auto p-6">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h1>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Donations"
            value="$24,500"
            icon={<FaDollarSign className="h-6 w-6" />}
            trend="+12.5%"
          />
          <StatCard
            title="Active Users"
            value="1,234"
            icon={<FaUsers className="h-6 w-6" />}
            trend="+5.2%"
          />
          <StatCard
            title="Total Events"
            value="48"
            icon={<IoMdCalendar className="h-6 w-6" />}
            trend="+8.1%"
          />
          <StatCard
            title="Organizations"
            value="15"
            icon={<CgOrganisation className="h-6 w-6" />}
            trend="+3.7%"
          />
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Recent Activity
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="divide-y divide-gray-200">
              <ActivityItem
                title="New Donation"
                description="John Doe donated $500"
                time="2 hours ago"
              />
              <ActivityItem
                title="Event Created"
                description="Beach Cleanup Drive 2025"
                time="5 hours ago"
              />
              <ActivityItem
                title="New User"
                description="Sarah Smith joined the platform"
                time="1 day ago"
              />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <QuickActionButton
              title="Create Event"
              description="Set up a new environmental event"
            />
            <QuickActionButton
              title="View Reports"
              description="Access detailed analytics"
            />
            <QuickActionButton
              title="Manage Users"
              description="Review and modify user access"
            />
            <QuickActionButton
              title="View Donations"
              description="Check recent contributions"
            />
          </div>
        </div>
      </div>
    </ReduxProvider>
  );
}

function StatCard({
  title,
  value,
  icon,
  trend,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}) {
  const trendColor = trend.startsWith("+") ? "text-green-500" : "text-red-500";

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="rounded-full bg-blue-100 p-3 text-blue-600">{icon}</div>
      </div>
      <p className={`mt-2 text-sm ${trendColor}`}>{trend} from last month</p>
    </div>
  );
}

function ActivityItem({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="py-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
}

function QuickActionButton({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <button className="w-full rounded-lg bg-white p-4 text-left shadow-md transition-all hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
      <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </button>
  );
}
