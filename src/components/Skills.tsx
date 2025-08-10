import React from 'react';
import { CodeIcon, BrainCircuitIcon, ServerIcon, PencilRulerIcon, DatabaseIcon } from 'lucide-react';
const SkillCard = ({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-lime-400/50 hover:bg-gray-900/80 group">
      <div className="w-12 h-12 bg-lime-400/10 text-lime-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-all duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>;
};
const Skills = () => {
  const skillsData = [{
    icon: BrainCircuitIcon,
    title: 'Prompt Engineering',
    description: 'Expert in crafting effective prompts for LLMs to generate high-quality, relevant outputs for specific use cases.'
  }, {
    icon: CodeIcon,
    title: 'LLM Fine-tuning',
    description: 'Specialized in customizing large language models to perform specific tasks with improved accuracy and efficiency.'
  }, {
    icon: ServerIcon,
    title: 'API Integration',
    description: 'Seamlessly integrate AI capabilities into existing systems through robust API implementations and workflows.'
  }, {
    icon: PencilRulerIcon,
    title: 'AI-powered Apps',
    description: 'Design and develop end-to-end applications leveraging the latest in generative AI technologies.'
  }, {
    icon: DatabaseIcon,
    title: 'Cloud Deployment',
    description: 'Deploy and scale AI solutions on major cloud platforms with optimized performance and cost efficiency.'
  }];
  return <section id="skills" className="py-20 bg-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-lime-400/30 rounded-full bg-lime-400/10 text-lime-400 text-sm">
            Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Specialized Skills in{' '}
            <span className="text-lime-400">Generative AI</span>
          </h2>
          <p className="text-gray-300">
            Leveraging cutting-edge AI technologies to deliver innovative
            solutions that drive business growth and transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => <SkillCard key={index} icon={skill.icon} title={skill.title} description={skill.description} />)}
        </div>
      </div>
    </section>;
};
export default Skills;