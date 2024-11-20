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
          select={getValues("judicialRecovery")}
          onSelect={(selected) => (
            setValue("judicialRecovery", selected), seOpen("")
          )}
          options={judicialRecovery}
          ref={register("judicialRecovery").ref}
        />
        <Options
          label="Sentença"
          open={open === "sentence"}
          onClick={() => seOpen("sentence")}
          select={getValues("sentence")}
          onSelect={(selected) => (setValue("sentence", selected), seOpen(""))}
          options={sentence}
          ref={register("sentence").ref}
        />
        <Options
          label="Tipo de Sentença"
          open={open === "sentenceType"}
          onClick={() => seOpen("sentenceType")}
          select={getValues("sentenceType")}
          onSelect={(selected) => (
            setValue("sentenceType", selected), seOpen("")
          )}
          options={sentenceType}
          ref={register("sentenceType").ref}
        />
        <Options
          label=" Situação Processual  "
          open={open === "proceduralSituation"}
          onClick={() => seOpen("proceduralSituation")}
          select={getValues("proceduralSituation")}
          onSelect={(selected) => (
            setValue("proceduralSituation", selected), seOpen("")
          )}
          options={proceduralSituation}
          ref={register("proceduralSituation").ref}
        />
      </div>
      <div className="flex flex-row items-start gap-5 justify-between w-full">
        <Controller
          name="amountReceivedPaidToGrenke"
          control={control}
          render={({ field }) => (
            <InputEdit
              label="Valor recebido (pago à Grenke)"
              value={`R$ ${field.value || ""}`}
              onChange={(e) =>
                field.onChange(e.target.value.replace("R$", "").trim())
              }
              errorsType={errors.amountReceivedPaidToGrenke}
              errorsMessage={errors.amountReceivedPaidToGrenke?.message}
            />
          )}
        />
        <Controller
          name="amountPaidByGrenke"
          control={control}
          render={({ field }) => (
            <InputEdit
              label="Valor pago pela Grenke"
              value={`R$ ${field.value || ""}`}
              onChange={(e) =>
                field.onChange(e.target.value.replace("R$", "").trim())
              }
              errorsType={errors.amountPaidByGrenke}
              errorsMessage={errors.amountPaidByGrenke?.message}
            />
          )}
        />
        <Options
          label="Fase"
          open={open === "phase"}
          onClick={() => seOpen("phase")}
          select={getValues("phase")}
          onSelect={(selected) => (setValue("phase", selected), seOpen(""))}
          options={phase}
          ref={register("phase").ref}
        />
      </div>
      <InputTextArea
        label="Contato FR"
        type="tex"
        className="h-32  flex items-start justify-start text-start "
        id="frContact"
        errorsType={errors.frContact}
        errorsMessage={errors.frContact?.message}
        {...register("frContact")}
      />
    </aside>
  );
}
