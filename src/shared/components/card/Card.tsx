import { useTranslation } from "react-i18next";

interface CardProps {
    title: string;
    year: string;
    info?: string;
    deploy?: string;
    repository?: string;
    description: string;
}

export const Card = ({ title, year, info, deploy, repository, description }: CardProps) => {
    const { t } = useTranslation();

    return (
        <div className="dark:bg-gray-500 bg-gray-400 p-10 rounded border border-gray-300">

            <div className="flex flex-col xl:flex-row xl:items-stretch gap-2 xl:gap-10">

                <div className="flex flex-col justify-between xl:min-h-[160px]">
                    <div>
                        <h2 className="text-headline-2 font-bold text-white max-w-[150px] break-words">
                            {title}
                        </h2>

                        <p className="text-caption-medium text-gray-200 dark:text-gray-300 font-bold">
                            {year}
                        </p>
                    </div>

                    <div className="xl:mt-6 mt-4 flex items-center gap-3 text-caption-medium">
                        {info && (
                            <p className=" text-main-blue font-bold">
                                {info}
                            </p>
                        )}

                        {deploy && (
                            <>
                                <span className="w-px h-4 bg-gray-300" />

                                <a href={deploy} target="_blank" rel="noreferrer" className="dark:text-gray-400 text-gray-300 hover:text-main-blue-hover duration-200">
                                    {t("projectsSection.deploy")}
                                </a>
                            </>
                        )}

                        {repository && (
                            <>
                                <span className="w-px h-4 bg-gray-300" />

                                <a href={repository} target="_blank" rel="noreferrer" className="dark:text-gray-400 text-gray-300 hover:text-main-blue-hover duration-200">
                                    {t("projectsSection.repository")}
                                </a>
                            </>
                        )}

                    </div>

                </div>

                <div className="hidden xl:block w-px bg-gray-300 self-stretch" />

                <div className="block xl:hidden h-px w-full bg-gray-300" />

                <div className="flex-1 flex items-center">
                    <p className="text-caption-medium font-bold text-gray-200 dark:text-gray-300">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
}