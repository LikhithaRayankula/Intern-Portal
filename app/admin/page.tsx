"use client"

import { useState } from "react"

export default function AdminPanel() {
  const [internshipTitle, setInternshipTitle] = useState("")
  const [internshipDescription, setInternshipDescription] = useState("")
  const [internshipBranch, setInternshipBranch] = useState("")
  const [resourceTitle, setResourceTitle] = useState("")
  const [resourceDescription, setResourceDescription] = useState("")
  const [resourceUrl, setResourceUrl] = useState("")

  const handleInternshipSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to your backend to add the new internship
    alert(`New internship added: ${internshipTitle} for ${internshipBranch}`)
    setInternshipTitle("")
    setInternshipDescription("")
    setInternshipBranch("")
  }

  const handleResourceSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to your backend to add the new resource
    alert(`New resource added: ${resourceTitle}`)
    setResourceTitle("")
    setResourceDescription("")
    setResourceUrl("")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold gradient-text mb-8">Admin Panel</h1>

      <div className="mb-12">
        <h2 className="text-3xl font-bold gradient-text mb-6">Add New Internship</h2>
        <form onSubmit={handleInternshipSubmit} className="space-y-4">
          <div>
            <label htmlFor="internshipTitle" className="block text-sm font-medium text-gray-700">
              Internship Title
            </label>
            <input
              type="text"
              id="internshipTitle"
              value={internshipTitle}
              onChange={(e) => setInternshipTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="internshipBranch" className="block text-sm font-medium text-gray-700">
              Branch
            </label>
            <input
              type="text"
              id="internshipBranch"
              value={internshipBranch}
              onChange={(e) => setInternshipBranch(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="internshipDescription" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="internshipDescription"
              value={internshipDescription}
              onChange={(e) => setInternshipDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Add Internship
          </button>
        </form>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold gradient-text mb-6">Add New Placement Resource</h2>
        <form onSubmit={handleResourceSubmit} className="space-y-4">
          <div>
            <label htmlFor="resourceTitle" className="block text-sm font-medium text-gray-700">
              Resource Title
            </label>
            <input
              type="text"
              id="resourceTitle"
              value={resourceTitle}
              onChange={(e) => setResourceTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="resourceDescription" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="resourceDescription"
              value={resourceDescription}
              onChange={(e) => setResourceDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="resourceUrl" className="block text-sm font-medium text-gray-700">
              Resource URL
            </label>
            <input
              type="url"
              id="resourceUrl"
              value={resourceUrl}
              onChange={(e) => setResourceUrl(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Resource
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-3xl font-bold gradient-text mb-6">Manage Users</h2>
        <p>User management functionality would go here.</p>
      </div>
    </div>
  )
}

