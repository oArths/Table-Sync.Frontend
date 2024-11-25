import InputView from "@/app/components/input/inputView";
import { Procedural as ProceduralType } from "@/app/data/response.d";
interface IProcessuais {
  processuaisValues: ProceduralType;
}

export default function Processuais({ processuaisValues }: IProcessuais) {
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  desktop-xl:gap-y-7  ultrawide:gap-y-9  4k:gap-y-12   pt-8 desktop-xl:pt-10  ultrawide:pt-12  4k:pt-14 pb-20 w-10/12 h-full">
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
          value={`R$ ${processuaisValues.amountReceivedPaidToGrenke}`}
        />
        <InputView
          label="Valor pago pela Grenke"
          value={`R$ ${processuaisValues.amountPaidByGrenke}`}

        />
        <InputView label="Fase" value={processuaisValues.phase} />
      </div>
      <InputView label="Contato FR" className="h-32 desktop-xl:h-40  ultrawide:h-44  4k:h-48 items-start justify-start text-start"  value={processuaisValues.frContact} />
    </aside>
  );
}
