import { useTranslation } from "react-i18next";

export default function Education() {
    const { t } = useTranslation();
    return (
        <section className="container mx-auto px-4 py-8">
            <h1 className="text-headline-2 font-bold mb-4 dark:text-white">{t('nav.education')}</h1>
            <p className="dark:text-gray-300">Education content goes here...</p>
        </section>
    );
}
