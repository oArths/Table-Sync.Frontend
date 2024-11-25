import InputEdit from "@/app/components/input/inputEdit";
import { Controller } from "react-hook-form";

interface ICustaValores {
  errors: any;
  control: any;
}

export default function CustaValores({
  errors,
  control,
}: ICustaValores) {
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  desktop-xl:gap-y-7  ultrawide:gap-y-9  4k:gap-y-12   pt-8 desktop-xl:pt-10  ultrawide:pt-12  4k:pt-14 pb-20 w-10/12 h-full">
      <Controller
        name="costsAndValues.initialCourtCosts"
        control={control}
        render={({ field }) => (
          <InputEdit
            label="Valor das custas iniciais"
            value={`R$ ${field.value || ""}`}
            onChange={(e) =>
              field.onChange(e.target.value.replace("R$", "").trim())
            }
            errorsType={errors.costsAndValues?.initialCourtCosts}
            errorsMessage={errors.costsAndValues?.initialCourtCosts?.message}
          />
        )}
      />
      <Controller
        name="costsAndValues.initialEnforcementAmount"
        control={control}
        render={({ field }) => (
          <InputEdit
            label="Valor inicial do cumprimento"
            value={`R$ ${field.value || ""}`}
            onChange={(e) =>
              field.onChange(e.target.value.replace("R$", "").trim())
            }
            errorsType={errors.costsAndValues?.initialEnforcementAmount}
            errorsMessage={errors.costsAndValues?.initialEnforcementAmount?.message}
          />
        )}
      />
      <Controller
        name="costsAndValues.historicalAmountOrSentence"
        control={control}
        render={({ field }) => (
          <InputEdit
            label="Valor histórico/Sentença"
            value={`R$ ${field.value || ""}`}
            onChange={(e) =>
              field.onChange(e.target.value.replace("R$", "").trim())
            }
            errorsType={errors.costsAndValues?.historicalAmountOrSentence}
            errorsMessage={errors.costsAndValues?.historicalAmountOrSentence?.message}
          />
        )}
      />

      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <Controller
          name="costsAndValues.otherCourtCosts"
          control={control}
          render={({ field }) => (
            <InputEdit
              label="Valor de outras custas"
              value={`R$ ${field.value || ""}`}
              onChange={(e) =>
                field.onChange(e.target.value.replace("R$", "").trim())
              }
              errorsType={errors.costsAndValues?.otherCourtCosts}
              errorsMessage={errors.costsAndValues?.otherCourtCosts?.message}
            />
          )}
        />

        <Controller
          name="costsAndValues.gcPaidCosts"
          control={control}
          render={({ field }) => (
            <InputEdit
              label="Custas pagas GC"
              value={`R$ ${field.value || ""}`}
              onChange={(e) =>
                field.onChange(e.target.value.replace("R$", "").trim())
              }
              errorsType={errors.costsAndValues?.gcPaidCosts}
              errorsMessage={errors.costsAndValues?.gcPaidCosts?.message}
            />
          )}
        />
      </div>
    </aside>
  );
}
