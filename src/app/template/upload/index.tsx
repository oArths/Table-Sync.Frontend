"use client";
import * as I from "lucide-react"
import Modal from "@/app/components/modal";
import { useState } from "react";
import { Button } from "@/app/components/button";
interface IDownload {
  open: boolean;
  close: () => void;
}

export const Download: React.FC<IDownload> = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <Modal isOpen={props.open}>
      <div
        onClick={props.close}
        className="flex items-center justify-center absolute  top-0 w-screen h-screen  bg-black300/50 backdrop-blur-sm "
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center py-1 justify-around  w-2/5 h-4/5  rounded  bg-primary100  border border-solid border-black400"
        >
          <div className="w-4/5 flex flex-col items-start ">
          <aside className="flex flex-row items-center justify-between">
            
            <h1 className="text-left h-auto text-4xl text-white  font-medium">
            Atualizar Tabela
            </h1>
            <div>
                <I.X width="39px" height="39px" className="bg-gray500"/>
            </div>
          </aside>
            <h2 className="text-left text-xl h-auto mt-6 font-medium text-white  ">
            Selecione um arquivo em Excel, com base no modelo da Legal Control
            </h2>
          </div>
          <p className=" w-full h-[1px] bg-primary400" />
          <Button
            loading={loading}
            disabled={loading}
            onClick={() => setLoading(!loading)}
            className="h-7 bg-red100/70 font-medium text-sm  w-4/5 "
            title={loading ? "" : "Sair"}
          />
        </aside>
      </div>
    </Modal>
  );
};
