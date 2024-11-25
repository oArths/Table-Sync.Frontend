import InputView from "@/app/components/input/inputView";
import { Process as ProcessType } from "@/app/data/response.d";
interface IProcesso {
  processValues: ProcessType;
}

export default function Processo({ processValues }: IProcesso) {
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  desktop-xl:gap-y-7  ultrawide:gap-y-9  4k:gap-y-12   pt-8 desktop-xl:pt-10  ultrawide:pt-12  4k:pt-14 pb-20 w-10/12 h-full">
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputView
          label="Número do processo"
          value={processValues.processNumber}
        />
        <InputView
          label="Novo número de processo"
          value={processValues.newProcessNumber}
        />
        <InputView
          label="Acordo Realizado"
          value={processValues.agreementMade}
        />
      </div>
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputView
          label="Valor da Causa"
          value={`R$ ${processValues.causeValue}`}
        />
        <InputView
          label="Última movimentação"
          value={processValues.lastMovement}
        />
        <InputView label="Citação" value={processValues.citation} />
      </div>
      <InputView
        label="FR Último Andamento/Providências"
        className="h-32  desktop-xl:h-40  ultrawide:h-44  4k:h-48  items-start justify-start text-start"
        value={processValues.frLastActionOrMeasures}
      />
    </aside>
  );
}
