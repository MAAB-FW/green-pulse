"use client";
import ReduxProvider from "@/services/ReduxProvider";
import { useState } from "react";

export default function MyAssignedEvents() {
  const [activeTab, setActiveTab] = useState("active");

  // Sample assigned events data - replace with actual API call
  const assignedEvents = [
    {
      id: 1,
      title: "River Cleanup Project",
      date: "May 25, 2025",
      location: "Hudson River",
      status: "active",
      progress: 45,
      description:
        "Organizing weekly river cleanup sessions with local volunteers.",
    },
    {
      id: 2,
      title: "Community Garden",
      date: "June 5, 2025",
      location: "Downtown Community Center",
      status: "active",
      progress: 70,
      description:
        "Managing the development of a sustainable community garden.",
    },
    {
      id: 3,
      title: "Solar Panel Workshop",
      date: "April 15, 2025",
      location: "Tech Center",
      status: "completed",
      progress: 100,
      description:
        "Educational workshop on solar panel installation completed.",
    },
  ];

  const filteredEvents = assignedEvents.filter(
    (event) =>
      (activeTab === "active" && event.status === "active") ||
      (activeTab === "completed" && event.status === "completed")
  );

  return (
    <ReduxProvider>
      <div className="container mx-auto p-6">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          My Assigned Events
        </h1>

        {/* Tab Navigation */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "active"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("active")}
            >
              Active Events
            </button>
            <button
              className={`border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "completed"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("completed")}
            >
              Completed Events
            </button>
          </nav>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{event.description}</p>
                  <div className="mt-2 space-x-4 text-sm text-gray-500">
                    <span>📅 {event.date}</span>
                    <span>📍 {event.location}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {event.progress}%
                    </span>
                    <p className="text-sm text-gray-500">Complete</p>
                  </div>
                  {event.status === "active" && (
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                      Update Progress
                    </button>
                  )}
                </div>
              </div>
              {event.status === "active" && (
                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{ width: `${event.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ReduxProvider>
  );
}
