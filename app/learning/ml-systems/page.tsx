'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import CurriculumSelector from '../components/CurriculumSelector';
import CurriculumCalendar from '../components/CurriculumCalendar';
import { curriculumData } from './data';

export default function MLSystemsCurriculumPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-between">
      <Navigation />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <CurriculumSelector />

          <CurriculumCalendar 
            title="ML Systems 2026–2027"
            subtitle="Personal study timetable · mlsysbook.ai · 32 weeks"
            data={curriculumData}
          />

        </div>
      </main>

      <Footer />
    </div>
  );
}
