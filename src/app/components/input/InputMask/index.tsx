import React from "react";
import MaskedInput from "react-text-mask"; 

interface IInputMaskProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  errorsType?: any;
  errorsMessage?: string;
  mask: any;
}

const InputMask: React.FC<IInputMaskProps> = ({ value, onChange, label, errorsType, errorsMessage, mask }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/\D/g, ""); 
      onChange({ target: { value: inputValue } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col gap-2 w-full items-start">
      <label className="font-medium text-base text-white">{label}</label>
      <MaskedInput
        mask={mask} 
        value={value}
        onChange={handleChange}
        className="rounded w-full p-2 text-sm border border-solid border-gray200 focus:ease-in focus:border-blue200 bg-primary200 transition-colors duration-300 focus:outline-none"
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
