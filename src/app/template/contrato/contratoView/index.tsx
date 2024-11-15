import Cliente from "../../card/view/cliente";
import { RootObject } from "@/app/data/response.d";
import Option from "@/app/components/option";
interface IContratoView {
  Contracts: RootObject;
}

export default function ContratoView({ Contracts }: IContratoView) {
  return (
    <div className="w-11/12 h-auto border border-solid border-primary300 bg-primary200 rounded  flex flex-col items-center justify-center">
      <nav className="flex flex-row items-center justify-around  w-full h-auto">
        <Option label="Cliente" active={true} />
        <Option label="Contratos" active={false} />
        <Option label="Custas e Valores" active={false} />
        <Option label="Processuais" active={false} />
        <Option label="Processo" active={false} />
      </nav>
      <Cliente clienteValues={Contracts.client} />
    </div>
  );
}
