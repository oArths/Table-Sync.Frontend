import InputEdit from "@/app/components/input/inputEdit";
import InputMask from "@/app/components/input/InputMask";
import { Controller } from "react-hook-form";
import Options from "@/app/components/dropdown/option";
import { useState } from "react";
import { agreementMade, citation } from "./data";
import InputTextArea from "@/app/components/input/inputTextArea";
interface IProcesso {
  register: any;
  errors: any;
  getValues: any;
  setValue: any;
  control: any;
}

export default function Processo({
  register,
  errors,
  getValues,
  setValue,
  control,
}: IProcesso) {
  const [open, seOpen] = useState<string>("");

  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <div className="flex flex-row items-start gap-5 justify-between w-full">
        <Controller
          name="processNumber"
          control={control}
          render={({ field }) => (
            <InputMask
              label="Número do processo"
              mask={[
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                ".",
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              value={field.value || ""}
              onChange={field.onChange}
              errorsType={errors.processNumber}
              errorsMessage={errors.processNumber?.message}
            />
          )}
        />
        <Controller
          name="newProcessNumber"
          control={control}
          render={({ field }) => (
            <InputMask
              label="Novo número de processo"
              mask={[
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
              ]}
              value={field.value || ""}
              onChange={field.onChange}
              errorsType={errors.newProcessNumber}
              errorsMessage={errors.newProcessNumber?.message}
            />
          )}
        />
        <Options
          label="Acordo Realizado"
          open={open === "agreementMade"}
          onClick={() => seOpen("agreementMade")}
          select={getValues("agreementMade")}
          onSelect={(selected) => (
            setValue("agreementMade", selected), seOpen("")
          )}
          options={agreementMade}
          ref={register("agreementMade").ref}
        />
      </div>
      <div className="flex flex-row items-start gap-5 justify-between w-full">
        <Controller
          name="causeValue"
          control={control}
          render={({ field }) => (
            <InputEdit
              label="Valor da Causa"
              value={`R$ ${field.value || ""}`}
              onChange={(e) =>
                field.onChange(e.target.value.replace("R$", "").trim())
              }
              errorsType={errors.causeValue}
              errorsMessage={errors.causeValue?.message}
            />
          )}
        />

        <InputEdit
          label="Última movimentação"
          id="lastMovement"
          errorsType={errors.lastMovement}
          errorsMessage={errors.lastMovement?.message}
          {...register("lastMovement")}
        />
        <Options
          label="Citação"
          open={open === "citation"}
          onClick={() => seOpen("citation")}
          select={getValues("citation")}
          onSelect={(selected) => (setValue("citation", selected), seOpen(""))}
          options={citation}
          ref={register("citation").ref}
        />
      </div>
      <InputTextArea
        label="FR Último Andamento/Providências"
        type="tex"
        className="h-32  flex items-start justify-start text-start "
        id="frLastActionOrMeasures"
        errorsType={errors.frLastActionOrMeasures}
        errorsMessage={errors.frLastActionOrMeasures?.message}
        {...register("frLastActionOrMeasures")}
      />
    </aside>
  );
}
