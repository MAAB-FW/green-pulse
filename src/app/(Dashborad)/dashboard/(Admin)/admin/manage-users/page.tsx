"use client";
import { baseApi } from "@/redux/features/api/baseApi";
import ReduxProvider from "@/services/ReduxProvider";
import { UserType } from "@/types";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

// Add the new endpoint to baseApi
baseApi.enhanceEndpoints({
  addTagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      providesTags: ["User"],
    }),
    updateUserRole: builder.mutation({
      query: ({ email, type }) => ({
        url: `users/${email}/role`,
        method: "PATCH",
        body: { type },
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (email) => ({
        url: `users/${email}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export default function ManageUsers() {
  const [selectedRole, setSelectedRole] = useState<UserType>("user");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState<string | null>(null);

  return (
    <ReduxProvider>
      <div className="container mx-auto p-6">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-bold text-gray-800">Manage Users</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search users..."
              className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as UserType)}
            >
              <option value="all">All Roles</option>
              <option value="user">Users</option>
              <option value="admin">Admins</option>
              <option value="publisher">Publishers</option>
            </select>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto rounded-lg bg-white shadow-md">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Joined
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xl font-medium text-blue-600">
                        JD
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        John Doe
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">john@example.com</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingUser === "john@example.com" ? (
                    <select
                      className="rounded border border-gray-300 px-2 py-1"
                      defaultValue="user"
                      onBlur={() => setEditingUser(null)}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="publisher">Publisher</option>
                    </select>
                  ) : (
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs leading-5 font-semibold text-green-800">
                      User
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                  April 15, 2025
                </td>
                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                  <button
                    onClick={() => setEditingUser("john@example.com")}
                    className="mr-2 text-blue-600 hover:text-blue-900"
                  >
                    <FaEdit className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <FaTrash className="h-5 w-5" />
                  </button>
                </td>
              </tr>
              {/* Add more user rows here */}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">20</span> results
            </span>
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
