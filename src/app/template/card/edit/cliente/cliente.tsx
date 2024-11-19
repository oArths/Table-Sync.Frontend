"use client";
import InputEdit from "@/app/components/input/inputEdit";
import InputCNPJ from "@/app/components/input/inputCNPJ";
import Options from "@/app/components/dropdown/option";

import { useState } from "react";
interface ICliente {
  register: any;
  errors: any;
  getValues: any;
  setValue: any;
}

export default function Cliente({
  register,
  errors,
  getValues,
  setValue,
}: ICliente) {
  const Option = ["KU", "KA", "KL", "KD"];
  const [optionState, setOptionState] = useState(false);

  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <InputEdit
        label="Locatatio"
        id="tenant"
        errorsType={errors.tenant}
        errorsMessage={errors.tenant?.message}
        {...register("tenant")}
      />
      <InputCNPJ
        label="CNPJ"
        onChange={(e) => setValue("cnpj", e.target.value)}
        errorsType={errors.cnpj}
        errorsMessage={errors.cnpj?.message}
        {...register("cnpj")}
      />
      <div className="flex flex-row items-start gap-5 justify-between w-full">
        <InputEdit
          id="clientNumber"
          label="Número do Cliente"
          errorsType={errors.clientNumber}
          errorsMessage={errors.clientNumber?.message}
          {...register("clientNumber")}
        />
        <Options
          label="Status"
          open={optionState}
          onClick={() => (setOptionState(!optionState), console.log("open"))}
          select={getValues("status")}
          onSelect={(selected) => (
            setValue("status", selected), setOptionState(false)
          )}
          options={Option}
          ref={register("status").ref}
        />
      </div>
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputEdit
          label="Inclusão na Legal Control"
          id="inclusionInLegalControl"
          errorsType={errors.inclusionInLegalControl}
          errorsMessage={errors.inclusionInLegalControl?.message}
          {...register("inclusionInLegalControl")}
        />
        <InputEdit
          label="Data KA"
          id="kaDate"
          errorsType={errors.kaDate}
          errorsMessage={errors.kaDate?.message}
          {...register("kaDate")}
        />
      </div>
    </aside>
  );
}
