
import { useEffect, useRef, useState } from 'react';
import { SKILLS_DATA, type SkillCategory } from './skillsData';
import { useTranslation } from 'react-i18next';

export default function SkillsDesktop() {
  const { t } = useTranslation(); 
  const categories: SkillCategory[] = ['Frontend', 'Backend', 'Other'];
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Frontend');
  const sectionRefs = useRef<Record<SkillCategory, HTMLDivElement | null>>({
    Frontend: null,
    Backend: null,
    Other: null,
  });

  const scrollToCategory = (category: SkillCategory) => {
    sectionRefs.current[category]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveCategory(category);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = categories.find(
              (cat) => sectionRefs.current[cat] === entry.target
            );
            if (category) {
              setActiveCategory(category);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px', 
        threshold: 0.1,
      }
    );

    categories.forEach((cat) => {
      const el = sectionRefs.current[cat];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex gap-12 w-full max-w-6xl mx-auto">
      <div className="w-1/4 sticky top-24 h-fit hidden md:flex flex-col gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => scrollToCategory(category)}
            className={`
              text-left py-2 px-4 border-l-2 transition-all duration-300
              text-caption-large font-bold
              ${
                activeCategory === category
                  ? 'border-main-blue text-main-blue font-bold pl-6'
                  : 'border-gray-700 text-gray-400 hover:text-gray-300 pl-4'
              }
            `}
          >
            {category === 'Other' ? t('others') : category}
            <img src="" alt="" />
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col gap-24">
        {categories.map((category) => (
          <div
            key={category}
            ref={(el) => { sectionRefs.current[category] = el; }}
            className="min-h-[50vh] scroll-mt-24"
          >
            <h3 className="text-headline-3 font-bold text-gray-400 dark:text-gray-200 mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              {category === 'Other' ? t('others') : category}
            </h3>
            
            <div className="grid grid-cols-3 gap-6">
              {SKILLS_DATA[category].map((skill, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 hover:bg-gray-800 p-4 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center gap-4 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                     {skill.icon}
                  </div>
                  <span className="dark:text-gray-300 text-gray-500 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
