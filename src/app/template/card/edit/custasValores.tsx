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
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <Controller
        name="initialCourtCosts"
        control={control}
        render={({ field }) => (
          <InputEdit
            label="Valor das custas iniciais"
            value={`R$ ${field.value || ""}`}
            onChange={(e) =>
              field.onChange(e.target.value.replace("R$", "").trim())
            }
            errorsType={errors.initialCourtCosts}
            errorsMessage={errors.initialCourtCosts?.message}
          />
        )}
      />
      <Controller
        name="initialEnforcementAmount"
        control={control}
        render={({ field }) => (
          <InputEdit
            label="Valor inicial do cumprimento"
            value={`R$ ${field.value || ""}`}
            onChange={(e) =>
              field.onChange(e.target.value.replace("R$", "").trim())
            }
            errorsType={errors.initialEnforcementAmount}
            errorsMessage={errors.initialEnforcementAmount?.message}
          />
        )}
      />
      <Controller
        name="historicalAmountOrSentence"
        control={control}
        render={({ field }) => (
          <InputEdit
            label="Valor histórico/Sentença"
            value={`R$ ${field.value || ""}`}
            onChange={(e) =>
              field.onChange(e.target.value.replace("R$", "").trim())
            }
            errorsType={errors.historicalAmountOrSentence}
            errorsMessage={errors.historicalAmountOrSentence?.message}
          />
        )}
      />

      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <Controller
          name="otherCourtCosts"
          control={control}
          render={({ field }) => (
            <InputEdit
              label="Valor de outras custas"
             value={`R$ ${field.value || ""}`}
            onChange={(e) =>
              field.onChange(e.target.value.replace("R$", "").trim())
            }
              errorsType={errors.otherCourtCosts}
              errorsMessage={errors.otherCourtCosts?.message}
            />
          )}
        />

        <Controller
          name="gcPaidCosts"
          control={control}
          render={({ field }) => (
            <InputEdit
              label="Custas pagas GC"
             value={`R$ ${field.value || ""}`}
            onChange={(e) =>
              field.onChange(e.target.value.replace("R$", "").trim())
            }
              errorsType={errors.gcPaidCosts}
              errorsMessage={errors.gcPaidCosts?.message}
            />
          )}
        />
      </div>
    </aside>
  );
}
