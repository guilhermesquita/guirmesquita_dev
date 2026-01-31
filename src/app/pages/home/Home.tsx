import Skills from "./components/skills/Skills";
import PinIcon from "../../../assets/icons/pin_fill.svg?react";
import { Button } from "../../../assets/button/Button";
import { useTranslation } from "react-i18next";
import { ContactForm } from "./components/ContactForm/ContactForm";

export default function Home() {
  const { t } = useTranslation();
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
                    {t('location')}
                  </p>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h1 className="md:text-start text-center text-headline-1 font-bold text-gray-500 dark:text-white">
                  Guilherme Mesquita
                </h1>
                <p className="md:text-start text-center text-gray-400 dark:text-gray-300 mb-6 text-caption font-bold">
                  {t('jobTitle')}
                </p>

                <p className="md:text-start text-center text-gray-500 dark:text-white text-caption leading-relaxed mb-12 max-w-[393px]">
                  {t("aboutMeDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center  ">
          <Button placeholder={t('downloadCV')} onClick={() => { }} />
        </div>
      </section>
      <Skills />
      <ContactForm />
    </>
  );
}
