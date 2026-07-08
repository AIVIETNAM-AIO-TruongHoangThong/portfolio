'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900/50 p-1 border border-zinc-300 dark:border-zinc-700">
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center gap-1.5 px-2 py-1 text-xs font-mono rounded transition-colors ${
          language === 'en'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-zinc-600 dark:text-zinc-300 hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        title="English"
      >
        🇺🇸 EN
      </button>
      <button
        onClick={() => setLanguage('ja')}
        className={`flex items-center gap-1.5 px-2 py-1 text-xs font-mono rounded transition-colors ${
          language === 'ja'
            ? 'bg-red-600 text-white shadow-sm'
            : 'text-zinc-600 dark:text-zinc-300 hover:text-red-600 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        title="日本語"
      >
        🇯🇵 JP
      </button>
    </div>
  );
}