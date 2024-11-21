import Cliente from "../../card/edit/cliente/cliente";
import Contrato from "../../card/edit/contratos";
import CustaValores from "../../card/edit/custasValores";
import Processo from "../../card/edit/processo";
import Processuais from "../../card/edit/processuais";
import { RootObject } from "@/app/data/response.d";
import Option from "@/app/components/option";
import { useState } from "react";
import { FieldErrors } from "react-hook-form/dist/types/errors";

interface IContratoView {
  Contracts: RootObject;
  register: any;
  errors: FieldErrors;
  getValues: any;
  setValue: any;
  control: any;
}

export default function ContratoEdit({
  Contracts,
  register,
  errors,
  getValues,
  setValue,
  control,
}: IContratoView) {
  const [activeTable, setActiveTable] = useState<string>("cliente");

  const tables: { [key: string]: React.ReactNode } = {
    cliente: (
      <Cliente
        register={register}
        control={control}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
    ),
    contratos: (
      <Contrato
        register={register}
        control={control}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
    ),
    custasValores: <CustaValores control={control} errors={errors} />,
    processuais: (
      <Processuais
        register={register}
        errors={errors}
        control={control}
        setValue={setValue}
        getValues={getValues}
      />
    ),
    processo: (
      <Processo
        // setError={() => setError('processo')}
        register={register}
        errors={errors}
        control={control}
        setValue={setValue}
        getValues={getValues}
      />
    ),
  };
  console.log(errors);
  const hasErrorsInGroup = (group: string) => {
    return Object.keys(errors).some((key) => key.startsWith(group));
  };

  return (
    <div className="w-full h-auto border border-solid border-primary300 bg-primary200 rounded  flex flex-col items-center justify-center">
      <nav className="flex flex-row items-center justify-around  w-full h-auto">
        <Option
          label="Cliente"
          active={"cliente" === activeTable}
          hasError={hasErrorsInGroup("client")} 
          type="button"
          onClick={() => setActiveTable("cliente")}
        />
        <Option
          label="Contratos"
          active={"contratos" === activeTable}
          hasError={hasErrorsInGroup("contracts")}
          type="button"
          onClick={() => setActiveTable("contratos")}
        />
        <Option
          label="Custas e Valores"
          active={"custasValores" === activeTable}
          hasError={hasErrorsInGroup("costsAndValues")}
          type="button"
          onClick={() => setActiveTable("custasValores")}
        />
        <Option
          label="Processuais"
          active={"processuais" === activeTable}
          hasError={hasErrorsInGroup("procedural")}
          type="button"
          onClick={() => setActiveTable("processuais")}
        />
        <Option
          label="Processo"
          active={"processo" === activeTable}
          hasError={hasErrorsInGroup("process")}
          type="button"
          onClick={() => setActiveTable("processo")}
        />
      </nav>
      {Contracts && tables[activeTable]}
    </div>
  );
}
