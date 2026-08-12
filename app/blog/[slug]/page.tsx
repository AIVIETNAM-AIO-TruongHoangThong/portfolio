import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS, getBlogPostBySlug } from '../posts';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug) || BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col justify-between selection:bg-primary selection:text-white">
      <Navigation />

      <main className="flex-grow pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Navigation */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary transition-colors"
            >
              <span className="material-icons text-sm">arrow_back</span>
              <span>cd ../blog</span>
            </Link>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>THINKING_OUT_LOUD // {post.id.toUpperCase()}</span>
            </div>
          </div>

          {/* Post Header */}
          <header className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 font-mono text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                {post.category}
              </span>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {post.date}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {post.readTime}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                By {post.author}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg sm:text-xl font-display italic text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              {post.subtitle}
            </p>
          </header>

          {/* Blog Cover Image */}
          <div className="my-8 w-full">
            <Image
              src={post.id === 'learning-ai-changed-how-i-see-software-industry' ? "/enterprise_ai_cover.jpg" : "/ai_engineering_blog_cover_v2.jpg"}
              alt={`${post.category} Cover`}
              width={1200}
              height={675}
              className="w-full h-auto rounded-xl object-cover shadow-xl border border-zinc-200 dark:border-zinc-800"
              priority
            />
          </div>

          {/* Executive Summary Callout */}
          <div className="my-8 p-6 bg-zinc-100 dark:bg-zinc-900/60 border-l-4 border-primary border-y border-r border-zinc-200 dark:border-zinc-800 font-mono text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <div className="flex items-center gap-2 mb-2 font-bold text-primary">
              <span className="material-icons text-base">terminal</span>
              <span>THE_STARTING_QUESTION</span>
            </div>
            <p>{post.excerpt}</p>
          </div>

          {/* Article Body Content */}
          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-12 text-zinc-800 dark:text-zinc-200 text-base sm:text-lg leading-relaxed font-sans">
            {post.id === 'learning-ai-changed-how-i-see-software-industry' ? (
              <LearningAiContent />
            ) : (
              <>

            {/* SECTION 1: Honest Confusion & Skepticism */}
            <section id="honest-confusion" className="space-y-6">
              <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <span className="font-mono text-sm text-primary font-bold">01.</span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-zinc-100 m-0">
                  The Core Dilemma: Is This Just API Plumbing?
                </h2>
              </div>

              <p>
                To be completely honest, I spent the last few months feeling pretty confused about where I fit in this whole AI shift.
              </p>

              <p>
                Every morning on my feed, everyone is talking about &quot;AI Engineers,&quot; autonomous agent frameworks, and multi-step reasoning loops. But when I actually looked at the code inside a lot of these hyped repositories, I couldn&apos;t stop asking myself a skeptical question:
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-2 italic font-display text-xl text-zinc-700 dark:text-zinc-300 my-6 bg-primary/5">
                &ldquo;Isn&apos;t all of this still just calling OpenAI or Anthropic endpoints under the hood? Aren&apos;t we just stringing together prompt templates, parsing JSON strings, and pretending it&apos;s new systems engineering? Where does the real AI live?&rdquo;
              </blockquote>

              <p>
                For a long time, my knee-jerk instinct was: if you want true AI, you have to go down to the metal. You have to be the person working on the raw physics and math of code - implementing Transformer attention blocks from scratch in <strong>PyTorch</strong>, writing custom <strong>CUDA / Triton</strong> kernels for matrix multiplication, optimizing GPU memory consumption, and running post-training alignment through <strong>RLHF, DPO, or GRPO</strong>.
              </p>

              <p>
                To me, that felt like where the true AI lived. Anything higher up the stack felt like superficial wrapper scripting around someone else&apos;s model - writing 500 lines of glue code just to parse a 5-word response, or spending half a afternoon engineering a prompt that politely begs the LLM not to make up fake SQL tables.
              </p>
            </section>

            {/* SECTION 2: Challenging the Assumption */}
            <section id="challenging-assumptions" className="space-y-6">
              <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <span className="font-mono text-sm text-primary font-bold">02.</span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-zinc-100 m-0">
                  Challenging My Own Assumption: LLMs as Cognitive CPUs
                </h2>
              </div>

              <p>
                Then I had an architectural discussion with a senior engineer that made me stop and re-examine my entire mental model.
              </p>

              <p>
                He asked me a simple question about systems design:
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-2 italic font-display text-xl text-zinc-700 dark:text-zinc-300 my-6 bg-primary/5">
                &ldquo;When you build a distributed database, do you care more about how silicon gates inside the CPU flip bits, or do you care about consensus protocols, write-ahead logs, page caches, and memory barriers built on top of it?&rdquo;
              </blockquote>

              <p>
                That hit me.
              </p>

              <p>
                If we treat a Large Language Model not as a magic text generator, but as a non-deterministic, probabilistic <strong>&quot;Cognitive CPU,&quot;</strong> the entire equation changes.
              </p>

              <p>
                A raw physical CPU needs a deterministic operating system around it to manage memory, schedule tasks, isolate processes, and handle peripheral I/O. In the exact same way, a probabilistic LLM requires a deterministic software runtime around it to guarantee correctness.
              </p>

              <p>
                Calling an API isn&apos;t the hard part - anyone can <code className="font-mono text-sm px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800">pip install</code> an SDK and burn through $50 in API credits in five minutes. The hard part is building software that produces predictable, type-safe telemetry out of an inherently stochastic model that might randomly decide to return JSON wrapped in markdown code blocks.
              </p>

              {/* Side-by-Side Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {/* Low-Level Model Mechanics */}
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-none shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                      <span className="font-mono text-xs text-primary font-bold tracking-wider uppercase">
                        [ Model-Centric ]
                      </span>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase">Tensor Physics</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                      Low-Level Model Mechanics
                    </h3>
                    <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      Optimizing token log-probabilities, loss curves, gradient norms, attention heads, and GPU memory bandwidth.
                    </p>
                  </div>

                  <div className="border border-zinc-800 bg-zinc-950 font-mono text-xs">
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-900/90 border-b border-zinc-800">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                      <span className="ml-2 text-[10px] text-zinc-400">attention_kernel.py</span>
                    </div>
                    <pre className="p-4 text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed font-mono text-[11px]">
                      <span className="text-zinc-500"># PyTorch Attention Kernel</span>{'\n'}
                      attn_weights = torch.matmul(q, k.transpose(-2, -1)) / math.sqrt(d_k){'\n'}
                      attn_probs = F.softmax(attn_weights, dim=-1){'\n'}
                      output = torch.matmul(attn_probs, v)
                    </pre>
                  </div>
                </div>

                {/* Systems-Level Orchestration */}
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-none shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                      <span className="font-mono text-xs text-emerald-500 font-bold tracking-wider uppercase">
                        [ System-Centric ]
                      </span>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase">Control Level</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                      Systems-Level Orchestration
                    </h3>
                    <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      Structuring schemas, state transitions, tool execution registries, fallbacks, and static type bounds.
                    </p>
                  </div>

                  <div className="border border-zinc-800 bg-zinc-950 font-mono text-xs">
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-900/90 border-b border-zinc-800">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                      <span className="ml-2 text-[10px] text-zinc-400">type_safe_agent.py</span>
                    </div>
                    <pre className="p-4 text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed font-mono text-[11px]">
                      <span className="text-zinc-500"># Pydantic AI Type-Safe Agent</span>{'\n'}
                      <span className="text-emerald-400">@agent.tool</span>{'\n'}
                      <span className="text-primary font-semibold">async def</span> query_db(ctx: RunContext, sql: SQLQuery) -&gt; QueryResult:{'\n'}
                      {'    '}validated = ctx.deps.verifier.check(sql){'\n'}
                      {'    '}<span className="text-primary font-semibold">return await</span> ctx.deps.db.execute(validated)
                    </pre>
                  </div>
                </div>
              </div>

              <p>
                Frameworks like <strong>Pydantic AI, LangGraph, DSPy, and LlamaIndex</strong> aren&apos;t just convenient wrappers. They are static typing systems, stateful graph controllers, and compiled signature runtimes engineered specifically to bring deterministic guarantees to non-deterministic model outputs.
              </p>
            </section>

            {/* SECTION 3: Digging into Mechanisms */}
            <section id="mechanism-breakdown" className="space-y-6">
              <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <span className="font-mono text-sm text-primary font-bold">03.</span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-zinc-100 m-0">
                  Peeling Back the Abstraction Layers
                </h2>
              </div>

              <p>
                When you compare traditional web software with real agentic AI systems from first principles, three distinct mechanisms stand out:
              </p>

              {/* Mechanism 1 */}
              <div className="space-y-3 p-6 bg-zinc-100/80 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
                <div className="font-mono text-xs text-primary font-bold tracking-widest uppercase">
                  MECHANISM 01 // CONTROL FLOW
                </div>
                <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100 m-0">
                  Agents vs. Traditional Web Code
                </h3>
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  Traditional web applications execute static decision trees: an incoming HTTP request hits an endpoint, runs nested <code className="font-mono text-sm px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800">if/else</code> checks, and calls hard-coded API chains.
                </p>
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  Agentic architectures shift decision-making into semantic space. Instead of static branches, agents ingest context, evaluate intent, autonomously select tools from a registry, assess their own intermediate execution results, and attempt self-correction when an API throws an error. That isn&apos;t simple scripting - it&apos;s dynamic control flow.
                </p>
              </div>

              {/* Mechanism 2 */}
              <div className="space-y-3 p-6 bg-zinc-100/80 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
                <div className="font-mono text-xs text-primary font-bold tracking-widest uppercase">
                  MECHANISM 02 // DATA ARCHITECTURE
                </div>
                <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100 m-0">
                  Agents as Intelligent Controllers Over Databases
                </h3>
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  There&apos;s a popular myth that AI agents will somehow make relational SQL databases obsolete. But why would they? You don&apos;t use an LLM to replace fast B-tree index lookups or ACID-compliant joins.
                </p>
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  We use agents as an <strong>intelligent controller</strong> positioned above relational and vector databases to handle human chaos. Human intent is messy and ambiguous; relational databases demand crisp SQL. The agent acts as a cognitive buffer - interpreting messy Text-to-SQL intent, resolving entity ambiguities, enriching dirty text, and reasoning through business edge cases before committing state to storage.
                </p>
              </div>

              {/* Mechanism 3 */}
              <div className="space-y-3 p-6 bg-zinc-100/80 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
                <div className="font-mono text-xs text-primary font-bold tracking-widest uppercase">
                  MECHANISM 03 // COMPETITIVE ARENAS
                </div>
                <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100 m-0">
                  Lessons from the <a href="https://aichallenge.hochiminhcity.gov.vn/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">Ho Chi Minh City AI Challenge (HCMC AIC)</a>
                </h3>
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  I&apos;m seeing this firsthand right now - as of writing this post, I&apos;m actively preparing and competing in the <a href="https://aichallenge.hochiminhcity.gov.vn/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80 transition-opacity font-semibold">Ho Chi Minh City AI Challenge (HCMC AIC)</a>.
                </p>
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  In these high-pressure settings, winning is never about training a 70-billion parameter model from scratch in a limited time frame. Victory comes down to system orchestration: multi-agent query expansion pipelines, indexing visual vectors across temporal keyframes, routing queries dynamically based on modality confidence, and executing sub-second hybrid searches across vector indices. System design beats brute-force training every single time.
                </p>
              </div>
            </section>

            {/* SECTION 4: Arriving at the Conclusion */}
            <section id="conclusion" className="space-y-6">
              <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <span className="font-mono text-sm text-primary font-bold">04.</span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-zinc-100 m-0">
                  My Strategic Path Forward: The Hybrid Engineer
                </h2>
              </div>

              <p>
                So where does this leave me?
              </p>

              <p>
                Through this reflection, I realized I don&apos;t have to choose between being &quot;the low-level model trainer&quot; or &quot;the high-level systems architect.&quot; They aren&apos;t opposing paths - they are complementary layers of the same stack.
              </p>

              <p>
                That&apos;s why I&apos;ve been systematically grounding myself in traditional AI fundamentals - working through the mathematics, linear algebra, and classical deep learning architectures in the <a href="https://aivietnam.edu.vn/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80 transition-opacity">AI Viet Nam (AIO)</a> program - while keeping my primary identity and focus as a production software engineer.
              </p>

              <p>
                The strongest agent developers are those who deeply understand token mechanics, attention saturation, and quantization degradation under the hood. And the best model engineers are those who understand how downstream production systems consume their weights in real-world infrastructure.
              </p>

              <div className="p-8 bg-zinc-900 text-zinc-100 border border-primary/40 my-8 shadow-2xl space-y-6">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                  <span className="material-icons text-primary text-xl">flag</span>
                  <h3 className="font-mono text-sm font-bold text-primary tracking-wider uppercase m-0">
                    MY_PATH_FORWARD // THE_HYBRID_ENGINEER
                  </h3>
                </div>

                <p className="font-display text-lg text-zinc-200 leading-relaxed italic">
                  &ldquo;My path forward to bridge both worlds is mastering deep learning fundamentals under the hood, while using my backend engineering foundation to build type-safe, production-grade AI systems.&rdquo;
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-zinc-950 border border-zinc-800">
                    <div className="font-mono text-xs text-primary font-bold mb-1">STEP 1: THE FOUNDATION</div>
                    <div className="font-bold text-sm text-white mb-2">Deep Learning &amp; Model Mechanics</div>
                    <p className="text-xs font-mono text-zinc-400">
                      Understanding vector space math, attention mechanisms, embeddings, and token behavior from first principles.
                    </p>
                  </div>

                  <div className="p-4 bg-zinc-950 border border-zinc-800">
                    <div className="font-mono text-xs text-emerald-400 font-bold mb-1">STEP 2: THE SYSTEMS</div>
                    <div className="font-bold text-sm text-white mb-2">Type-Safe Agent Orchestration</div>
                    <p className="text-xs font-mono text-zinc-400">
                      Building deterministic, production-grade agent runtimes using <strong>Pydantic AI</strong>, <strong>FastAPI</strong>, and structured tool registries.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                By mastering traditional AI model mechanics while keeping my software engineering discipline at the core, I can build systems that are both mathematically sound and enterprise-ready.
              </p>

              <p className="pt-4 font-display italic text-zinc-600 dark:text-zinc-400 text-lg">
                That is the engineer I am building myself to be.
              </p>
            </section>
              </>
            )}
          </div>

          {/* Footer Author Bio Card */}
          <footer className="mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800">
            <div className="p-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center gap-6">
              <div className="h-16 w-16 bg-primary/10 border border-primary flex items-center justify-center shrink-0">
                <span className="font-mono font-bold text-2xl text-primary">&gt;_</span>
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100">
                  Thong Truong
                </h3>
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  Software Engineer | Focused on AI Systems, Deep Learning &amp; Data Engineering
                </p>
                <div className="pt-2 flex justify-center sm:justify-start gap-4 font-mono text-xs">
                  <a
                    href="https://github.com/AIVIETNAM-AIO-TruongHoangThong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                  <span className="text-zinc-400">•</span>
                  <a
                    href="https://www.linkedin.com/in/thongtr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    LinkedIn
                  </a>
                  <span className="text-zinc-400">•</span>
                  <Link href="/blog" className="text-primary hover:underline">
                    Back to All Posts
                  </Link>
                </div>
              </div>
            </div>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}

function LearningAiContent() {
  return (
    <>
      {/* SECTION 1: The Illusion of Pure Engineering */}
      <section id="illusion-of-pure-engineering" className="space-y-6">
        <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <span className="font-mono text-sm text-primary font-bold">01.</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-zinc-100 m-0">
            The Illusion of Pure Engineering
          </h2>
        </div>

        <p>
          When I first enrolled in the <a href="https://aivietnam.edu.vn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">AIO 2026 program</a>, my goal was purely technical. I wanted to understand the mathematical mechanics behind Transformers, how multi-head self-attention computes context vectors, and how to train neural networks from first principles.
        </p>

        <p>
          Coming from a traditional software engineering background—where I spent my days designing backend APIs in Java/Spring and managing relational databases—I held a classic developer dogma: <em>&quot;The closer you operate to the raw silicon, matrix math, and loss gradients, the higher your engineering value.&quot;</em> In my mind, classical ML and custom PyTorch kernels represented the mythical, elite tier of computer science. Anything higher up the stack felt like ordinary business glue.
        </p>

        <p>
          However, as I started building practical AI systems and analyzing how artificial intelligence actually creates impact in the real world, a conversation with an industry mentor completely shifted my mental model:
        </p>

        <blockquote className="border-l-4 border-primary pl-6 py-3 italic font-display text-xl text-zinc-700 dark:text-zinc-300 my-6 bg-primary/5">
          &ldquo;Building the neural network is not the same as building the solution. The most mathematically beautiful model in the world provides exactly zero business value if it isn&apos;t integrated into a secure, scalable enterprise architecture.&rdquo;
        </blockquote>

        <p>
          That statement forced me to step back from the terminal and examine the broader software industry through a completely different lens.
        </p>
      </section>

      {/* SECTION 2: Deconstructing the IT Services Spectrum */}
      <section id="deconstructing-it-spectrum" className="space-y-6">
        <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <span className="font-mono text-sm text-primary font-bold">02.</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-zinc-100 m-0">
            Deconstructing the IT Services Spectrum
          </h2>
        </div>

        <p>
          To understand where engineering value actually lives, we have to deconstruct how the global technology services industry is organized. It isn&apos;t a simplistic binary of <em>&quot;Companies need code $\rightarrow$ Outsourcing vendors supply coders.&quot;</em> It is a continuous spectrum of value creation:
        </p>

        {/* 3-Column Value Spectrum Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          
          {/* Column 1: MBB / Strategy */}
          <div className="p-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                <span className="font-mono text-xs text-amber-500 font-bold tracking-wider uppercase">
                  [ Strategy Tier ]
                </span>
                <span className="font-mono text-[10px] text-zinc-500">MBB</span>
              </div>
              <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                Strategy Consulting
              </h3>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4">
                McKinsey • BCG • Bain
              </p>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 font-mono text-xs text-zinc-700 dark:text-zinc-300 mb-4">
                <strong>Core Question:</strong><br />
                &ldquo;What should the business do?&rdquo;
              </div>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 list-disc list-inside font-sans">
                <li>Corporate &amp; market strategy</li>
                <li>Capital allocation</li>
                <li>Operating models</li>
                <li>Organizational transformation</li>
              </ul>
            </div>
          </div>

          {/* Column 2: Technology Consulting */}
          <div className="p-6 bg-zinc-100 dark:bg-zinc-900 border-2 border-primary flex flex-col justify-between relative shadow-md">
            <div className="absolute -top-3 right-4 px-2 py-0.5 bg-primary text-white font-mono text-[10px] uppercase font-bold tracking-wider">
              High Leverage
            </div>
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                <span className="font-mono text-xs text-primary font-bold tracking-wider uppercase">
                  [ Architecture Tier ]
                </span>
                <span className="font-mono text-[10px] text-zinc-500">Consulting &amp; Systems</span>
              </div>
              <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                Technology Consulting
              </h3>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4">
                Accenture • Capgemini • IBM • Big 4
              </p>
              <div className="p-3 bg-primary/5 border border-primary/20 font-mono text-xs text-zinc-700 dark:text-zinc-300 mb-4">
                <strong>Core Question:</strong><br />
                &ldquo;How should technology be architected to solve the business problem?&rdquo;
              </div>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 list-disc list-inside font-sans">
                <li>End-to-end solution design</li>
                <li>Cloud &amp; enterprise architecture</li>
                <li>AI &amp; Data engineering systems</li>
                <li>Full production implementation</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Traditional ITO */}
          <div className="p-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                <span className="font-mono text-xs text-zinc-500 font-bold tracking-wider uppercase">
                  [ Capacity Tier ]
                </span>
                <span className="font-mono text-[10px] text-zinc-500">ITO</span>
              </div>
              <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                Traditional IT Outsourcing
              </h3>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4">
                Capacity-Based Staff Augmentation
              </p>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 font-mono text-xs text-zinc-700 dark:text-zinc-300 mb-4">
                <strong>Core Question:</strong><br />
                &ldquo;How many developer hours do you need?&rdquo;
              </div>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 list-disc list-inside font-sans">
                <li>Billable engineering capacity</li>
                <li>Ticket-based coding assignments</li>
                <li>Headcount provisioning</li>
                <li>Direct labor arbitrage</li>
              </ul>
            </div>
          </div>

        </div>

        <p>
          Historically, the boundaries between these tiers were distinct. But today, the lines are blurring. MBB firms are establishing internal technology units, while ITO providers strive to move upmarket into consulting. The critical differentiator is not what firms call themselves—it is <strong>where in the value chain they create and capture value</strong>.
        </p>
      </section>

      {/* SECTION 3: The Economic Shockwave: How AI Transforms the Value Chain */}
      <section id="economic-shockwave" className="space-y-6">
        <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <span className="font-mono text-sm text-primary font-bold">03.</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-zinc-100 m-0">
            The Economic Shockwave: How AI Commoditizes Raw Hours
          </h2>
        </div>

        <p>
          This is where artificial intelligence becomes an economic catalyst.
        </p>

        <p>
          The traditional IT outsourcing model is mathematically tethered to developer headcount:
        </p>

        <div className="p-4 bg-zinc-900 text-zinc-100 font-mono text-sm border-l-4 border-amber-500 my-4 text-center">
          Revenue = Billable Developer Hours &times; Hourly Rate
        </div>

        <p>
          However, modern AI tooling acts as an exponential productivity multiplier. From writing boilerplate scaffolding and generating unit tests to debugging SQL queries and automating refactoring, AI dramatically compresses the time required to produce code.
        </p>

        <p>
          This does not mean software engineers will disappear. It means that <strong>raw, undifferentiated coding labor is being commoditized</strong>. If a developer assisted by AI can produce in 2 hours what previously took 10 hours, a business model that sells hours faces structural deflation.
        </p>

        <p>
          Conversely, companies like Accenture and modern technology consulting practices operate under a fundamentally different value proposition:
        </p>

        <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 italic font-display text-xl text-zinc-700 dark:text-zinc-300 my-6 bg-emerald-500/5">
          &ldquo;Instead of selling 500 developer hours, we sell the end-to-end technology solution that unlocks business transformation.&rdquo;
        </blockquote>

        <p>
          For outcome-oriented firms, AI is not a revenue threat—it is a delivery accelerator. It enables them to design, build, test, and deploy complex systems faster and at higher margins, while continuing to capture value from the <strong>solution architecture</strong> rather than the time spent typing.
        </p>

        <p>
          In this new reality, economic value shifts decisively toward:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 font-mono text-xs">
          <div className="p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-primary font-bold block mb-1">01. BUSINESS PROBLEM FORMULATION</span>
            <span className="text-zinc-600 dark:text-zinc-400">Translating ambiguous organizational bottlenecks into precise technical requirements.</span>
          </div>
          <div className="p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-emerald-500 font-bold block mb-1">02. ENTERPRISE AI ARCHITECTURE</span>
            <span className="text-zinc-600 dark:text-zinc-400">Designing secure RAG pipelines, agent registries, vector search, and model orchestration runtimes.</span>
          </div>
          <div className="p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-blue-500 font-bold block mb-1">03. CLOUD &amp; SECURITY INTEGRATION</span>
            <span className="text-zinc-600 dark:text-zinc-400">Configuring enterprise IAM, private networking, data compliance, and automated MLOps pipelines.</span>
          </div>
          <div className="p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <span className="text-purple-500 font-bold block mb-1">04. PRODUCTION DEPLOYMENT &amp; RESILIENCE</span>
            <span className="text-zinc-600 dark:text-zinc-400">Ensuring low latency, high availability, telemetry, and fault-tolerant state persistence.</span>
          </div>
        </div>
      </section>

      {/* SECTION 4: Connecting the Micro to the Macro */}
      <section id="connecting-micro-macro" className="space-y-6">
        <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <span className="font-mono text-sm text-primary font-bold">04.</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-zinc-100 m-0">
            Connecting the Micro to the Macro
          </h2>
        </div>

        <p>
          In my <Link href="/blog/is-ai-engineering-just-api-plumbing" className="text-primary hover:underline font-semibold">previous blog post on AI Engineering</Link>, I explored the <strong>Micro / Systems level</strong>: demonstrating why agent runtimes, dynamic semantic control flow, and deterministic state management are where real systems engineering lives.
        </p>

        <p>
          This essay is the <strong>Macro / Enterprise counterpart</strong>.
        </p>

        <p>
          When an enterprise adopts Generative AI, they do not just need a chatbot in a standalone browser window. They require an integrated architecture that bridges three foundational tiers:
        </p>

        {/* 3-Tier Enterprise Stack */}
        <div className="p-6 bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4 my-6">
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded bg-primary/10 border border-primary text-primary font-mono text-sm font-bold flex items-center justify-center shrink-0">
              01
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">
                The AI Layer (Modeling &amp; Intelligence)
              </h4>
              <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                Grounding models in foundational mathematics (Transformers, embeddings, vector indexing, fine-tuning, and semantic evaluation).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-4">
            <div className="h-8 w-8 rounded bg-emerald-500/10 border border-emerald-500 text-emerald-500 font-mono text-sm font-bold flex items-center justify-center shrink-0">
              02
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">
                The Application Layer (Software Engineering Discipline)
              </h4>
              <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                Designing type-safe REST APIs, microservices, background job workers, and database schemas using Java, Python, and SQL.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-4">
            <div className="h-8 w-8 rounded bg-blue-500/10 border border-blue-500 text-blue-500 font-mono text-sm font-bold flex items-center justify-center shrink-0">
              03
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">
                The Cloud &amp; Governance Layer (Enterprise Infrastructure)
              </h4>
              <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                Provisioning scalable cloud compute (Azure), identity and access management (IAM), data lake security, telemetry, and automated MLOps.
              </p>
            </div>
          </div>
        </div>

        <p>
          A machine learning model without an application wrapper is just an academic experiment. An application without secure enterprise cloud infrastructure is a corporate liability. True business impact happens exclusively at the intersection of all three.
        </p>
      </section>

      {/* SECTION 5: My Trajectory */}
      <section id="career-trajectory" className="space-y-6">
        <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <span className="font-mono text-sm text-primary font-bold">05.</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-zinc-100 m-0">
            My Trajectory: The Deliberate Bridge
          </h2>
        </div>

        <p>
          This realization transformed how I view my own background.
        </p>

        <p>
          My years in software engineering—building Java/Spring APIs, managing database migrations, and architecting backend services—weren&apos;t a detour from AI. They were the essential foundation. They gave me the discipline to understand latency, concurrency, schema integrity, and state management.
        </p>

        <p>
          Rather than trying to leap prematurely to high-level consulting titles, I am executing a deliberate, multi-stage engineering roadmap:
        </p>

        {/* Trajectory Blueprint Card */}
        <div className="p-8 bg-zinc-900 text-zinc-100 border border-primary/40 my-8 shadow-2xl space-y-6">
          <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
            <span className="material-icons text-primary text-xl">timeline</span>
            <h3 className="font-mono text-sm font-bold text-primary tracking-wider uppercase m-0">
              STRATEGIC_TRAJECTORY // CAREER_ROADMAP
            </h3>
          </div>

          <div className="font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto py-2">
            <pre className="text-zinc-200 leading-relaxed">
{`  [ CURRENT BASE ]                [ IMMEDIATE IDENTITY ]                [ LONG-TERM VISION ]
  Software Engineer      ───▶          AI Engineer             ───▶     AI Solution Architect
  (Java, APIs, DBs)             (AIO 2026 + Production AI)              (Cloud, Enterprise & Systems)`}
            </pre>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-zinc-950 border border-zinc-800">
              <div className="font-mono text-[10px] text-zinc-400 font-bold mb-1">STAGE 1: THE CORE</div>
              <div className="font-bold text-sm text-white mb-2">Software Engineering</div>
              <p className="text-xs font-mono text-zinc-400">
                Backend architecture, clean API contracts, database persistence, and high-throughput reliability.
              </p>
            </div>

            <div className="p-4 bg-zinc-950 border border-primary/60">
              <div className="font-mono text-[10px] text-primary font-bold mb-1">STAGE 2: THE EXPANSION</div>
              <div className="font-bold text-sm text-white mb-2">AI Systems &amp; AIO 2026</div>
              <p className="text-xs font-mono text-zinc-400">
                Broad AI/ML depth: Classical ML, Deep Learning, CV, NLP, Transformers, and type-safe agent runtimes.
              </p>
            </div>

            <div className="p-4 bg-zinc-950 border border-zinc-800">
              <div className="font-mono text-[10px] text-emerald-400 font-bold mb-1">STAGE 3: THE SYNTHESIS</div>
              <div className="font-bold text-sm text-white mb-2">Enterprise Cloud &amp; Solution Design</div>
              <p className="text-xs font-mono text-zinc-400">
                Mastering Azure cloud architecture, enterprise governance, and scalable end-to-end AI integration.
              </p>
            </div>
          </div>
        </div>

        <p>
          I am building myself into an engineer who can sit across the entire value chain: someone who understands the business problem, architects the cloud infrastructure, comprehends the deep learning mechanics under the hood, and writes the production code that brings the system to life.
        </p>

        <p className="pt-4 font-display italic text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
          This isn&apos;t the end of my learning journey. It is the moment where I finally understand exactly where the journey is going.
        </p>
      </section>
    </>
  );
}
