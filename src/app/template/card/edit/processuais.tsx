import InputEdit from "@/app/components/input/inputEdit";
import Options from "@/app/components/dropdown/option";
import { useState } from "react";
import {
  judicialRecovery,
  sentence,
  sentenceType,
  phase,
  proceduralSituation,
} from "./data";
import InputTextArea from "@/app/components/input/inputTextArea";
import { Controller } from "react-hook-form";
interface IProcessuais {
  register: any;
  errors: any;
  getValues: any;
  setValue: any;
  control: any;
}

export default function Processuais({
  register,
  errors,
  getValues,
  setValue,
  control,
}: IProcessuais) {
  const [open, seOpen] = useState<string>("");
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <Options
          label="Recuperação judicial"
          open={open === "judicialRecovery"}
          onClick={() => seOpen("judicialRecovery")}
          select={getValues("procedural.judicialRecovery")}
          onSelect={(selected) => (
            setValue("procedural.judicialRecovery", selected), seOpen("")
          )}
          options={judicialRecovery}
          ref={register("procedural.judicialRecovery").ref}
        />
        <Options
          label="Sentença"
          open={open === "sentence"}
          onClick={() => seOpen("sentence")}
          select={getValues("procedural.sentence")}
          onSelect={(selected) => (setValue("procedural.sentence", selected), seOpen(""))}
          options={sentence}
          ref={register("procedural.sentence").ref}
        />
        <Options
          label="Tipo de Sentença"
          open={open === "sentenceType"}
          onClick={() => seOpen("sentenceType")}
          select={getValues("procedural.sentenceType")}
          onSelect={(selected) => (
            setValue("procedural.sentenceType", selected), seOpen("")
          )}
          options={sentenceType}
          ref={register("procedural.sentenceType").ref}
        />
        <Options
          label=" Situação Processual  "
          open={open === "proceduralSituation"}
          onClick={() => seOpen("proceduralSituation")}
          select={getValues("procedural.proceduralSituation")}
          onSelect={(selected) => (
            setValue("procedural.proceduralSituation", selected), seOpen("")
          )}
          options={proceduralSituation}
          ref={register("procedural.proceduralSituation").ref}
        />
      </div>
      <div className="flex flex-row items-start gap-5 justify-between w-full">
        <Controller
          name="procedural.amountReceivedPaidToGrenke"
          control={control}
          render={({ field }) => (
            <InputEdit
              label="Valor recebido (pago à Grenke)"
              value={`R$ ${field.value || ""}`}
              onChange={(e) =>
                field.onChange(e.target.value.replace("R$", "").trim())
              }
              errorsType={errors.procedural?.amountReceivedPaidToGrenke}
              errorsMessage={errors.procedural?.amountReceivedPaidToGrenke?.message}
            />
          )}
        />
        <Controller
          name="procedural.amountPaidByGrenke"
          control={control}
          render={({ field }) => (
            <InputEdit
              label="Valor pago pela Grenke"
              value={`R$ ${field.value || ""}`}
              onChange={(e) =>
                field.onChange(e.target.value.replace("R$", "").trim())
              }
              errorsType={errors.procedural?.amountPaidByGrenke}
              errorsMessage={errors.procedural?.amountPaidByGrenke?.message}
            />
          )}
        />
        <Options
          label="Fase"
          open={open === "phase"}
          onClick={() => seOpen("phase")}
          select={getValues("procedural.phase")}
          onSelect={(selected) => (setValue("procedural.phase", selected), seOpen(""))}
          options={phase}
          ref={register("procedural.phase").ref}
        />
      </div>
      <InputTextArea
        label="Contato FR"
        type="tex"
        className="h-32  flex items-start justify-start text-start "
        id="frContact"
        errorsType={errors.procedural?.frContact}
        errorsMessage={errors.procedural?.frContact?.message}
        {...register("procedural.frContact")}
      /> 
    </aside>
  );
}
