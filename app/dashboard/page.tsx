import Link from "next/link"

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/resources" className="p-4 bg-blue-100 rounded">
          <h3 className="text-xl font-semibold mb-2">Placement Resources</h3>
          <p>Access interview questions, roadmaps, and more.</p>
        </Link>
        <Link href="/internships" className="p-4 bg-green-100 rounded">
          <h3 className="text-xl font-semibold mb-2">Branch-Wise Internships</h3>
          <p>Find internships specific to your branch.</p>
        </Link>
        <Link href="/profile" className="p-4 bg-yellow-100 rounded">
          <h3 className="text-xl font-semibold mb-2">My Profile</h3>
          <p>View and edit your profile information.</p>
        </Link>
      </div>
    </div>
  )
}

