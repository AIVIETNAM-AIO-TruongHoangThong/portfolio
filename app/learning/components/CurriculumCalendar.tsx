'use client';

import { useState, useEffect, useMemo } from 'react';
import { DayOfWeek, Lesson, StudyMode, WeekData } from '../ml-systems/data';

const DAY_LABELS: { id: DayOfWeek; short: string; full: string }[] = [
  { id: 'mon', short: 'Mon', full: 'Monday' },
  { id: 'tue', short: 'Tue', full: 'Tuesday' },
  { id: 'wed', short: 'Wed', full: 'Wednesday' },
  { id: 'thu', short: 'Thu', full: 'Thursday' },
  { id: 'fri', short: 'Fri', full: 'Friday' },
  { id: 'sat', short: 'Sat', full: 'Saturday' },
  { id: 'sun', short: 'Sun', full: 'Sunday' },
];

const TYPE_META: Record<string, { icon: string; label: string; color: string }> = {
  read:     { icon: 'menu_book',    label: 'Read',     color: 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-800/50' },
  watch:    { icon: 'play_circle',  label: 'Watch',    color: 'text-violet-600 bg-violet-50 border-violet-200 dark:text-violet-400 dark:bg-violet-950/40 dark:border-violet-800/50' },
  build:    { icon: 'code',         label: 'Build',    color: 'text-sky-600 bg-sky-50 border-sky-200 dark:text-sky-400 dark:bg-sky-950/40 dark:border-sky-800/50' },
  explore:  { icon: 'explore',      label: 'Explore',  color: 'text-orange-600 bg-orange-50 border-orange-200 dark:text-orange-400 dark:bg-orange-950/40 dark:border-orange-800/50' },
  research: { icon: 'science',      label: 'Research', color: 'text-rose-600 bg-rose-50 border-rose-200 dark:text-rose-400 dark:bg-rose-950/40 dark:border-rose-800/50' },
  optional: { icon: 'self_improvement', label: 'Optional', color: 'text-zinc-500 bg-zinc-50 border-zinc-200 dark:text-zinc-400 dark:bg-zinc-900 dark:border-zinc-800' },
};

const MODE_META: Record<StudyMode, { label: string; badge: string }> = {
  'review':        { label: 'Review',       badge: 'bg-zinc-100 text-zinc-600 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700' },
  'standard':      { label: 'Standard',     badge: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50' },
  'deep-study':    { label: 'Deep Study',   badge: 'bg-primary/10 text-primary border-primary/30' },
  'research-prep': { label: 'Research Prep', badge: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-700/50' },
};

function getWeekDateRange(startDate?: string) {
  if (!startDate) return '';
  const start = new Date(startDate);
  const end = new Date(start.getTime() + 6 * 24 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return `${fmt(start)} – ${fmt(end)}, ${start.getFullYear()}`;
}

function getDayDate(startDate: string | undefined, dayIndex: number) {
  if (!startDate) return null;
  const d = new Date(startDate);
  d.setDate(d.getDate() + dayIndex);
  return d;
}

interface CurriculumCalendarProps {
  title: string;
  subtitle: string;
  data: WeekData[];
}

export default function CurriculumCalendar({ title, subtitle, data }: CurriculumCalendarProps) {
  const [activeWeekNum, setActiveWeekNum] = useState<number>(1);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const now = new Date();
    const currentWeek = data.find(w => {
      if (!w.startDate) return false;
      const start = new Date(w.startDate);
      const end = new Date(start.getTime() + 7 * 24 * 60 * 60 * 1000);
      return start <= now && end > now;
    });
    if (currentWeek) setActiveWeekNum(currentWeek.weekNumber);
  }, [data]);

  const activeWeek = useMemo(
    () => data.find(w => w.weekNumber === activeWeekNum) || data[0],
    [activeWeekNum, data]
  );

  const todayDayId = useMemo(() => {
    const jsDay = new Date().getDay(); // 0=Sun
    const map: DayOfWeek[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    return map[jsDay];
  }, []);

  const isCurrentWeek = useMemo(() => {
    if (!activeWeek?.startDate) return false;
    const now = new Date();
    const start = new Date(activeWeek.startDate);
    const end = new Date(start.getTime() + 7 * 24 * 60 * 60 * 1000);
    return start <= now && end > now;
  }, [activeWeek]);

  const todayLesson = useMemo(() => {
    if (!isCurrentWeek) return null;
    return activeWeek?.lessons.find(l => l.day === todayDayId) || null;
  }, [isCurrentWeek, activeWeek, todayDayId]);

  if (!mounted || !activeWeek) return null;

  const mode = MODE_META[activeWeek.studyMode];

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm mt-1">
          {subtitle}
        </p>
      </div>

      {/* ──────────── TODAY'S FOCUS ──────────── */}
      {isCurrentWeek && todayLesson && (
        <div
          onClick={() => setSelectedLesson(todayLesson)}
          className="mb-8 border-2 border-primary/40 bg-white dark:bg-zinc-900 p-5 cursor-pointer hover:border-primary transition-all group"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-[11px] font-mono font-bold text-primary uppercase tracking-widest">
              Today&apos;s Focus — {DAY_LABELS.find(d => d.id === todayDayId)?.full}
            </span>
          </div>
          <div className="flex items-start gap-4">
            <span className={`material-icons text-2xl mt-0.5 ${TYPE_META[todayLesson.type]?.color.split(' ')[0]}`}>
              {TYPE_META[todayLesson.type]?.icon}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 border rounded-sm ${TYPE_META[todayLesson.type]?.color}`}>
                  {TYPE_META[todayLesson.type]?.label}
                </span>
                <span className="text-xs text-zinc-400 font-mono">{todayLesson.estimatedHours}h</span>
              </div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-primary transition-colors leading-snug">
                {todayLesson.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">{todayLesson.description}</p>
            </div>
            <span className="material-icons text-zinc-300 dark:text-zinc-600 group-hover:text-primary transition-colors shrink-0">arrow_forward</span>
          </div>
        </div>
      )}

      {/* ──────────── CONTROLS BAR ──────────── */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4">
        {/* Volume + Week Selectors */}
        <div className="flex items-center gap-2 flex-wrap">
          <select
            className="h-9 px-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm font-mono rounded-md focus:ring-2 focus:ring-primary outline-none"
            value={activeWeekNum <= 16 ? 'vol1' : 'vol2'}
            onChange={(e) => setActiveWeekNum(e.target.value === 'vol1' ? 1 : 17)}
          >
            <option value="vol1">Vol I · Foundations</option>
            <option value="vol2">Vol II · At Scale</option>
          </select>
          <select
            className="h-9 px-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm font-mono rounded-md focus:ring-2 focus:ring-primary outline-none max-w-[220px]"
            value={activeWeekNum}
            onChange={(e) => setActiveWeekNum(Number(e.target.value))}
          >
            {data.map(w => (
              <option key={w.weekNumber} value={w.weekNumber}>
                W{w.weekNumber}: {w.title}
              </option>
            ))}
          </select>
        </div>

        {/* Week Nav */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveWeekNum(Math.max(1, activeWeekNum - 1))}
            disabled={activeWeekNum === 1}
            className="h-9 w-9 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 transition-colors"
          >
            <span className="material-icons text-base">chevron_left</span>
          </button>
          <div className="text-center min-w-[180px] text-sm font-bold">
            <div>Week {activeWeek.weekNumber} <span className="font-normal text-zinc-400">of {data.length}</span></div>
            <div className="text-[11px] font-mono font-normal text-zinc-500">{getWeekDateRange(activeWeek.startDate)}</div>
          </div>
          <button
            onClick={() => setActiveWeekNum(Math.min(data.length, activeWeekNum + 1))}
            disabled={activeWeekNum === data.length}
            className="h-9 w-9 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 transition-colors"
          >
            <span className="material-icons text-base">chevron_right</span>
          </button>
          <button
            onClick={() => {
              const now = new Date();
              const cw = data.find(w => {
                if (!w.startDate) return false;
                const s = new Date(w.startDate);
                return s <= now && new Date(s.getTime() + 7 * 86400000) > now;
              });
              setActiveWeekNum(cw ? cw.weekNumber : 1);
            }}
            className="h-9 px-3 bg-primary text-white text-xs font-bold rounded-md hover:bg-primary/90 transition-colors uppercase tracking-wider"
          >
            Today
          </button>
        </div>
      </div>

      {/* ──────────── WEEK HEADER ──────────── */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-t-md p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm border ${mode.badge}`}>
              {mode.label}
            </span>
            <span className="text-[11px] font-mono text-zinc-400">{activeWeek.theme} · {activeWeek.category}</span>
          </div>
          <h2 className="font-display font-bold text-xl text-zinc-900 dark:text-white">{activeWeek.title}</h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-xl">{activeWeek.objective}</p>
        </div>
        <div className="shrink-0 text-right bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md px-3 py-2">
          <div className="text-[10px] uppercase font-bold text-zinc-400 mb-0.5">Expected Output</div>
          <div className="text-xs font-mono text-zinc-700 dark:text-zinc-300 max-w-[250px]">{activeWeek.expectedOutput}</div>
        </div>
      </div>

      {/* ──────────── TIMETABLE GRID ──────────── */}
      <div className="bg-white dark:bg-zinc-950 border border-t-0 border-zinc-200 dark:border-zinc-800 rounded-b-md overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
          {DAY_LABELS.map((day, dayIndex) => {
            const lesson = activeWeek.lessons.find(l => l.day === day.id);
            const isToday = isCurrentWeek && todayDayId === day.id;
            const isWeekend = day.id === 'sat' || day.id === 'sun';
            const dayDate = getDayDate(activeWeek.startDate, dayIndex);
            const dayNum = dayDate ? dayDate.getDate() : '';
            const typeMeta = lesson ? TYPE_META[lesson.type] : null;

            return (
              <div
                key={day.id}
                className={`flex flex-col border-b border-r border-zinc-100 dark:border-zinc-800/60 last:border-r-0
                  ${isToday ? 'bg-primary/[0.03] ring-2 ring-inset ring-primary/30' : ''}`}
              >
                {/* Day Header */}
                <div className={`px-3 py-2 border-b border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between
                  ${isToday ? 'bg-primary/10' : 'bg-zinc-50 dark:bg-zinc-900/50'}`}>
                  <span className={`text-xs font-bold uppercase tracking-wider ${isToday ? 'text-primary' : 'text-zinc-500'}`}>
                    {day.short}
                  </span>
                  <span className={`text-[11px] font-mono ${isToday ? 'text-primary font-bold' : 'text-zinc-400'}`}>
                    {dayNum}
                  </span>
                </div>

                {/* Lesson Card or Empty */}
                <div className="flex-1 min-h-[140px] p-2">
                  {lesson && typeMeta ? (
                    <div
                      onClick={() => setSelectedLesson(lesson)}
                      className={`h-full border rounded-md p-3 cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5 flex flex-col ${typeMeta.color}`}
                    >
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="material-icons text-sm">{typeMeta.icon}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">{typeMeta.label}</span>
                      </div>
                      <p className="text-xs font-semibold leading-snug line-clamp-3 flex-1">{lesson.title}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-[10px] font-mono opacity-70">{lesson.estimatedHours}h</span>
                        <span className="material-icons text-xs opacity-40">open_in_new</span>
                      </div>
                    </div>
                  ) : isWeekend ? (
                    <div className="h-full border border-dashed border-zinc-200 dark:border-zinc-800 rounded-md p-3 flex flex-col items-center justify-center text-center">
                      <span className="material-icons text-lg text-zinc-300 dark:text-zinc-700 mb-1">self_improvement</span>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">Catch-up</span>
                      <span className="text-[10px] text-zinc-400 mt-0.5">Project work</span>
                    </div>
                  ) : (
                    <div className="h-full border border-dashed border-zinc-200 dark:border-zinc-800 rounded-md p-3 flex items-center justify-center">
                      <span className="text-[10px] font-mono text-zinc-300">—</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ──────────── WEEK OVERVIEW STRIP ──────────── */}
      <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
        {data.map(w => {
          const m = MODE_META[w.studyMode];
          return (
            <button
              key={w.weekNumber}
              onClick={() => setActiveWeekNum(w.weekNumber)}
              title={`W${w.weekNumber}: ${w.title}`}
              className={`shrink-0 h-8 w-8 rounded-md text-[10px] font-bold border flex items-center justify-center transition-all
                ${w.weekNumber === activeWeekNum
                  ? 'ring-2 ring-primary border-primary bg-primary text-white scale-110'
                  : m.badge + ' hover:scale-105 opacity-70 hover:opacity-100'}`}
            >
              {w.weekNumber}
            </button>
          );
        })}
      </div>

      {/* ──────────── LESSON MODAL ──────────── */}
      {selectedLesson && (() => {
        const tm = TYPE_META[selectedLesson.type];
        const diff = MODE_META[selectedLesson.difficulty || activeWeek.studyMode];
        return (
          <>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setSelectedLesson(null)} />
            <div className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-lg -translate-x-1/2 -translate-y-1/2 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl rounded-xl overflow-hidden">
              <div className={`px-6 py-4 ${tm?.color || ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-xl">{tm?.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-widest">{DAY_LABELS.find(d => d.id === selectedLesson.day)?.full} · {tm?.label}</span>
                  </div>
                  <button onClick={() => setSelectedLesson(null)} className="opacity-60 hover:opacity-100 transition-opacity">
                    <span className="material-icons">close</span>
                  </button>
                </div>
              </div>

              <div className="px-6 py-5 space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 border rounded-sm ${diff.badge}`}>{diff.label}</span>
                    <span className="text-[10px] font-mono text-zinc-400">Week {activeWeek.weekNumber} · {activeWeek.title}</span>
                  </div>
                  <h2 className="text-xl font-display font-bold text-zinc-900 dark:text-white leading-snug">
                    {selectedLesson.title}
                  </h2>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
                  <div className="bg-zinc-100 dark:bg-zinc-800/50 px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Action Items</span>
                    <span className="text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-500">{selectedLesson.estimatedHours}h estimated</span>
                  </div>
                  <div className="p-4 space-y-4">
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {selectedLesson.description}
                    </p>
                    <ul className="space-y-3">
                      {selectedLesson.tasks?.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                          <span className="mt-0.5 shrink-0 flex h-4 w-4 items-center justify-center rounded-sm border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800">
                            <span className="h-2 w-2 rounded-sm bg-transparent group-hover:bg-primary/20"></span>
                          </span>
                          <span className="leading-snug">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <button
                    onClick={() => setSelectedLesson(null)}
                    className="px-5 py-2 bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-colors rounded-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })()}
    </>
  );
}
