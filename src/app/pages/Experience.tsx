import { Card } from "@/shared/components/card/Card";
import { useTranslation } from "react-i18next";
import { experience } from "./data/experience";
import { Reveal } from "@/shared/components/animation/Reveal";

export default function Experience() {
    const { t } = useTranslation();
    return (
        <section className="py-8 px-6 md:px-48 space-y-4">
            {
                experience.map((item) => (
                    <Reveal key={item.title} width="100%">
                        <Card
                            title={item.title}
                            year={t(item.year)}
                            info={t(item.info)}
                            description={t(item.description)}
                        />
                    </Reveal>
                ))
            }
        </section>
    );
}
