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
    <aside className=" flex flex-col items-center justify-around gap-y-5  desktop-xl:gap-y-7  ultrawide:gap-y-9  4k:gap-y-12   pt-8 desktop-xl:pt-10  ultrawide:pt-12  4k:pt-14 pb-20 w-10/12 h-full">
      <div className="flex flex-row items-start gap-5 justify-between w-full">
        <Controller
          name="process.processNumber"
          control={control}
          render={({ field }) => (
            <InputMask
              label="Número do processo"
              mask={[
                /\d/,
                /\d/,
                /\d/,
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
                ".",
              /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              value={field.value || ""}
              onChange={field.onChange}
              errorsType={errors.process?.processNumber}
              errorsMessage={errors.process?.processNumber?.message}
            />
          )}
        />
        <Controller
          name="process.newProcessNumber"
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
              ]}
              value={field.value || ""}
              onChange={field.onChange}
              errorsType={errors.process?.newProcessNumber}
              errorsMessage={errors.process?.newProcessNumber?.message}
            />
          )}
        />
        <Options
          label="Acordo Realizado"
          open={open === "agreementMade"}
          onClick={() => seOpen("agreementMade")}
          select={getValues("process.agreementMade")}
          onSelect={(selected) => (
            setValue("process.agreementMade", selected), seOpen("")
          )}
          options={agreementMade}
          ref={register("process.agreementMade").ref}
        />
      </div>
      <div className="flex flex-row items-start gap-5 justify-between w-full">
        <Controller
          name="process.causeValue"
          control={control}
          render={({ field }) => (
            <InputEdit
              label="Valor da Causa"
              value={`R$ ${field.value || ""}`}
              onChange={(e) =>
                field.onChange(e.target.value.replace("R$", "").trim())
              }
              errorsType={errors.process?.causeValue}
              errorsMessage={errors.process?.causeValue?.message}
            />
          )}
        />

        <InputEdit
          label="Última movimentação"
          id="lastMovement"
          errorsType={errors.process?.lastMovement}
          errorsMessage={errors.process?.lastMovement?.message}
          {...register("process.lastMovement")}
        />
        <Options
          label="Citação"
          open={open === "citation"}
          onClick={() => seOpen("citation")}
          select={getValues("process.citation")}
          onSelect={(selected) => (setValue("process.citation", selected), seOpen(""))}
          options={citation}
          ref={register("process.citation").ref}
        />
      </div>
      <InputTextArea
        label="FR Último Andamento/Providências"
        type="tex"
        className="h-32  flex items-start justify-start text-start "
        id="frLastActionOrMeasures"
        errorsType={errors.process?.frLastActionOrMeasures}
        errorsMessage={errors.process?.frLastActionOrMeasures?.message}
        {...register("process.frLastActionOrMeasures")}
      />
    </aside>
  );
}
