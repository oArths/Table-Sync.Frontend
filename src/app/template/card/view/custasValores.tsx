import InputView from "@/app/components/input/inputView";
import { CostsAndValues as CostsAndValuesTypes } from "@/app/data/response.d";
interface ICustaValores {
  CustaValoresValues: CostsAndValuesTypes;
}

export default function CustaValores({ CustaValoresValues }: ICustaValores) {
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <InputView
        label="Valor das custas iniciais"
        value={CustaValoresValues.initialCourtCosts}
      />
      <InputView
        label="Valor inicial do cumprimento "
        value={CustaValoresValues.initialEnforcementAmount}
      />
      <InputView
        label="Valor histórico/Sentença"
        value={CustaValoresValues.historicalAmountOrSentence}
      />
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputView
          label="Valor de outras custas"
          value={CustaValoresValues.otherCourtCosts}
        />
        <InputView
          label="Custas pagas GC "
          value={CustaValoresValues.gcPaidCosts}
        />
      </div>
    </aside>
  );
}
