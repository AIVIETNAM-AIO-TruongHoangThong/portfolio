import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen bg-white dark:bg-zinc-950">
        <section className="py-20 lg:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary"></span>
            <h2 className="text-sm font-mono text-primary font-bold uppercase tracking-widest">{"// System_Architecture::Identity"}</h2>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-medium text-zinc-900 dark:text-white mb-12 leading-tight">
            AI Engineer
          </h1>

          <div className="prose prose-lg dark:prose-invert font-sans text-zinc-700 dark:text-zinc-300">
            <p className="lead text-xl text-zinc-900 dark:text-white font-medium mb-8">
              I am an AI Engineer with a focus on building production AI systems. 
            </p>

            <p>
              My engineering foundation is built on robust software development - designing backend APIs, structuring databases, 
              and writing clean, architectural code using Java, Spring, and Python. However, as the technology landscape evolves, 
              I realized that the future of engineering isn't just about writing code; it's about integrating data, cloud infrastructure, 
              and artificial intelligence to solve complex business problems.
            </p>

            <h3 className="text-2xl font-display font-medium mt-12 mb-6 text-zinc-900 dark:text-white">The Stack & The Roadmap</h3>
            
            <p>
              I am deliberately building a bridge between traditional enterprise architecture and modern AI capabilities. 
              My technical trajectory combines formal machine learning education with robust cloud engineering.
            </p>

            <div className="my-10 bg-zinc-50 dark:bg-zinc-900 p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 font-mono text-xs sm:text-sm overflow-x-auto">
              <pre className="text-zinc-800 dark:text-zinc-300 leading-relaxed">
{`                    YOU
                     │
              ┌──────┴──────┐
              │ AI Engineer │
              └──────┬──────┘
                     │
       ┌─────────────┼─────────────┐
       ↓             ↓             ↓
  AI/ML Foundation  AI Systems   Cloud
       │             │             │
   ML / DL          GenAI         Azure
   CV               LLM           Architecture
   NLP              RAG           Infrastructure
   Transformers     Agents
   Statistics       Evaluation`}
              </pre>
            </div>

            <h3 className="text-2xl font-display font-medium mt-12 mb-6 text-zinc-900 dark:text-white">Why This Path?</h3>
            <p>
              A common misconception in the current tech landscape is that AI is just API plumbing. But to build systems that actually 
              deliver business outcomes, you need an end-to-end understanding:
            </p>
            <ul>
              <li><strong>The Foundation:</strong> I am enrolled in the AIO 2026 program to build a rigorous mathematical and algorithmic foundation (Deep Learning, Transformers, NLP).</li>
              <li><strong>The Application:</strong> Targeting Microsoft's AI-103 to master enterprise AI agent and RAG development.</li>
              <li><strong>The Infrastructure:</strong> Targeting AZ-104 and AZ-305 to understand how these intelligent applications run securely, scale efficiently, and fit into larger corporate architectures on Azure.</li>
            </ul>

            <p className="mt-8">
              I am an engineer at the intersection of modeling, systems, and cloud architecture. My goal is to be the person who can say, <strong>"I can actually build this, I understand the AI behind it, 
              I understand the cloud architecture, and I understand how it fits into a real enterprise."</strong>
            </p>

          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}