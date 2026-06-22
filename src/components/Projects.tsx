import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ShopX - E-commerce Platform",
      description:
        "A full-stack e-commerce platform featuring a user-facing storefront, secure JWT authentication, cart management, and a dedicated admin dashboard for inventory control.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
      features: [
        "Secure user authentication (JWT)",
        "Dynamic shopping cart",
        "Admin inventory dashboard",
        "Product image uploads",
        "Category filtering",
      ],
      github: "https://github.com/Prasoon-dwivedi88/ShopX",
      demo: "https://shop-x-vrhp.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "Resumind - AI Resume Analyzer",
      description:
        "An AI-powered full-stack application that evaluates resumes against job descriptions, providing instant ATS scoring and granular feedback on tone, structure, and skills.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop", // A professional resume/desk image
      technologies: [
        "React Router 7",
        "TypeScript",
        "Tailwind CSS v4",
        "Zustand",
        "Puter.js",
        "Claude AI",
      ],
      features: [
        "AI-powered ATS scoring & feedback (Anthropic Claude)",
        "Client-side PDF to Image conversion (pdfjs-dist)",
        "Secure user authentication & cloud storage via Puter.js",
        "Interactive SVG score gauges and animated UI",
        "Server-Side Rendering (SSR) enabled",
      ],
      github: "https://github.com/Prasoon-dwivedi88/AI-RESUME-ANALYZER",
      demo: "https://ai-resume-analyzer-roan-kappa.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "Signalist -Stock Market Tracking App",
      description:
        "A comprehensive stock market tracking application offering real-time data, advanced charting, personalized watchlists, and AI-generated daily market news summaries.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Inngest",
        "Better Auth",
        "TradingView",
      ],
      features: [
        "Real-time stock charts & heatmaps (TradingView)",
        "AI-generated daily market news summaries (Gemini)",
        "Automated background jobs & email alerts (Inngest)",
        "Secure, session-based authentication (Better Auth)",
        "Live market data integration (Finnhub API)",
      ],
      github: "https://github.com/Prasoon-dwivedi88/Signalist",
      demo: "https://signalist-phi-smoky.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "Eleven Dev Hub - Deployment Platform",
      description:
        "A full-stack DevOps platform for deploying static sites and backend services directly from GitHub. Features automated CI/CD pipelines, real-time logging, and an AI-powered build error assistant.",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
      technologies: [
        "Next.js 16",
        "Cloudflare D1",
        "Drizzle ORM",
        "GitHub API",
        "OpenRouter AI",
        "Tailwind v4",
      ],
      features: [
        "Automated GitHub repository deployments",
        "AI-powered build error analysis and debugging",
        "Native Cloudflare Pages & Workers integration",
        "Real-time deployment tracking and logs viewer",
        "Instant one-click rollbacks to previous versions",
      ],
      github: "https://github.com/Nikhil-Yadav15/ElevenDevHub",
      category: "Full Stack / DevOps",
    },
    // {
    //   title: 'DataViz Dashboard',
    //   description: 'Interactive data visualization dashboard with real-time charts and customizable widgets.',
    //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    //   technologies: ['React', 'D3.js', 'TypeScript', 'WebSocket', 'Material-UI'],
    //   features: ['Real-time data', 'Interactive charts', 'Custom widgets', 'Export functionality'],
    //   github: 'https://github.com',
    //   demo: 'https://dashboard.example.com',
    //   category: 'Frontend'
    // },
    // {
    //   title: 'CloudSync - File Storage',
    //   description: 'Secure cloud file storage service with file sharing, versioning, and collaboration tools.',
    //   image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
    //   technologies: ['Vue.js', 'Python', 'Django', 'AWS S3', 'PostgreSQL'],
    //   features: ['File encryption', 'Version control', 'Collaborative editing', 'Access controls'],
    //   github: 'https://github.com',
    //   demo: 'https://cloudsync.example.com',
    //   category: 'Full Stack'
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in full
            stack development, from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // <Card
            //   key={index}
            //   className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            // >
            <Card 
  key={index} 
  className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden ${
    projects.length === 4 && index === 3 ? "lg:col-start-2" : ""
  }`}
>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-slate-700"
                  >
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
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div className="flex gap-2 pt-4">
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
                </div> */}
                <div className="flex gap-2 pt-4">
                  {/* Only render the Code button if project.github exists */}
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}

                  {/* Only render the Demo button if project.demo exists */}
                  {project.demo && (
                    <Button size="sm" className="flex-1" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
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
