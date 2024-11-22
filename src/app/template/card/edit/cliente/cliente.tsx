"use client";
import InputEdit from "@/app/components/input/inputEdit";
import InputMask from "@/app/components/input/InputMask";
import {  Controller } from "react-hook-form";
import Options from "@/app/components/dropdown/option";
import { useState } from "react";
import { autoCorrectedDatePipe } from './../mask';
interface ICliente {
  register: any;
  errors: any | undefined;
  getValues: any;
  setValue: any;
  control: any;
}

export default function Cliente({
  register,
  errors,
  getValues,
  setValue,
  control,
}: ICliente) {
  const Option = ["KU", "KA", "KL", "KD"];
  const [optionState, setOptionState] = useState(false);

  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <InputEdit
        label="Locatatio"
        id="tenant"
        errorsType={errors.client?.tenant}
        errorsMessage={errors.client?.tenant?.message}
        {...register("client.tenant")}
      />
     <Controller
        name="client.cnpj"
        control={control}
        render={({ field }) => (
          <InputMask
            label="CNPJ"
            mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/,/\d/, '-', /\d/, /\d/]}
            value={field.value || ""}
            onChange={field.onChange} 
            errorsType={errors.client?.cnpj}
            errorsMessage={errors.client?.cnpj?.message}
          />
        )}
      />
      <div className="flex flex-row items-start gap-5 justify-between w-full">
        <InputEdit
          id="clientNumber"
          label="Número do Cliente"
          errorsType={errors.client?.clientNumber}
          errorsMessage={errors.client?.clientNumber?.message}
          {...register("client.clientNumber")}
        />
        <Options
          label="Status"
          open={optionState}
          onClick={() => (setOptionState(!optionState), console.log("open"))}
          select={getValues("client.status")}
          onSelect={(selected) => (
            setValue("client.status", selected), setOptionState(false)
          )}
          options={Option}
          ref={register("client.status").ref}
        />
      </div>
      <div className="flex flex-row items-center gap-5 justify-between w-full">   
        <Controller
        name="client.inclusionInLegalControl"
        control={control}
        render={({ field }) => (
          <InputMask
          label="Inclusão na Legal Control"
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            pipe={autoCorrectedDatePipe}
            value={field.value || ""}
            onChange={field.onChange} 
            errorsType={errors.client?.inclusionInLegalControl}
            errorsMessage={errors.client?.inclusionInLegalControl?.message}
          />
        )}
      />
        <Controller
        name="client.kaDate"
        control={control}
        render={({ field }) => (
          <InputMask
          label="Data KA"
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            pipe={autoCorrectedDatePipe}
            value={field.value || ""}
            onChange={field.onChange} 
            errorsType={errors.client?.kaDate}
            errorsMessage={errors.client?.kaDate?.message}
          />
        )}
      />
      </div>
    </aside>
  );
}
