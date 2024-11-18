import InputView from "@/app/components/input/inputView";
import { Client as ClienteType } from "@/app/data/response.d";
interface ICliente {
  clienteValues: ClienteType;
}

export default function Cliente({ clienteValues }: ICliente) {
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <InputView label="Locatatio" value={clienteValues.tenant} />
      <InputView label="CNPJ" value={clienteValues.cnpj} />
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputView
          label="Número do Cliente"
          value={clienteValues.clientNumber}
        />
        <InputView label="Status" value={clienteValues.status} />
      </div>
      <div className="flex flex-row items-center gap-5 justify-between w-full">
        <InputView
          label="Inclusão na Legal Control"
          value={clienteValues.inclusionInLegalControl}
        />
        <InputView label="Data KA" value={clienteValues.kaDate} />
      </div>
    </aside>
  );
}
