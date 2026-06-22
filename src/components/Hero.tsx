import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
    }> = [];

    // Create particles for 3D effect
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: Math.random() * 5 + 1,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z -= particle.vz;

        // Reset particle if it goes off screen
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Calculate 3D projection
        const scale = 200 / particle.z;
        const projectedX = particle.x * scale + canvas.width / 2;
        const projectedY = particle.y * scale + canvas.height / 2;
        const size = scale * 2;

        // Draw particle
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${1 - particle.z / 1000})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'transparent' }}
      />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Prasoon Dwivedi
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-slate-300">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl mb-12 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Specializing in React, Node.js, and scalable web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Prasoon-dwivedi88" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/prasoon-dwivedi-0b470b311" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="mailto:prasoon.dwivedi884@gmail.com"
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;