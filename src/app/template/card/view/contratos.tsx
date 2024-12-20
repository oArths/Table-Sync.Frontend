import InputView from "@/app/components/input/inputView";
import { Contracts as ContractsType } from "@/app/data/response.d";
interface IContrato {
  contratoValues: ContractsType;
}

export default function Contrato({ contratoValues }: IContrato) {
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  desktop-xl:gap-y-7  ultrawide:gap-y-9  4k:gap-y-12   pt-8 desktop-xl:pt-10  ultrawide:pt-12  4k:pt-14 pb-20 w-10/12 h-full">
      <InputView label="Fornecedor" value={contratoValues.supplier} />
      <InputView
        label="Valor inadimplido  "
        value={`R$ ${contratoValues.overdueAmount}`}
      />
      <InputView label="FO" value={contratoValues.fo} />
      <InputView label="Fim do contrato" value={contratoValues.contractEnd} />
    </aside>
  );
}
