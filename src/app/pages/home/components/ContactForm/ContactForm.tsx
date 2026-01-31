import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

import { Input, Spinner } from "@/shared/components";
import { useToastStore } from "@/shared/stores";
import ContactIcon from "@/assets/icons/contact.svg?react"

type ContactFormData = {
    name: string
    surname: string
    email: string
    message: string
}

export const ContactForm = () => {
    const { t } = useTranslation();
    const addToast = useToastStore((state) => state.addToast);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>()
    const [stateSendMail, setStateSendMail] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const sendMail = (data: ContactFormData) => {
        setStateSendMail('loading');
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: data.name,
                surname: data.surname,
                email: data.email,
                message: data.message,
                title: "Novo contato pelo portfolio"
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setStateSendMail('success');
            addToast({ message: t("contactForm.successMessage"), type: "success" });
            reset();
        }).catch(() => {
            setStateSendMail('error');
            addToast({ message: t("contactForm.errorMessage"), type: "error" });
        });
    }

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
                    <form
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        onSubmit={handleSubmit(sendMail)}
                        noValidate
                        onKeyDown={(e) => {
                            if (e.ctrlKey && e.key === 'Enter') {
                                handleSubmit(sendMail)();
                            }
                        }}
                    >
                        <Input
                            placeholder={t("contactForm.namePlaceholder")}
                            register={register("name", { required: 'Name is required' })}
                            className={errors.name ? "border-red-400" : ""}
                        />
                        <Input
                            placeholder={t("contactForm.surnamePlaceholder")}
                            register={register("surname")}
                        />

                        <div className="md:col-span-2 space-y-4">
                            <Input
                                placeholder={t("contactForm.emailPlaceholder")}
                                type="email"
                                register={register("email", { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
                                className={errors.email ? "border-red-400" : ""}
                            />

                            <Input
                                placeholder={t("contactForm.messagePlaceholder")}
                                type="textarea"
                                register={register("message", { required: 'Message is required' })}
                                className={errors.message ? "border-red-400" : ""}
                            />
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer md:col-span-2 bg-main-blue hover:bg-main-blue-hover transition-colors h-12 rounded-md text-caption-large font-bold"
                        >
                            {stateSendMail === 'loading' ? <div className="w-full flex justify-center"> <Spinner
                                trackColorClass="text-gray-200"
                                indicatorColorClass="text-white"
                                className="text-caption"
                            /> </div> : t("contactForm.button")}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
