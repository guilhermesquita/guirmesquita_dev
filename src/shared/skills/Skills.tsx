
import SkillsDesktop from './SkillsDesktop';
import SkillsMobile from './SkillsMobile';

export default function Skills() {
  return (
    <section id="skills" className="py-20 flex flex-col justify-center items-center w-full ">
      <div className="container mx-auto px-4 md:px-48">
        <p className="text-start text-white mb-12">
          <span className='font-bold text-caption-medium text-gray-400 dark:text-gray-300'>experiencia sólida nas</span><br/> <h2 className='font-bold text-headline-2 text-gray-500 dark:text-white'>TECHS:</h2>
        </p>
        
        <div className="md:hidden block">
          <SkillsMobile />
        </div>

        <div className="hidden md:block ">
          <SkillsDesktop />
        </div>
      </div>
    </section>
  );
}
