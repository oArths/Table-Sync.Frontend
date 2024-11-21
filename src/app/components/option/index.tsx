import { ButtonHTMLAttributes } from "react";
import * as I from "lucide-react"
interface IOption extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  active: boolean;
  hasError?: boolean;
}

const Option: React.FC<IOption> = ({ label, active, hasError,...props }) => {
  return (
    <button
      {...props}
      className={`w-1/5 text-center  flex items-center justify-center  gap-2 cursor-pointer select-none text-lg h-14 p-4 border border-solid transition-all delay-50 ease-in hover:border-b-white hover:text-white border-x-0 border-t-0 ${
        active ? "border-b-white text-white" : "border-b-primary300 text-gray500"
      } `}
      
    >
      {label} {hasError && <I.Info size="14px" color="rgb(238, 18, 18)" />}
    </button>
  );
};
export default Option;
