import InputEdit from "@/app/components/input/inputEdit";
import { CostsAndValues as CostsAndValuesTypes } from "@/app/data/response.d";
interface ICustaValores {
  CustaValoresValues: CostsAndValuesTypes;
}

export default function CustaValores({ CustaValoresValues }: ICustaValores) {
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <InputEdit
        label="Valor das custas iniciais"
        value={CustaValoresValues.initialCourtCosts}
      />
      <InputEdit
        label="Valor inicial do cumprimento "
        value={CustaValoresValues.initialEnforcementAmount}
      />
      <InputEdit
        label="Valor histórico/Sentença"
        value={CustaValoresValues.historicalAmountOrSentence}
      />
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputEdit
          label="Valor de outras custas"
          value={CustaValoresValues.otherCourtCosts}
        />
        <InputEdit
          label="Custas pagas GC "
          value={CustaValoresValues.gcPaidCosts}
        />
      </div>
    </aside>
  );
}
