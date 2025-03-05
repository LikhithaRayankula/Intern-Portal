import Link from "next/link"

const internshipPlatforms = [
  { name: "Internshala", url: "https://internshala.com", description: "India's largest internship platform" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/jobs/internship-jobs",
    description: "Professional networking and job search platform",
  },
  {
    name: "Indeed",
    url: "https://www.indeed.com/jobs?q=internship",
    description: "Job search engine for internships and full-time positions",
  },
  {
    name: "Glassdoor",
    url: "https://www.glassdoor.com/Job/internship-jobs-SRCH_KO0,10.htm",
    description: "Company reviews and internship listings",
  },
]

const branchWiseInternships = [
  {
    branch: "Computer Science & IT",
    internships: [
      {
        title: "Software Developer Intern",
        company: "TechCorp India",
        applyUrl: "https://www.techcorp.com/careers/intern",
      },
      { title: "Data Science Intern", company: "AI Solutions", applyUrl: "https://www.aisolutions.com/internships" },
      { title: "Web Development Intern", company: "WebTech Innovations", applyUrl: "https://www.webtech.com/apply" },
    ],
  },
  {
    branch: "Electronics & Communication",
    internships: [
      {
        title: "VLSI Design Intern",
        company: "Chip Innovators",
        applyUrl: "https://www.chipinnovators.com/internships",
      },
      {
        title: "IoT Developer Intern",
        company: "Smart Systems Inc.",
        applyUrl: "https://www.smartsystems.com/careers/interns",
      },
      {
        title: "Embedded Systems Intern",
        company: "Embedded Tech Solutions",
        applyUrl: "https://www.embeddedtech.com/apply-now",
      },
    ],
  },
  {
    branch: "Mechanical Engineering",
    internships: [
      {
        title: "CAD Design Intern",
        company: "AutoDesign Solutions",
        applyUrl: "https://www.autodesign.com/internships",
      },
      { title: "Robotics Intern", company: "RoboTech Industries", applyUrl: "https://www.robotech.com/join-us" },
      {
        title: "Manufacturing Process Intern",
        company: "Industrial Innovations",
        applyUrl: "https://www.industrialinnovations.com/careers",
      },
    ],
  },
]

export default function Internships() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8" role="alert">
        <p className="font-bold">Application Process</p>
        <p>
          When you click "Apply Now", you'll be directed to the company's official application page. Make sure to have
          your resume and any required documents ready before applying.
        </p>
      </div>
      <h1 className="text-4xl font-extrabold gradient-text mb-8">Internship Opportunities</h1>

      <div className="mb-16">
        <h2 className="text-3xl font-bold gradient-text mb-6">Internship Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {internshipPlatforms.map((platform) => (
            <div key={platform.name} className="card p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 gradient-text">{platform.name}</h3>
              <p className="text-gray-600 mb-4">{platform.description}</p>
              <Link href={platform.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Explore Internships
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold gradient-text mb-6">Branch-Wise Fresher Internships</h2>
        {branchWiseInternships.map((branch) => (
          <div key={branch.branch} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{branch.branch}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branch.internships.map((internship, index) => (
                <div key={index} className="card p-6 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">{internship.title}</h4>
                  <p className="text-gray-600 mb-4">{internship.company}</p>
                  <Link
                    href={internship.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold gradient-text mb-6">Featured SRIT Internships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Software Developer Intern",
              company: "TechCorp India",
              applyUrl: "https://www.techcorp.com/careers/intern",
            },
            {
              title: "Data Analyst Intern",
              company: "DataInsights Co.",
              applyUrl: "https://www.datainsights.com/internships",
            },
            {
              title: "Marketing Intern",
              company: "BrandBoost Agency",
              applyUrl: "https://www.brandboost.com/internships",
            },
            {
              title: "UI/UX Design Intern",
              company: "DesignPro Studios",
              applyUrl: "https://www.designpro.com/careers",
            },
            {
              title: "Business Development Intern",
              company: "GrowthHub Inc.",
              applyUrl: "https://www.growthhub.com/apply",
            },
            {
              title: "Content Writing Intern",
              company: "ContentKing Media",
              applyUrl: "https://www.contentking.com/internships",
            },
          ].map((internship, i) => (
            <div key={i} className="card p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">{internship.title}</h3>
              <p className="text-gray-600 mb-4">{internship.company}</p>
              <p className="text-sm text-gray-500 mb-4">
                Gain hands-on experience in a dynamic work environment. Learn from industry experts and build your
                professional network.
              </p>
              <Link href={internship.applyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

