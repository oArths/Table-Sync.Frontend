import InputEdit from "@/app/components/input/inputEdit";
import { Contracts as ContractsType } from "@/app/data/response.d";
interface IContrato {
  contratoValues: ContractsType;
  register: any;
  errors: any;
}

export default function Contrato({
  contratoValues,
  register,
  errors,
}: IContrato) {
  return (
    <aside className=" flex flex-col items-center justify-around gap-y-5  pt-8 pb-20 w-10/12 h-full">
      <InputEdit
        label="Fornecedor"
        id="supplier"
        errorsType={errors.supplier}
        errorsMessage={errors.supplier?.message}
        {...register("supplier")}
      />
      <InputEdit
        label="Valor inadimplido  "
        id="overdueAmount"
        errorsType={errors.overdueAmount}
        errorsMessage={errors.overdueAmount?.message}
        {...register("overdueAmount")}
      />
      <InputEdit label="FO" value={contratoValues.fo} />
      <InputEdit label="Fim do contrato" value={contratoValues.contractEnd} />
    </aside>
  );
}
