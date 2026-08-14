import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CurriculumSelector() {
  const pathname = usePathname();

  return (
    <div className="mb-8 flex flex-col gap-2">
      <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Select Curriculum Path</div>
      <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-px">
        <Link 
          href="/learning"
          className={`px-4 py-2 font-mono text-sm border-b-2 transition-colors ${
            pathname === '/learning' 
              ? 'border-primary text-primary font-bold' 
              : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700'
          }`}
        >
          AIO 2026
        </Link>
        <Link 
          href="/learning/ml-systems"
          className={`px-4 py-2 font-mono text-sm border-b-2 transition-colors ${
            pathname === '/learning/ml-systems' 
              ? 'border-primary text-primary font-bold' 
              : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700'
          }`}
        >
          ML Systems 2026-2027
        </Link>
      </div>
    </div>
  );
}
