import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con pasarela de pagos integrada",
      tags: ["Laravel", "PHP", "MySQL"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      demo: "https://demo.com",
      github: "https://github.com/username/project"
    },
    {
      id: 2,
      title: "WooCommerce Store",
      description: "Tienda personalizada con integraciones de inventario y CRM",
      tags: ["WooCommerce", "PHP", "WordPress"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      demo: "https://demo.com",
      github: "https://github.com/username/project"
    },
    {
      id: 3,
      title: "Dashboard Analítico",
      description: "Panel de análisis en tiempo real con visualización de datos",
      tags: ["Astro", "JS", "API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      demo: "https://demo.com",
      github: "https://github.com/username/project"
    },
    {
      id: 4,
      title: "REST API Backend",
      description: "API robusta con autenticación JWT y documentación Swagger",
      tags: ["Express", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      demo: "https://demo.com",
      github: "https://github.com/username/project"
    },
    {
      id: 5,
      title: "Landing Page Interactiva",
      description: "Sitio web con animaciones fluidas y diseño responsive",
      tags: ["HTML", "CSS", "JS"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      demo: "https://demo.com",
      github: "https://github.com/username/project"
    },
    {
      id: 6,
      title: "Blog Técnico",
      description: "Blog optimizado con sistema de búsqueda y categorías",
      tags: ["Astro", "Markdown", "SEO"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
      demo: "https://demo.com",
      github: "https://github.com/username/project"
      },
    {
      id: 7,
      title: "Google Clone",
      description: "Clone del buscador google",
      tags: ["HTML", "CCS3", "JavaScript"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
      demo: "https://google-clone-psi-henna.vercel.app/",
      github: "https://github.com/douglasrujana/google-clone.git"
    }
  ];

  const technologies = [
    "HTML", "CSS", "JS", "Express", "Node.js", "Astro", 
    "PHP", "Laravel", "WooCommerce", "WordPress", "MySQL", "MongoDB"
  ];

  const allTags = [...new Set(projects.flatMap(p => p.tags))];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section - Estilo minimalista Jony Ive */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <Code2 size={48} className="text-gray-600" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight">
            Douglas Rujana
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light mb-12 leading-relaxed">
            Desarrollador Full Stack+AI | QA | DevOps | Cloud-native
          </p>
          <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Creando experiencias digitales excepcionales mediante código limpio, 
            diseño intuitivo y atención meticulosa al detalle.
          </p>
          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
              <Github size={24} className="text-gray-700" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
              <Linkedin size={24} className="text-gray-700" />
            </a>
            <a href="mailto:tu@email.com"
               className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
              <Mail size={24} className="text-gray-700" />
            </a>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
            Tecnologías
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span 
                key={tech}
                className="px-6 py-3 bg-white text-gray-700 rounded-full text-sm font-light shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
            Proyectos
          </h2>
          
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-light transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-6 py-2 rounded-full text-sm font-light transition-all duration-300 ${
                  activeFilter === tag
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-video bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="font-light">Demo</span>
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span className="font-light">Código</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Trabajemos juntos
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-12">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas 
            o oportunidades para formar parte de tu visión.
          </p>
          <a 
            href="mailto:tu@email.com"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full font-light hover:bg-gray-800 transition-colors duration-300"
          >
            Enviar mensaje
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <p className="text-gray-500 text-sm font-light">
          © 2025 Tu Nombre. Diseñado y desarrollado con atención al detalle.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;