import { forwardRef, type ComponentProps, type ChangeEvent, type Ref } from "react";

type InputProps = Omit<ComponentProps<"input">, "onChange" | "value" | "type"> & {
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "email" | "textarea";
};

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
    ({ placeholder, value, type = "text", className = "", onChange, ...props }, ref) => {
        const isTextarea = type === "textarea";
        const baseClass = `w-full p-2 border border-gray-400 bg-gray-500 rounded-md focus:outline-none text-gray-200 ${className} text-caption`;

        const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            onChange(e.target.value);
        };

        if (isTextarea) {
            return (
                <textarea
                    ref={ref as Ref<HTMLTextAreaElement>}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className={baseClass}
                    {...(props as ComponentProps<"textarea">)}
                />
            );
        }

        return (
            <input
                ref={ref as Ref<HTMLInputElement>}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={baseClass}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";