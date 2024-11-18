import Cliente from "../../card/view/cliente";
import Contrato from "../../card/view/contratos";
import CustaValores from "../../card/view/custasValores";
import Processo from "../../card/view/processo";
import Processuais from "../../card/view/processuais";
import { RootObject } from "@/app/data/response.d";
import Option from "@/app/components/option";
import { useState } from "react";
interface IContratoView {
  Contracts: RootObject;
}

export default function ContratoView({ Contracts }: IContratoView) {
  const [activeTable, setActiveTable] = useState<string>("cliente");

  const tables: { [key: string]: React.ReactNode } = {
    cliente: <Cliente clienteValues={Contracts.client} />,
    contratos: <Contrato contratoValues={Contracts.contracts} />,
    custasValores: (
      <CustaValores CustaValoresValues={Contracts.costsAndValues} />
    ),
    processuais: <Processuais processuaisValues={Contracts.procedural} />,
    processo: <Processo processValues={Contracts.process} />,
  };

  return (
    <div className="w-11/12 h-auto border border-solid border-primary300 bg-primary200 rounded  flex flex-col items-center justify-center">
      <nav className="flex flex-row items-center justify-around  w-full h-auto">
        <Option
          label="Cliente"
          active={"cliente" === activeTable}
          onClick={() => setActiveTable("cliente")}
        />
        <Option
          label="Contratos"
          active={"contratos" === activeTable}
          onClick={() => setActiveTable("contratos")}
        />
        <Option
          label="Custas e Valores"
          active={"custasValores" === activeTable}
          onClick={() => setActiveTable("custasValores")}
        />
        <Option
          label="Processuais"
          active={"processuais" === activeTable}
          onClick={() => setActiveTable("processuais")}
        />
        <Option
          label="Processo"
          active={"processo" === activeTable}
          onClick={() => setActiveTable("processo")}
        />
      </nav>
      {Contracts && tables[activeTable]}
    </div>
  );
}
