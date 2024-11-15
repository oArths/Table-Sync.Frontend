"use client";
import { Header } from "@/app/template/header";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/app/components/button";
import { RootState } from "@/redux/rootReducer";
import { useSelector } from "react-redux";
import ContratoView from "@/app/template/contrato/contratoView";
import { getContractSelector } from "@/redux/response/responseSelects";
import { useState, useEffect } from "react";
import { Root } from "@/app/data/response.d";

export default function Contrato() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const item = useSelector((state: RootState) =>
    getContractSelector(state, params.id)
  );
  const [selectedItem, setSelectedItem] = useState<Root | null>(null);

  useEffect(() => {
    setSelectedItem(item);
  }, [item]);
  console.log(item);

  return (
    <main className=" flex-col  w-full h-screen-minus-80   pb-20 items-start bg-primary100 justify-items-center text-white">
      <Header />
      <div className="flex flex-col items-start w-11/12 mt-5 mb-10">
        <span className="flex flex-row items-start justify-start gap-1 w-full select-none">
          <p
            onClick={() => router.push("/home")}
            className="text-gray500 font-light text-sm cursor-pointer"
          >
            Home
          </p>
          <p className="text-gray400 font-light text-sm cursor-default">
            {">"}
          </p>
          <p className="text-gray400 font-light text-sm cursor-default">
            Contrato
          </p>
        </span>
        <nav className="flex flex-row items-center justify-between w-full mt-5">
          <p className="text-white font-medium text-3xl ">
            Contrato {params.id}
          </p>
          <Button
            title="Editar"
            className="bg-blue200 w-36 h-10  "
            loading={false}
          />
        </nav>
      </div>
      {selectedItem ? <ContratoView Contracts={selectedItem} /> : <>não a item</>}
    </main>
  );
}