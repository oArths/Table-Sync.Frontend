import InputEdit from "@/app/components/input/inputEdit";
import { Process as ProcessType } from "@/app/data/response.d";
interface IProcesso {
  processValues: ProcessType;
}

export default function Processo({ processValues }: IProcesso) {
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputEdit
          label="Número do processo"
          value={processValues.processNumber}
        />
        <InputEdit
          label="Novo número de processo"
          value={processValues.newProcessNumber}
        />
        <InputEdit
          label="Acordo Realizado"
          value={processValues.agreementMade}
        />
      </div>
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputEdit label="Valor da Causa" value={processValues.causeValue} />
        <InputEdit
          label="Última movimentação"
          value={processValues.lastMovement}
        />
        <InputEdit label="Citação" value={processValues.citation} />
      </div>
      <InputEdit
        label="FR Último Andamento/Providências"
        className="h-32 items-start justify-start text-start"  
        value={processValues.frLastActionOrMeasures}
      />
    </aside>
  );
}
