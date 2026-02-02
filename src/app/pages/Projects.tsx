import { useTranslation } from "react-i18next";

export default function Projects() {
    const { t } = useTranslation();
    return (
        <section className="container mx-auto px-4 py-8">
            <h1 className="text-headline-2 font-bold mb-4 dark:text-white">{t('nav.projects')}</h1>
            <p className="dark:text-gray-300">Projects content goes here...</p>
        </section>
    );
}
