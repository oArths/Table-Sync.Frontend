import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  title: string;
  loading: boolean;
  disabled: boolean;
}
export const Button: React.FC<IButton> = (props) => {
  return (
    <button
    disabled={props.disabled}
      className={clsx(
        `flex items-center py-2 w-full align-middle bg-blue270 text-white h-10 text-center  justify-center rounded font-semibold
        ${props.loading && "opacity-50 cursor-not-allowed"} 
        `,
        props.className
      )}
    >
      <div
        className={`w-5 h-5 border-1 border-solid border-t-blue200 border-gray-300 rounded-full mr-2  ${
          props.loading ? " animate-spin " : "hidden"
        }`}
      ></div>
      {props.title}
    </button>
  );
};
