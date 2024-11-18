import InputView from "@/app/components/input/inputView";
import { Procedural as ProceduralType } from "@/app/data/response.d";
interface IProcessuais {
  processuaisValues: ProceduralType;
}

export default function Processuais({ processuaisValues }: IProcessuais) {
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputView
          label="Recuperação judicial"
          value={processuaisValues.judicialRecovery}
        />
        <InputView
          label="Sentença "
          value={processuaisValues.sentence.sentence}
        />
        <InputView
          label="Tipo de Sentença"
          value={processuaisValues.sentence.sentenceType}
        />
        <InputView
          label=" Situação Processual  "
          value={processuaisValues.sentence.proceduralSituation}
        />
      </div>
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputView
          label="Valor recebido (pago à Grenke)"
          value={processuaisValues.amountReceivedPaidToGrenke}
        />
        <InputView
          label="Valor pago pela Grenke"
          value={processuaisValues.amountPaidByGrenke}
        />
        <InputView label="Fase" value={processuaisValues.phase} />
      </div>
      <InputView label="Contato FR" className="h-32 items-start justify-start text-start"  value={processuaisValues.frContact} />
    </aside>
  );
}
