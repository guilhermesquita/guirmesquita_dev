import { forwardRef } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type CommonProps = {
    className?: string;
    register?: UseFormRegisterReturn;
    placeholder?: string;
};

type InputFieldProps = CommonProps &
    React.InputHTMLAttributes<HTMLInputElement> & {
        type?: "text" | "email";
    };

type TextareaFieldProps = CommonProps &
    React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
        type: "textarea";
    };

type Props = InputFieldProps | TextareaFieldProps;

export const Input = forwardRef<
    HTMLInputElement | HTMLTextAreaElement,
    Props
>(({ type = "text", className = "", register, ...rest }, ref) => {
    const baseClass = `w-full p-2 border border-gray-400 bg-gray-500 rounded-md focus:outline-none text-gray-200 ${className} text-caption`;

    if (type === "textarea") {
        const textareaProps = rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>;

        return (
            <textarea
                ref={ref as React.Ref<HTMLTextAreaElement>}
                className={baseClass}
                {...register}
                {...textareaProps}
            />
        );
    }

    const inputProps = rest as React.InputHTMLAttributes<HTMLInputElement>;

    return (
        <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            className={baseClass}
            {...register}
            {...inputProps}
        />
    );
});

Input.displayName = "Input";
