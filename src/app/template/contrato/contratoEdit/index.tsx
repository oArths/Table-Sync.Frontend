import Cliente from "../../card/edit/cliente/cliente";
import Contrato from "../../card/edit/contratos";
import CustaValores from "../../card/edit/custasValores";
import Processo from "../../card/edit/processo";
import Processuais from "../../card/edit/processuais";
import { RootObject } from "@/app/data/response.d";
import Option from "@/app/components/option";
import { useState } from "react";

interface IContratoView {
  Contracts: RootObject;
  register: any;
  errors: any;
  getValues: any;
  setValue: any;
}

export default function ContratoEdit({ Contracts, register, errors, getValues , setValue}: IContratoView) {
  const [activeTable, setActiveTable] = useState<string>("cliente");

  const tables: { [key: string]: React.ReactNode } = {
    cliente: (
      <Cliente
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
    ),
    contratos: (
      <Contrato
        contratoValues={Contracts.contracts}
        register={register}
        errors={errors}
      />
    ),
    custasValores: (
      <CustaValores
        CustaValoresValues={Contracts.costsAndValues}
        // register={register}
        // errors={errors}
      />
    ),
    processuais: (
      <Processuais
        processuaisValues={Contracts.procedural}
        // register={register}
        // errors={errors}
      />
    ),
    processo: (
      <Processo
        processValues={Contracts.process}
        // register={register}
        // errors={errors}
      />
    ),
  };

  return (
    <div className="w-full h-auto border border-solid border-primary300 bg-primary200 rounded  flex flex-col items-center justify-center">
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