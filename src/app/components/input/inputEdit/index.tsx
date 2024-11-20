import { FieldError } from "react-hook-form/dist/types/errors";

interface IInputEdit extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  errorsType?: FieldError;
  errorsMessage?: string;
}
export default function InputEdit({ label, className,errorsType, errorsMessage,type, ...props }: IInputEdit) {
  return (
    <div className="flex flex-col gap-2 w-full items-start ">
      <label className="font-medium text-base  text-white">{label}</label>
      <input
        type="text"
        autoComplete="off"
        {...props}
        className={` rounded w-full p-2 text-sm  border border-solid border-gray200  focus:ease-in  focus:border-blue200 bg-primary200 transition-colors duration-300 focus:outline-none  ${
          className
            ? className
            : "flex items-center justify-start text-start  h-10"
        } `}
      />
      <div className="h-1 mt-1">
            {errorsType && (
              <p className="text-xs text-red100 ">{errorsMessage}</p>
            )}
          </div>
    </div>
  );
}
