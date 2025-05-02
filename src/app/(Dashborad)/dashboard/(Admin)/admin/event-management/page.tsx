"use client";
import ReduxProvider from "@/services/ReduxProvider";
import { useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

export default function EventManagement() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <ReduxProvider>
      <div className="container mx-auto p-6">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-bold text-gray-800">Event Management</h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            <FaPlus /> Create Event
          </button>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <EventCard
            title="Beach Cleanup Drive"
            date="May 15, 2025"
            location="Miami Beach"
            status="upcoming"
            participants={45}
            description="Join us for a beach cleanup initiative to protect marine life and maintain our beautiful coastline."
          />
          <EventCard
            title="Tree Planting Day"
            date="June 1, 2025"
            location="Central Park"
            status="pending"
            participants={120}
            description="Help us increase urban greenery by participating in our annual tree planting event."
          />
          <EventCard
            title="E-Waste Collection"
            date="April 22, 2025"
            location="Downtown"
            status="completed"
            participants={89}
            description="Responsible disposal of electronic waste to protect our environment from hazardous materials."
          />
        </div>

        {/* Create Event Modal */}
        {showCreateModal && (
          <CreateEventModal onClose={() => setShowCreateModal(false)} />
        )}
      </div>
    </ReduxProvider>
  );
}

function EventCard({
  title,
  date,
  location,
  status,
  participants,
  description,
}: {
  title: string;
  date: string;
  location: string;
  status: "upcoming" | "pending" | "completed";
  participants: number;
  description: string;
}) {
  const statusColors = {
    upcoming: "bg-blue-100 text-blue-800",
    pending: "bg-yellow-100 text-yellow-800",
    completed: "bg-green-100 text-green-800",
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <div className="flex gap-2">
          <button className="text-blue-600 hover:text-blue-800">
            <FaEdit />
          </button>
          <button className="text-red-600 hover:text-red-800">
            <FaTrash />
          </button>
        </div>
      </div>
      <div className="mb-4 space-y-2">
        <p className="text-sm text-gray-600">📅 {date}</p>
        <p className="text-sm text-gray-600">📍 {location}</p>
        <p className="text-sm text-gray-600">👥 {participants} participants</p>
      </div>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      <span
        className={`inline-block rounded-full px-2 py-1 text-xs font-semibold capitalize ${
          statusColors[status]
        }`}
      >
        {status}
      </span>
    </div>
  );
}

function CreateEventModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="fixed inset-0 bg-black opacity-30"></div>
        <div className="relative z-20 w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Create Event
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Event Title
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Enter event title"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Event location"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                rows={4}
                placeholder="Event description"
              ></textarea>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
