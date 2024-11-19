import React, { useRef, useEffect } from "react";
import InputMask from "react-input-mask";

interface InputCNPJProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  errorsType?: any;
  errorsMessage?: string;
}

const InputCNPJ: React.FC<InputCNPJProps> = ({ value, onChange, label, errorsType, errorsMessage }) => {
  const inputRef = useRef<HTMLInputElement>(null); // Tipando o useRef para um HTMLInputElement

  useEffect(() => {
    // Manipule o input diretamente se necessário
    if (inputRef.current) {
      console.log(inputRef.current); // Aqui você pode fazer manipulações diretamente
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    // Remove a formatação da máscara antes de registrar o valor no react-hook-form
    inputValue = inputValue.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    onChange({ target: { value: inputValue } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col gap-2 w-full items-start">
      <label className="font-medium text-base text-white">{label}</label>
      <InputMask
        mask="99.999.999/9999-99" // Máscara do CNPJ
        value={value}
        onChange={handleChange}
        inputRef={inputRef} // Tipando o ref para um input HTML
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

export default InputCNPJ;
