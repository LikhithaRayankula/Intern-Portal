"use client"

import { useState } from "react"

export default function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@srit.ac.in",
    branch: "Computer Science",
    year: "3rd Year",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to update the user's profile
    alert("Profile updated successfully!")
  }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold gradient-text mb-6">Your Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
            Branch
          </label>
          <input
            type="text"
            id="branch"
            value={user.branch}
            onChange={(e) => setUser({ ...user, branch: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">
            Year
          </label>
          <input
            type="text"
            id="year"
            value={user.year}
            onChange={(e) => setUser({ ...user, year: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  )
}

