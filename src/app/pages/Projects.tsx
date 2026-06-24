import { Card } from "@/shared/components/card/Card";
import { useTranslation } from "react-i18next";
import { projects } from "./data/projects";

export default function Projects() {
    const { t } = useTranslation();
    return (
        <section className="py-8 px-6 md:px-48">
            <div className="flex flex-col gap-6">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        year={project.year}
                        info={project.info}
                        repository={project.repository}
                        deploy={project.deploy}
                        description={t(project.description)}
                    />
                ))}
            </div>
        </section>
    );
}
