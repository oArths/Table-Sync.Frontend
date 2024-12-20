import InputView from "@/app/components/input/inputView";
import { CostsAndValues as CostsAndValuesTypes } from "@/app/data/response.d";
interface ICustaValores {
  CustaValoresValues: CostsAndValuesTypes;
}

export default function CustaValores({ CustaValoresValues }: ICustaValores) {
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  desktop-xl:gap-y-7  ultrawide:gap-y-9  4k:gap-y-12   pt-8 desktop-xl:pt-10  ultrawide:pt-12  4k:pt-14 pb-20 w-10/12 h-full">
      <InputView
        label="Valor das custas iniciais"
        value={`R$ ${CustaValoresValues.initialCourtCosts}`}

      />
      <InputView
        label="Valor inicial do cumprimento "
        value={`R$ ${CustaValoresValues.initialEnforcementAmount}`}
        
      />
      <InputView
        label="Valor histórico/Sentença"
        value={`R$ ${CustaValoresValues.historicalAmountOrSentence}`}
        />
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputView
          label="Valor de outras custas"
          value={`R$ ${CustaValoresValues.otherCourtCosts}`}
          />
        <InputView
          label="Custas pagas GC "
          value={`R$ ${CustaValoresValues.gcPaidCosts}`}
        />
      </div>
    </aside>
  );
}
