import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Input } from "../../../../../shared/components/form/input";
import ContactIcon from "../../../../../assets/icons/contact.svg?react"

export const ContactForm = () => {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <section className="w-full  text-white py-24 px-6 lg:px-48 flex justify-center">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between gap-16">
                <div className="flex-1 flex flex-col  gap-4">

                    <div className="p-2 bg-main-blue/46 w-fit rounded shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                        <ContactIcon />
                    </div>

                    <h1 className="text-headline-1 lg:text-headline-1 font-extrabold leading-tight">
                        <Trans i18nKey="contactForm.title" components={{ br: <br /> }} />
                    </h1>

                    <p className="text-gray-400 text-captio font-bold">
                        {t("contactForm.subtitle")}
                    </p>
                </div>

                <div className="flex-1">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input placeholder={t("contactForm.namePlaceholder")} value={name} type="text" onChange={setName} />
                        <Input placeholder={t("contactForm.surnamePlaceholder")} value={name} type="text" onChange={setName} />

                        <div className="md:col-span-2 space-y-4">
                            <Input
                                placeholder={t("contactForm.emailPlaceholder")}
                                value={email}
                                type="email"
                                onChange={setEmail}
                            />

                            <Input
                                placeholder={t("contactForm.messagePlaceholder")}
                                value={message}
                                type="textarea"
                                onChange={setMessage}
                            />
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer md:col-span-2 bg-main-blue hover:bg-main-blue-hover transition-colors h-12 rounded-md text-caption-large font-bold"
                        >
                            {t("contactForm.button")}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
