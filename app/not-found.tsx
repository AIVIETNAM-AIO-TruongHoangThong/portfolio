import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 md:p-12 relative overflow-hidden">
        {/* Decorative corner markers */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary -translate-x-1 -translate-y-1"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary translate-x-1 -translate-y-1"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary -translate-x-1 translate-y-1"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary translate-x-1 translate-y-1"></div>

        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
              Error_404
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-medium text-zinc-900 dark:text-zinc-100 tracking-tight leading-[1.1]">
            <span className="text-primary italic">Null</span> Reference Exception
          </h1>
          
          <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 py-2 my-8">
            <p className="text-lg font-mono text-zinc-600 dark:text-zinc-400">
              {/* SYSTEM.LOG */}
              The requested routing pointer could not be resolved. <br />
              Target memory block may have been deallocated.
            </p>
          </div>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-mono font-bold text-white bg-primary hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-zinc-900 transition-colors duration-300 border border-primary group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">&lt;</span>
            <span className="mx-2">Return_to_Origin()</span>
          </Link>
        </div>
      </div>
    </div>
  );
}