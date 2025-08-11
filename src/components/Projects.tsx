// src/components/Projects.tsx
import { useEffect, useState, useRef, type MouseEvent } from 'react';
import Button from './Button';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import csaImage from '../assets/CSA.gif';
import llmImage from '../assets/LLM.gif';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI Sales Agent 🤖💰📞',
      description: `Why it matters:
1. Cost efficiency – Automates outreach, qualification & follow-ups so your team can focus on high-value deals.
2. Consistent engagement – No missed leads; every prospect gets a timely, personalized touch.
3. Infinite scale – From 10 contacts to 10,000, your AI handles it all without breaking a sweat.

How it’s built:
1. Airtable – Centralizes leads, conversation history & deal stages.
2. Twilio – Powers SMS & voice outreach with tailored nudges & scheduled callbacks.
3. n8n – Orchestrates the workflow: New lead → Airtable → Twilio outreach → Status update (hands-free).

📞 Work smarter, not harder — your automated sales pipeline starts here.`,
      image: csaImage,
      tags: ['LLM', 'Automation', 'Sales Agent'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Multimodal LLM Pipeline 🧠',
      description: `Why it matters:
1. Rich context – Combines text + image signals for deeper understanding in healthcare, legal & research use cases.
2. Real-time results – GPU-accelerated inference makes retrieval + reasoning actually feasible for end users.
3. Reliable retrieval – Embedding compatibility & dim alignment prevent silent failures.

How it’s built:
1. Embeddings – CLIP/OpenCLIP for vision + Llama-3 for text with unified dims; indexed via FAISS/Delta Lake.
2. Multimodal RAG – Azure Cognitive Search + Document Intelligence structure PDFs at scale for precise answers.
3. Orchestration – Agentic workflows in n8n chain tools/APIs for contextual actions and updates.

🧠 Unlock reliable multimodal understanding — built for production.`,
      image: llmImage,
      tags: ['Multimodal', 'RAG', 'Vision', 'LLM', 'Azure'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const filters = [
    'All',
    'LLM',
    'ML',
    'Automation',
    'Sales Agent',
    'RAG'
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, filteredProjects.length);
  }, [filteredProjects]);

  // Tilt effect
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const card = projectRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = projectRefs.current[index];
    if (!card) return;
    card.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    setHoveredProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-950 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="relative inline-block px-3 py-1 mb-6 overflow-hidden">
            <div className="absolute inset-0 border border-lime-400/30 rounded-full bg-lime-400/10"></div>
            <div className="relative z-10 text-lime-400 text-sm">
              <span className="font-mono">&lt;</span>Portfolio
              <span className="font-mono">/&gt;</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="relative">
              Featured
              <span className="text-lime-400 ml-2 relative inline-block">
                Projects
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-lime-400/30"></span>
              </span>
            </span>
          </h2>
          <p className="text-gray-300">
            Explore a selection of innovative solutions I’ve delivered across industries.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-lime-400 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => handleMouseLeave(index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              ref={(el) => (projectRefs.current[index] = el)}
              style={{
                transition: 'transform 0.2s ease-out',
                willChange: 'transform',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-purple-500 rounded-xl opacity-20 blur group-hover:opacity-40 transition duration-300"></div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden relative z-10">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-6 w-full flex justify-between items-center">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-lime-400/20 hover:bg-lime-400/30 p-2 rounded-full transition-all duration-300"
                        >
                          <ExternalLinkIcon size={20} />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-gray-800/80 hover:bg-gray-700 p-2 rounded-full transition-all duration-300"
                        >
                          <GithubIcon size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 whitespace-pre-line">
                    {project.description}
                  </p>
                  <Button href={project.liveLink || '#'} className="w-full">
                    View Project Details
                  </Button>
                </div>
              </div>
              {/* Project number */}
              <div className="absolute -right-4 -top-4 w-12 h-12 bg-black border border-lime-400/30 rounded-full flex items-center justify-center z-20 text-lime-400 font-mono">
                {index < 9 ? `0${index + 1}` : index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button primary href="#contact" className="group">
            <span className="group-hover:mr-4 transition-all duration-300">
              Interested in working together?
            </span>
            <span className="relative inline-block overflow-hidden">
              <span className="group-hover:translate-x-0 -translate-x-full absolute transition-transform duration-300">
                Let&apos;s talk!
              </span>
              <span className="group-hover:translate-x-full translate-x-0 inline-block transition-transform duration-300">
                Let&apos;s talk!
              </span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
