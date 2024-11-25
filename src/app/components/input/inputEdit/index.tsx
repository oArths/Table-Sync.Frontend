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
      <label className="font-medium text-base  desktop-xl:text-lg  ultrawide:text-xl  4k:text-2xl  text-white">{label}</label>
      <input
        type="text"
        autoComplete="off"
        {...props}
        className={` rounded w-full p-2 text-sm desktop-xl:text-base  ultrawide:text-lg  4k:text-xl desktop-xl:h-12  ultrawide:h-14  4k:h-16  border border-solid border-gray200  focus:ease-in  focus:border-blue200 bg-primary200 transition-colors duration-300 focus:outline-none  ${
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
