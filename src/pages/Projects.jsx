import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management and payment processing.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout process',
        'Order management and tracking'
      ]
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management system with real-time updates and team features.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'Real-time collaboration',
        'Task assignment and tracking',
        'Project analytics and reporting',
        'File sharing and comments'
      ]
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard with interactive maps and detailed forecasts.',
      image: 'https://images.unsplash.com/photo-1561583534-09e822ba83ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'OpenWeatherMap API', 'Mapbox', 'ChartJS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'Interactive weather maps',
        '7-day weather forecast',
        'Location-based weather alerts',
        'Weather history and trends'
      ]
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my featured projects. Each project demonstrates different skills and technologies.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.title} className={`flex flex-col lg:flex-row gap-8 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="w-full lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-secondary transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}