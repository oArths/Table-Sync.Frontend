import React from "react";
import MaskedInput from "react-text-mask"; 

interface IInputMaskProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  errorsType?: any;
  errorsMessage?: string;
  mask: any;
  pipe?: any;
}

const InputMask: React.FC<IInputMaskProps> = ({ value, onChange, label, errorsType, errorsMessage, mask, pipe }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\D/g, ""); 
      onChange({ target: { value: inputValue } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col gap-2 w-full items-start">
      <label className="font-medium text-base desktop-xl:text-lg  ultrawide:text-xl  4k:text-2xl  text-white">{label}</label>
      <MaskedInput
        mask={mask} 
        value={value}
        pipe={pipe}
        onChange={handleChange}
        className="rounded w-full p-2 desktop-xl:text-base  ultrawide:text-lg  4k:text-xl desktop-xl:h-12  ultrawide:h-14  4k:h-16  text-sm border border-solid border-gray200 focus:ease-in focus:border-blue200 bg-primary200 transition-colors duration-300 focus:outline-none"
      />
      <div className="h-1 mt-1">
        {errorsType && errorsMessage && (
          <p className="text-xs text-red100">{errorsMessage}</p>
        )}
      </div>
    </div>
  );
};

export default InputMask;
