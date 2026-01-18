import Skills from "../../../shared/skills/Skills";
import PinIcon from "../../../assets/icons/pin_fill.svg?react";
import { Button } from "../../../assets/button/Button";

export default function Home() {
  return (
    <>
      <section>
      <div className="flex justify-center  ">
        <div className=" rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 ">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <img
                src="https://pub-94d0474e66f04a0a996f79c17300f498.r2.dev/image-user/1726621576606_photo.png"
                className="w-36 h-36 rounded-full object-cover "
                alt="Guilherme Mesquita"
              />
              <div className="flex items-center gap-1 text-gray-400">
                <PinIcon className="w-4 h-4 text-gray-500 dark:text-gray-200" />
                <p className="text-caption text-gray-400 dark:text-gray-300">
                  Manaus, Am, Brasil
                </p>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h1 className="md:text-start text-center text-headline-1 font-bold text-gray-500 dark:text-white">
                Guilherme Mesquita
              </h1>
              <p className="md:text-start text-center text-gray-400 dark:text-gray-300 mb-6 text-caption font-bold">
                Full-Stack Developer | Next.js, React, Node.js
              </p>

              <p className="md:text-start text-center text-gray-500 dark:text-white text-caption leading-relaxed mb-12 max-w-[393px]">
                Desenvolvedor Full Stack baseado no Brasil, com experiência em
                desenvolvimento web moderno. Desenvolvo aplicações escaláveis e
                de alta performance com Next.js, TypeScript e ferramentas
                modernas, priorizando boa arquitetura e experiência do usuário.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center  ">
        <Button placeholder="Download CV" onClick={() => {}} />
      </div>
      </section>
      <Skills />
    </>
  );
}
