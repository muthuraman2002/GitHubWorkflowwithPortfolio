import React from 'react';

export default function About() {
  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
    devops: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux', 'Nginx'],
    tools: ['VS Code', 'Postman', 'Figma', 'Jest', 'GitHub Actions', 'Webpack']
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a strong foundation in modern web technologies.
            I love building scalable applications and learning new technologies.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-primary capitalize mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-gray-700"
                    >
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Senior Full Stack Developer</h3>
                  <p className="text-primary">Tech Solutions Inc.</p>
                </div>
                <span className="text-gray-600">2021 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Led development of microservices architecture using Node.js and Docker</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Full Stack Developer</h3>
                  <p className="text-primary">Digital Innovations Co.</p>
                </div>
                <span className="text-gray-600">2019 - 2021</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Developed and maintained multiple React-based web applications</li>
                <li>Optimized database queries improving application performance by 40%</li>
                <li>Integrated third-party APIs and payment gateways</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
                <p className="text-primary">Tech University</p>
              </div>
              <span className="text-gray-600">2015 - 2019</span>
            </div>
            <p className="text-gray-700">
              Graduated with honors. Specialized in Software Engineering and Data Structures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}