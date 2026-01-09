interface ButtonProps {
  placeholder?: string;
  onClick: () => void;
}

export const Button = ({ placeholder, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-[196px] h-[39px] rounded cursor-pointer bg-main-blue hover:bg-main-blue-hover text-caption-large text-white transition duration-200"
    >
      {placeholder || "Button"}
    </button>
  );
};
