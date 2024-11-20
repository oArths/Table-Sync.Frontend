import { FieldError } from "react-hook-form/dist/types/errors";

interface IInputTextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
  errorsType?: FieldError;
  errorsMessage?: string;
}
export default function InputTextArea({
  label,
  className,
  errorsType,
  errorsMessage,
  ...props
}: IInputTextArea) {
  return (
    <div className="flex flex-col gap-2 w-full items-start ">
      <label className="font-medium text-base  text-white">{label}</label>
      <textarea
        {...props}
        className={` rounded w-full p-2 text-sm  border border-solid resize-none border-gray200  focus:ease-in  focus:border-blue200 bg-primary200 transition-colors duration-300 focus:outline-none  ${
          className
            ? className
            : "flex items-center justify-start text-start  h-10"
        } `}
      />
      <div className="h-1 mt-1">
        {errorsType && <p className="text-xs text-red100 ">{errorsMessage}</p>}
      </div>
    </div>
  );
}
