"use client"
import { Button } from "@/app/components/button";
import { Data } from "@/app/data/response.d";
import { useState } from "react";
import { IPagination } from "./table.d";

const Table = ({ data }: Data) => {
  const [offset, setOffSet] = useState(0);
  const limit = 5;

  return (
    <div className="flex flex-col items-start  justify-between w-11/12 min-h-96 h-auto mt-20 bg-primary200  overflow-hidden rounded-md">
      <table className="w-full h-auto  table-fixed  ">
        <thead className="w-full ">
          <tr className="h-10 w-full  bg-primary200 border border-solid border-primary300  ">
            <th
              className="text-white font-medium text-base text-center truncate px-4  "
              scope="col"
            >
              Número do Cliente
            </th>
            <th
              className="text-white font-medium text-base text-center truncate px-4 "
              scope="col"
            >
              Número do Processo
            </th>
            <th
              className="text-white font-medium text-base text-center truncate px-4 "
              scope="col"
            >
              Status
            </th>
            <th
              className="text-white font-medium text-base text-center truncate px-4 "
              scope="col"
            >
              Locatário{" "}
            </th>
            <th
              className="text-white font-medium text-base text-center truncate px-4 "
              scope="col"
            >
              Ult. Mov
            </th>
            <th
              className="text-white font-medium text-base text-center truncate px-4 "
              scope="col"
            >
              Fim do contrato
            </th>
            <th
              className="text-white font-medium text-base text-center truncate px-4  "
              scope="col"
            >
              Fase
            </th>
          </tr>
        </thead>
        <tbody  >
          {data.length < 1 && (
            <tr className="w-full h-80 bg-primary200 border border-solid border-primary300 cursor-pointer">
              <td
                colSpan={7}
                className="w-full h-full text-gray500 font-light text-base text-center bg-primary200"
              >
               sem nenhuma informação...
              </td>
            </tr>
          )}

          {data &&
            data.slice(offset, offset + limit).map((Item, Index) => {
              const dateStyle = (date: string) => {
                let dateFormat = date.split("/").reverse().join("-");
                const dateNow = new Date();
                const date2 = new Date(dateFormat);
                const timeDifference = Math.abs(
                  dateNow.getTime() - date2.getTime()
                );

                const differenceInDays = Math.ceil(
                  timeDifference / (1000 * 60 * 60 * 24)
                );
                let colors =
                  differenceInDays <= 30
                    ? "bg-green100 text-green200"
                    : differenceInDays <= 60
                    ? "bg-yellow100 text-yellow200"
                    : "bg-pink100 text-pink200";

                return (
                  <p className={`p-1 text-center rounded ${colors}`}> {date}</p>
                );
              };

              return (
                <tr
                  key={Index}
                  className="h-14 w-full bg-primary200 border border-solid border-primary300 cursor-pointer "
                >
                  <th
                    className="text-white font-normal text-base text-center truncate px-4  "
                    scope="row"
                  >
                    {Item.Processo["Número do Processo"]}
                  </th>
                  <td className="text-white font-normal text-sm text-center truncate px-4">
                    {Item.Cliente["Número do Cliente"]}
                  </td>
                  <td className="text-white font-normal text-sm text-center truncate px-4">
                    {Item.Cliente.Status}
                  </td>
                  <td className="text-white font-normal text-sm text-center truncate px-4">
                    {Item.Cliente.Locatario}
                  </td>
                  <td className="text-white font-normal text-sm text-center truncate px-4 ">
                    {dateStyle(Item.Processo["Última movimentação"])}
                  </td>
                  <td className="text-white font-normal text-sm text-center truncate px-4">
                    {dateStyle(Item.Contratos["Fim do contrato"])}
                  </td>
                  <td className="text-white font-normal text-sm text-center truncate px-4">
                    {Item.Processuais.Fase}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination
        limit={limit}
        offset={offset}
        setOffset={setOffSet}
        total={data.length}
      />
    </div>
  );
};
export default Table;

const Pagination = ({ limit, total, offset, setOffset }: IPagination) => {
  const max_items = 5;
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  let start = Math.max(current - Math.floor(max_items / 2), 1);
  let end = Math.min(start + max_items - 1, pages);

  if (end - start < max_items - 1) {
    start = Math.max(end - max_items + 1, 1);
  }
  return (
    <div className=" h-16 w-full flex flex-row items-center justify-between bg-primary200 border border-solid border-primary300  px-7 ">
      <Button
        title="Anterior"
        loading={false}
        onClick={() => setOffset(Math.max(offset - limit, 0))}
        disabled={current === 1}
        className="w-36 h-7 bg-primary200 border border-solid border-primary300 text-sm font-normal"
      />
      <span className=" text-white font-normal text-base text-center select-none">
        {current} de {pages}
      </span>
      <Button
        title="Proximo"
        loading={false}
        onClick={() => setOffset(Math.min(offset + limit, (pages - 1) * limit))}
        disabled={current === pages}
        className="w-36 h-7 bg-primary200 border border-solid border-primary300 text-sm font-normal "
      />
    </div>
  );
};
