import InputEdit from "@/app/components/input/inputEdit";
import { Controller } from "react-hook-form";
import Options from "@/app/components/dropdown/option";
import { useState } from "react";
interface IContrato {
  register: any;
  errors: any;
  getValues: any;
  setValue: any;
  control: any;
}

export default function Contrato({
  register,
  errors,
  getValues,
  setValue,
  control,
}: IContrato) {
  const [optionState, setOptionState] = useState(false);

  const option = [
    "ACM",
    "ALS",
    "ARO",
    "C011",
    "CGU",
    "CSO",
    "EBR",
    "EWC",
    "LOV",
    "LSC",
    "MAC",
    "MDA",
    "PDA",
    "RAP",
    "Rest",
    "SMA",
    "TRO",
    "VRE",
    "WLE",
  ];
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <InputEdit
        label="Fornecedor"
        id="supplier"
        errorsType={errors.supplier}
        errorsMessage={errors.supplier?.message}
        {...register("supplier")}
      />

      <Controller
        name="overdueAmount"
        control={control}
        render={({ field }) => (
          <InputEdit
            label="Valor inadimplido"
            value={`R$ ${field.value || ""}`}
            onChange={(e) =>
              field.onChange(e.target.value.replace("R$", "").trim())
            }
            errorsType={errors.overdueAmount}
            errorsMessage={errors.overdueAmount?.message}
          />
        )}
      />
      <Options
        label="FO"
        open={optionState}
        onClick={() => (setOptionState(!optionState), console.log("open"))}
        select={getValues("fo")}
        onSelect={(selected) => (
          setValue("fo", selected), setOptionState(false)
        )}
        options={option}
        ref={register("fo").ref}
      />

      <Controller
        name="contractEnd"
        control={control}
        render={({ field }) => (
          <InputEdit
            label="Fim do contrato"
            value={field.value ?? ""}
            onChange={field.onChange}
            errorsType={errors.contractEnd}
            errorsMessage={errors.contractEnd?.message}
          />
        )}
      />
    </aside>
  );
}
