import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
//import { Code2, Database, Smartphone, Globe } from 'lucide-react';
//import { Cpu, Code2, LineChart, Wrench } from 'lucide-react';
import { Code2, Database, Globe, Terminal } from 'lucide-react';

const About = () => {
  // const skills = [
  //   { category: 'Frontend', icon: <Globe className="w-6 h-6" />, techs: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Three.js'] },
  //   { category: 'Backend', icon: <Database className="w-6 h-6" />, techs: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'] },
  //   { category: 'Mobile', icon: <Smartphone className="w-6 h-6" />, techs: ['React Native', 'Flutter', 'iOS', 'Android'] },
  //   { category: 'DevOps', icon: <Code2 className="w-6 h-6" />, techs: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Git'] },
  // ];
  // const skills = [
  //   { category: 'Embedded Systems', icon: <Cpu className="w-6 h-6" />, techs: ['AVR Microcontrollers', 'Intel 8051', 'Assembly', 'Timer/Interrupt Logic'] },
  //   { category: 'Software & Algorithms', icon: <Code2 className="w-6 h-6" />, techs: ['Java', 'Data Structures', 'Competitive Programming', 'System Architecture'] },
  //   { category: 'Simulation & Modeling', icon: <LineChart className="w-6 h-6" />, techs: ['MATLAB', 'Root Locus', 'Time-Domain Simulation', 'Circuit Modeling'] },
  //   { category: 'Tools & Languages', icon: <Wrench className="w-6 h-6" />, techs: ['Git', 'C/C++', 'French (Conversational)', 'Presentation'] },
  // ];
  const skills = [
    { 
      category: 'Core & Algorithms', 
      icon: <Terminal className="w-6 h-6" />, 
      techs: ['Java', 'Data Structures', 'Competitive Programming', 'Codeforces', 'Leetcode'] 
    },
    { 
      category: 'Full Stack', 
      icon: <Globe className="w-6 h-6" />, 
      techs: ['HTML5','React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Next.js','Redux'] 
    },
    { 
      category: 'Database & Architecture', 
      icon: <Database className="w-6 h-6" />, 
      techs: ['PostgreSQL', 'MongoDB', 'REST APIs'] 
    },
    { 
      category: 'Tools & Misc', 
      icon: <Code2 className="w-6 h-6" />, 
      techs: ['Git', 'GitHub','Postman', 'Software Management Systems', 'French (Conversational)'] 
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer and competitive programmer with a strong foundation in algorithmic problem-solving. I love turning complex logic into clean, efficient, and scalable software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">My Journey</h3>
            <p className="text-slate-600 leading-relaxed">
              Started my journey exploring core programming principles and quickly developed a deep passion for software architecture and algorithms. I've built comprehensive software platforms, including a full-stack patient management and therapy scheduling system for a competitive hackathon.
            </p>
            <p className="text-slate-600 leading-relaxed">
             I am particularly passionate about writing clean, optimized Java code and solving complex algorithmic challenges on platforms like Codeforces. When I'm not pushing my rating or building scalable applications, you can find me practicing my French and diving into emerging web technologies.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-xl p-6 transform -rotate-3">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Projects & Hackathons</span>
                    <span className="font-bold text-slate-900">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Technologies & Tools</span>
                    <span className="font-bold text-slate-900">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Codeforces Submissions</span>
                    <span className="font-bold text-slate-900">200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Coffee Cups</span>
                    <span className="font-bold text-slate-900">∞</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    {skillGroup.icon}
                  </div>
                  <h4 className="text-xl font-bold ml-4 text-slate-900">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.techs.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;