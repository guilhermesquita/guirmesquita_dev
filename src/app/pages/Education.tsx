import { Card } from "@/shared/components/card/Card";
import { useTranslation } from "react-i18next";
import { education } from "./data/education";

export default function Education() {
    const { t } = useTranslation();

    return (
        <section className="py-8 px-6 md:px-48 space-y-4">
            {
                education.map((item) => (
                    <Card
                        key={item.title}
                        title={item.title}
                        year={item.year}
                        info={item.info}
                        description={t(item.description)}
                    />
                ))
            }
        </section>
    );
}
