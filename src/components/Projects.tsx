import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EcoStore - E-commerce Platform',
      description: 'A modern, full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
      features: ['Real-time inventory', 'Payment processing', 'Order tracking', 'Admin dashboard', 'Mobile responsive'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      category: 'Full Stack'
    },
    {
      title: 'TaskFlow - Project Management',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      features: ['Real-time collaboration', 'Kanban boards', 'Time tracking', 'Team chat', 'Analytics'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      category: 'Full Stack'
    },
    {
      title: 'FinanceAPI - Banking API',
      description: 'Secure RESTful API for banking operations with comprehensive documentation and rate limiting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker', 'Swagger'],
      features: ['Secure authentication', 'Transaction processing', 'Account management', 'API documentation'],
      github: 'https://github.com',
      demo: 'https://api.example.com/docs',
      category: 'Backend'
    },
    {
      title: 'FitTracker - Mobile App',
      description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      features: ['Workout tracking', 'Progress analytics', 'Social features', 'Offline support'],
      github: 'https://github.com',
      demo: 'https://apps.apple.com/app',
      category: 'Mobile'
    },
    {
      title: 'DataViz Dashboard',
      description: 'Interactive data visualization dashboard with real-time charts and customizable widgets.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'TypeScript', 'WebSocket', 'Material-UI'],
      features: ['Real-time data', 'Interactive charts', 'Custom widgets', 'Export functionality'],
      github: 'https://github.com',
      demo: 'https://dashboard.example.com',
      category: 'Frontend'
    },
    {
      title: 'CloudSync - File Storage',
      description: 'Secure cloud file storage service with file sharing, versioning, and collaboration tools.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Python', 'Django', 'AWS S3', 'PostgreSQL'],
      features: ['File encryption', 'Version control', 'Collaborative editing', 'Access controls'],
      github: 'https://github.com',
      demo: 'https://cloudsync.example.com',
      category: 'Full Stack'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in full stack development, 
            from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Key Features:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;