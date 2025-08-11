// src/components/About.tsx
import { useState } from 'react';
import profileImage from '../assets/profile.png';

const About = () => {
  const [hoverSide, setHoverSide] = useState<'none' | 'left' | 'right'>('none');

  return (
    <section id="about" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative min-h-[500px] flex flex-col md:flex-row gap-10 md:gap-0">
          {/* Solution Design */}
          <div
            className={`order-2 md:order-1 md:w-1/2 p-6 md:p-8 transition-all duration-500 relative z-10 ${
              hoverSide === 'right'
                ? 'md:w-5/12 opacity-80'
                : hoverSide === 'left'
                ? 'md:w-7/12'
                : 'md:w-1/2'
            }`}
            onMouseEnter={() => setHoverSide('left')}
            onMouseLeave={() => setHoverSide('none')}
          >
            <div className="relative z-10 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                <span className="text-lime-400">Solution Design</span>
              </h2>
              <p className="text-gray-300 mb-6 max-w-prose">
                Complex requirements shaped into secure, scalable, and cost-efficient AI systems. Clear roadmaps, strong
                governance, and production-ready designs that align with business goals and compliance from day one.
              </p>
              <div className="border border-lime-400/30 bg-lime-400/5 rounded-lg p-4 max-w-prose">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-lime-400 mr-2">✓</span>
                    <span className="text-gray-300">End-to-end architecture (TOGAF), reference designs & delivery plans</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-lime-400 mr-2">✓</span>
                    <span className="text-gray-300">Multimodal RAG (Llama/Vicuna, Vision Transformers, Q-Former)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-lime-400 mr-2">✓</span>
                    <span className="text-gray-300">Workflow automation: n8n & Make (orchestration, human-in-the-loop)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-lime-400 mr-2">✓</span>
                    <span className="text-gray-300">Data pipelines & governance (Spark, Airflow, Delta Lake, GDPR/HIPAA)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-lime-400 mr-2">✓</span>
                    <span className="text-gray-300">Documentation that ships: ADRs, runbooks, threat models, playbooks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LLM Engineering */}
          <div
            className={`order-3 md:order-3 md:w-1/2 p-6 md:p-8 transition-all duration-500 relative z-10 ${
              hoverSide === 'left'
                ? 'md:w-5/12 opacity-80'
                : hoverSide === 'right'
                ? 'md:w-7/12'
                : 'md:w-1/2'
            }`}
            onMouseEnter={() => setHoverSide('right')}
            onMouseLeave={() => setHoverSide('none')}
          >
            <div className="relative z-10 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
                <span className="text-purple-400">LLM Engineering</span>
              </h2>
              <p className="text-gray-300 mb-6 max-w-prose">
                Transformer systems built for real users: accurate retrieval, tight latency budgets, strong evaluation, and
                observability. From fine-tuning to APIs and front-ends, the stack delivers business results—reliably.
              </p>
              <div className="border border-purple-400/30 bg-purple-400/5 rounded-lg p-4 max-w-prose">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className="text-gray-300">LLMs & transformers (Llama-3, Vicuna), fine-tuning & eval pipelines</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className="text-gray-300">Vector search & retrieval (FAISS, Azure Cognitive Search)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className="text-gray-300">Agents & tools (Vapi, function calling) with n8n/Make integrations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className="text-gray-300">APIs & apps (FastAPI, React/TS) with MLflow, CI/CD, and K8s</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className="text-gray-300">Testing & quality: unit, E2E, red-team prompts, guardrails, telemetry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Image (no background box) */}
          <div className="order-1 md:order-2 mx-auto mb-4 md:mb-0 block md:hidden">
            <div className="w-40 h-40 rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Portrait of Jeremiah Richard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Image (tasteful center overlap, still readable) */}
          <div className="hidden md:block md:absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Portrait of Jeremiah Richard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-20">
          <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-lime-400/30 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lime-400 text-3xl font-bold mb-2">7+</h3>
            <p className="text-gray-400">Years in AI/ML</p>
          </div>
          {/* CHANGED #2 */}
          <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-lime-400/30 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lime-400 text-3xl font-bold mb-2">£1M+</h3>
            <p className="text-gray-400">In Project Value Delivered</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-lime-400/30 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lime-400 text-3xl font-bold mb-2">4</h3>
            <p className="text-gray-400">Industries Served</p>
          </div>
          {/* CHANGED #4 */}
          <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-lime-400/30 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lime-400 text-3xl font-bold mb-2">100%</h3>
            <p className="text-gray-400">On-Time Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
