
import { useState } from 'react';
import { SKILLS_DATA, type SkillCategory } from './skillsData';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useTranslation } from 'react-i18next';

export default function SkillsMobile() {
  const { t } = useTranslation(); 
  const categories: SkillCategory[] = ['Frontend', 'Backend', 'Other'];
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Frontend');

 const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "free",    
    slides: {
      origin: "auto", 
      perView: 2.5,
      spacing: 20,
    },
  })

  const activeSkills = SKILLS_DATA[activeCategory];

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex justify-between items-center px-4 bg-gray-900/50 rounded-full p-1 mx-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-200'
              }
            `}
          >
            {category === 'Other' ? t('others') : category}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden w-full px-4">
      <div ref={sliderRef} className='keen-slider text-white cursor-grabbing'>
        {activeSkills.map((skill, index) => (
          <div
              key={index}
              className="keen-slider__slide flex flex-col items-center justify-center min-w-[100px] h-[100px] bg-gray-800 rounded-xl snap-center shadow-lg border border-gray-700/50"
            >
              <div className="w-15 h-15 bg-gray-700 rounded-full mb-2 flex items-center justify-center">
                 {skill.icon}
              </div>
              <span className="text-sm font-medium text-gray-200">{skill.name}</span>
            </div>
        ))}
      </div>
      </div>

      <div className="flex justify-center gap-2 mt-2">
        {categories.map((category) => (
          <div
            key={category}
            className={`
              h-2 rounded-full transition-all duration-300
              ${
                activeCategory === category
                  ? 'w-5.25 bg-blue-600'
                  : 'w-2 bg-gray-600'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
