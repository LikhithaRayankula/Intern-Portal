import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-8">
          Welcome to <span className="gradient-text">SRIT Intern Portal</span>
        </h1>

        <p className="mt-3 text-2xl mb-8">Your gateway to exciting internship opportunities and career resources</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mt-6 sm:w-full">
          <Link href="/internships" className="card p-6 text-left hover:border-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold mb-2 gradient-text">Internships &rarr;</h3>
            <p className="text-xl">Explore internship opportunities tailored for SRIT students.</p>
          </Link>

          <Link href="/resources" className="card p-6 text-left hover:border-pink-600 focus:text-pink-600">
            <h3 className="text-2xl font-bold mb-2 gradient-text">Resources &rarr;</h3>
            <p className="text-xl">Access interview prep, resume building, and skill development materials.</p>
          </Link>

          <Link href="/dashboard" className="card p-6 text-left hover:border-purple-600 focus:text-purple-600">
            <h3 className="text-2xl font-bold mb-2 gradient-text">Dashboard &rarr;</h3>
            <p className="text-xl">Track your applications and manage your internship journey.</p>
          </Link>

          <Link href="/signup" className="card p-6 text-left hover:border-green-600 focus:text-green-600">
            <h3 className="text-2xl font-bold mb-2 gradient-text">Sign Up &rarr;</h3>
            <p className="text-xl">Create your account and start your internship search today.</p>
          </Link>
        </div>
      </main>

      <div className="w-full animated-bg py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-white font-semibold tracking-wide uppercase">Featured Partners</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Top companies hiring interns
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap justify-center gap-8">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Company 1"
                width={100}
                height={100}
                className="bg-white rounded-full p-2"
              />
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Company 2"
                width={100}
                height={100}
                className="bg-white rounded-full p-2"
              />
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Company 3"
                width={100}
                height={100}
                className="bg-white rounded-full p-2"
              />
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Company 4"
                width={100}
                height={100}
                className="bg-white rounded-full p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

