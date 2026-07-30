"use client";

import Image from "next/image";


export default function TestimonialsSection() {
  

  return (
    <section className="py-24 bg-white dark:bg-zinc-900 relative border-t border-zinc-300 dark:border-zinc-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-primary"></span>
            <h2 className="text-sm font-mono text-primary font-bold uppercase tracking-widest">
              {"Testimonials"}
            </h2>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-zinc-900 dark:text-white">
            {"What People Say"}
          </h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group bg-zinc-50 dark:bg-zinc-950 p-8 md:p-10 border border-zinc-300 dark:border-zinc-700 hover:border-primary/50 transition duration-300 hover: hover:-primary/5">
            <div className="flex items-start gap-6">
              {/* Quote Icon */}
              <div className="flex-shrink-0 hidden sm:block">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-icons text-primary text-2xl">
                    format_quote
                  </span>
                </div>
              </div>

              <div className="flex-1">
                {/* Testimonial Content */}
                <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8 italic">
                  &ldquo;{"Thong is a talented AI Engineer and technical leader with strong execution and system architecture skills. While our company is moving in a different strategic and cultural direction, I genuinely believe his strengths will be an excellent fit in the right environment. He brings technical clarity, database performance, and robust system designs to teams, and any organization looking for a capable AI Engineer would benefit from his contributions."}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-zinc-300 dark:border-zinc-700">
                  <div className="relative w-16 h-16 overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition duration-300">
                    <Image
                      src="/testimonials/Bryan_Hoang-Nexus_Tech_Global.png"
                      alt="Bryan Hoang - Founder & CEO, Nexus Tech Global"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div>
                    <h4 className="font-display font-medium text-zinc-900 dark:text-white">
                      {"Bryan Hoang"}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                      {"Founder & CEO, Nexus Tech Global"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-4 right-4 opacity-5 dark:opacity-10 pointer-events-none">
              <span className="material-icons" style={{ fontSize: "120px" }}>
                format_quote
              </span>
            </div>
          </div>
        </div>

        {/* Optional: Future testimonials teaser */}
        <div className="mt-12 text-center">
          <p className="text-sm font-mono text-gray-500 dark:text-gray-400">
            {/* MORE_TESTIMONIALS_COMING_SOON */}
          </p>
        </div>
      </div>
    </section>
  );
}
