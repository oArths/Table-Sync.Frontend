import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>  {
  className: string;
  title: string;
  loading: boolean;

}
export const Button: React.FC<IButton> = ({loading,className, title, ...props}) => {
  return (
    <button
    className={clsx(
      `flex items-center py-2 align-middle bg-blue270 text-white   text-center  justify-center rounded font-medium
      ${loading && "opacity-50 cursor-not-allowed"} 
      `,
      className
    )}
    {...props}
    >
      <div
        className={`w-5 h-5 border-1 border-solid border-t-gray200 border-gray-300 rounded-full mr-2  ${
          loading ? " animate-spin " : "hidden"
        }`}
      ></div>
      {title}
    </button>
  );
};
