import SkillsDesktop from './SkillsDesktop';
import SkillsMobile from './SkillsMobile';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 flex flex-col justify-center items-center w-full ">
      <div className="container mx-auto px-4 md:px-48">
        <p className="text-start text-white mb-12">
          <span className='font-bold text-caption-medium text-gray-400 dark:text-gray-300'>{t('skillsIntro')}</span><br /> <h2 className='font-bold text-headline-2 text-gray-500 dark:text-white'>{t('skillsTitle')}</h2>
        </p>
        <div className="block xl:hidden">
          <SkillsMobile />
        </div>

        <div className="hidden xl:block">
          <SkillsDesktop />
        </div>
      </div>
    </section>
  );
}