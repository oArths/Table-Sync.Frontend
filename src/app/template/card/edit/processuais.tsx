import InputEdit from "@/app/components/input/inputEdit";
import { Procedural as ProceduralType } from "@/app/data/response.d";
interface IProcessuais {
  processuaisValues: ProceduralType;
}

export default function Processuais({ processuaisValues }: IProcessuais) {
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputEdit
          label="Recuperação judicial"
          value={processuaisValues.judicialRecovery}
        />
        <InputEdit
          label="Sentença "
          value={processuaisValues.sentence.sentence}
        />
        <InputEdit
          label="Tipo de Sentença"
          value={processuaisValues.sentence.sentenceType}
        />
        <InputEdit
          label=" Situação Processual  "
          value={processuaisValues.sentence.proceduralSituation}
        />
      </div>
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputEdit
          label="Valor recebido (pago à Grenke)"
          value={processuaisValues.amountReceivedPaidToGrenke}
        />
        <InputEdit
          label="Valor pago pela Grenke"
          value={processuaisValues.amountPaidByGrenke}
        />
        <InputEdit label="Fase" value={processuaisValues.phase} />
      </div>
      <InputEdit label="Contato FR" className="h-32 items-start justify-start text-start"  value={processuaisValues.frContact} />
    </aside>
  );
}
