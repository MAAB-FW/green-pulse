"use client";
import ReduxProvider from "@/services/ReduxProvider";
import { useState } from "react";

export default function AvailableEvents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // Sample events data - replace with actual API call
  const events = [
    {
      id: 1,
      title: "Beach Cleanup Drive",
      date: "June 1, 2025",
      location: "Miami Beach",
      status: "open",
      participants: 12,
      description:
        "Join us for a beach cleanup initiative to protect marine life.",
    },
    {
      id: 2,
      title: "Tree Planting Campaign",
      date: "June 15, 2025",
      location: "Central Park",
      status: "open",
      participants: 25,
      description: "Help us grow urban forests for a greener future.",
    },
    {
      id: 3,
      title: "Recycling Workshop",
      date: "June 30, 2025",
      location: "Community Center",
      status: "open",
      participants: 18,
      description:
        "Learn about effective recycling practices and implementation.",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || event.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <ReduxProvider>
      <div className="container mx-auto p-6">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Available Events
        </h1>

        {/* Search and Filter Section */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            placeholder="Search events..."
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Events</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {event.title}
              </h3>
              <p className="mb-4 text-gray-600">{event.description}</p>
              <div className="mb-4 space-y-2 text-sm text-gray-500">
                <p>📅 {event.date}</p>
                <p>📍 {event.location}</p>
                <p>👥 {event.participants} participants</p>
              </div>
              <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
                Apply to Participate
              </button>
            </div>
          ))}
        </div>
      </div>
    </ReduxProvider>
  );
}
