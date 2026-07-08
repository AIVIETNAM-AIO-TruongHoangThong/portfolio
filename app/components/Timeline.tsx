import React from 'react';

export type TimelineColor = 'primary' | 'accent' | 'blue' | 'green';

export interface TimelineNode {
  id: string;
  icon: string;
  title: string;
  content: React.ReactNode;
  colorTheme: TimelineColor;
}

interface TimelineProps {
  items: TimelineNode[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-5xl mx-auto py-8">
      {/* Center line for desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2"></div>
      {/* Left line for mobile */}
      <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2"></div>

      <div className="space-y-16">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          
          const theme = {
            primary: {
              iconBg: 'bg-primary/20',
              iconColor: 'text-primary',
              borderColor: 'group-hover:border-primary/50'
            },
            accent: {
              iconBg: 'bg-accent/20',
              iconColor: 'text-accent',
              borderColor: 'group-hover:border-accent/50'
            },
            blue: {
              iconBg: 'bg-blue-500/20',
              iconColor: 'text-blue-500',
              borderColor: 'group-hover:border-blue-500/50'
            },
            green: {
              iconBg: 'bg-green-500/20',
              iconColor: 'text-green-500',
              borderColor: 'group-hover:border-green-500/50'
            }
          }[item.colorTheme];

          return (
            <div key={item.id} className="relative group w-full flex flex-col md:flex-row">
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-4 border-white dark:border-gray-900 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 bg-white dark:bg-gray-900">
                <div className={`w-full h-full rounded-full flex items-center justify-center ${theme.iconBg}`}>
                  <span className={`material-icons ${theme.iconColor}`}>{item.icon}</span>
                </div>
              </div>
              
              {/* Content wrapper */}
              <div className={`w-full md:w-[calc(50%-3rem)] pl-24 md:pl-0 pt-0 ${isEven ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>
                <div className={`bg-white/50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg p-6 lg:p-8 backdrop-blur-sm transition-all duration-300 ${theme.borderColor} shadow-sm group-hover:shadow-md`}>
                  <h3 className="text-2xl font-display font-medium text-zinc-900 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
