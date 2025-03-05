import Link from "next/link"

const resourcePlatforms = [
  { name: "Coursera", url: "https://www.coursera.org", description: "Online courses from top universities" },
  { name: "edX", url: "https://www.edx.org", description: "Free online courses from Harvard, MIT, and more" },
  { name: "freeCodeCamp", url: "https://www.freecodecamp.org", description: "Learn to code for free" },
  { name: "HackerRank", url: "https://www.hackerrank.com", description: "Practice coding, prepare for interviews" },
]

const placementResources = [
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/", description: "A computer science portal for geeks" },
  {
    name: "LeetCode",
    url: "https://leetcode.com/",
    description: "The World's Leading Online Programming Learning Platform",
  },
  { name: "InterviewBit", url: "https://www.interviewbit.com/", description: "Coding Interview Questions" },
  { name: "Pramp", url: "https://www.pramp.com/", description: "Practice mock interviews & coding challenges" },
]

export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold gradient-text mb-8">Career Resources</h1>

      <div className="mb-16">
        <h2 className="text-3xl font-bold gradient-text mb-6">Learning Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {resourcePlatforms.map((platform) => (
            <div key={platform.name} className="card p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 gradient-text">{platform.name}</h3>
              <p className="text-gray-600 mb-4">{platform.description}</p>
              <Link href={platform.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Explore Resources
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold gradient-text mb-6">Placement Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {placementResources.map((resource) => (
            <div key={resource.name} className="card p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 gradient-text">{resource.name}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Start Preparing
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-bold gradient-text mb-6">Interview Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Technical Interviews", "Behavioral Interviews", "Mock Interviews"].map((item) => (
              <div key={item} className="card p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-gray-600 mb-4">
                  Prepare for {item.toLowerCase()} with our comprehensive guides and practice sessions.
                </p>
                <Link href="#" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold gradient-text mb-6">Resume Building</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Resume.com",
                url: "https://www.resume.com/",
                description: "Free online resume builder with customizable templates",
              },
              {
                name: "Zety Resume Builder",
                url: "https://zety.com/resume-builder",
                description: "Professional resume builder with expert tips and examples",
              },
              {
                name: "Novoresume",
                url: "https://novoresume.com/",
                description: "Modern resume templates with AI-powered writing tips",
              },
              {
                name: "Resume Genius",
                url: "https://resumegenius.com/",
                description: "Quick and easy resume builder with industry-specific templates",
              },
              {
                name: "Canva Resume Builder",
                url: "https://www.canva.com/create/resumes/",
                description: "Design-focused resume builder with creative templates",
              },
              {
                name: "LinkedIn Resume Builder",
                url: "https://www.linkedin.com/resume-builder/",
                description: "Create a resume from your LinkedIn profile",
              },
            ].map((item) => (
              <div key={item.name} className="card p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Build Resume
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold gradient-text mb-6">Skill Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Programming",
              "Data Science",
              "Web Development",
              "Machine Learning",
              "Soft Skills",
              "Project Management",
            ].map((item) => (
              <div key={item} className="card p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-gray-600 mb-4">
                  Enhance your {item.toLowerCase()} skills with our curated learning paths and resources.
                </p>
                <Link href="#" className="btn btn-secondary">
                  Start Learning
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

