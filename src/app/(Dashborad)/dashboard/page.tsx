"use client";
import { RootState } from "@/redux/store";
import ReduxProvider from "@/services/ReduxProvider";
import { DashboardCardProps } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";
import { useSelector } from "react-redux";

export default function Dashboard(): React.ReactNode {
  return (
    <ReduxProvider>
      <DashboardContent />
    </ReduxProvider>
  );
}

function DashboardContent() {
  const { role } = useSelector((state: RootState) => state.roleSlice);
  const { email, isLoading } = useSelector(
    (state: RootState) => state.userSlice
  );
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !email) {
      router.push("/Login");
    }
  }, [email, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <CgSpinner className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!email) {
    return null;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {role === "admin" && <AdminDashboardCards />}
        {role === "publisher" && <PublisherDashboardCards />}
        {role === "user" && <UserDashboardCards />}
      </div>
    </div>
  );
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  href,
  icon,
}) => {
  return (
    <Link
      href={href}
      className="transform rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
        {icon && <div className="text-3xl text-blue-500">{icon}</div>}
      </div>
    </Link>
  );
};

function AdminDashboardCards() {
  return (
    <>
      <DashboardCard
        title="Overview"
        description="View key metrics and statistics"
        href="/dashboard/admin/overview"
      />
      <DashboardCard
        title="Manage Users"
        description="View and manage user accounts"
        href="/dashboard/admin/manage-users"
      />
      <DashboardCard
        title="Event Management"
        description="Create and manage events"
        href="/dashboard/admin/event-management"
      />
      <DashboardCard
        title="Donations"
        description="Track and manage donations"
        href="/dashboard/admin/donations"
      />
      <DashboardCard
        title="Reports & Analytics"
        description="View detailed analytics"
        href="/dashboard/admin/reports-n-analytics"
      />
    </>
  );
}

function PublisherDashboardCards() {
  return (
    <>
      <DashboardCard
        title="Available Events"
        description="Browse events you can participate in"
        href="/dashboard/publisher/available-events"
      />
      <DashboardCard
        title="My Assigned Events"
        description="View events assigned to you"
        href="/dashboard/publisher/my-assigned-events"
      />
      <DashboardCard
        title="Progress Reports"
        description="Track your event progress"
        href="/dashboard/publisher/progress-reports"
      />
    </>
  );
}

function UserDashboardCards() {
  return (
    <>
      <DashboardCard
        title="My Donations"
        description="View your donation history"
        href="/dashboard/my-donations"
      />
      <DashboardCard
        title="Donate Now"
        description="Make a new donation"
        href="/dashboard/donate-now"
      />
      <DashboardCard
        title="Transaction History"
        description="View your transaction details"
        href="/dashboard/transaction-history"
      />
      <DashboardCard
        title="My Profile"
        description="Update your profile information"
        href="/dashboard/my-profile"
      />
    </>
  );
}
