"use client";
import * as I from "lucide-react";
import Modal from "@/app/components/modal";
import { useState } from "react";
import { Button } from "@/app/components/button";

interface IUpload {
  open: boolean;
  close: () => void;
}

export const Upload: React.FC<IUpload> = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <Modal isOpen={props.open}>
      <div
        onClick={props.close}
        className={`flex items-center justify-center absolute  top-0 w-screen h-screen ${
          props.open ? " animate-colorOutUp" : "animate-colorInDown"
        }`}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`flex flex-col items-center justify-start  w-2/5 h-4/5  rounded  bg-primary100  border border-solid border-black400 ${
            props.open ? " animate-fadeInDown" : "animate-fadeOutUp "
          }`}
        >
          <div className="w-4/5 flex flex-col items-start mb-auto  mt-10">
            <aside className="flex w-full flex-row items-center justify-between">
              <h1 className="text-left h-auto text-3xl w-auto text-white  font-regular">
                Atualizar Tabela
              </h1>
              <div
                onClick={props.close}
                className="fle w-7 h-full cursor-pointer  "
              >
                <I.X width="30px" height="30px" color="rgb(212, 212, 212)" />
              </div>
            </aside>
            <h2 className="text-left text-base h-auto mt-3 font-normal text-white  ">
              Selecione um arquivo em Excel, com base no modelo da Legal Control
            </h2>
          </div>

          <div className=" flex flex-col items-center justify-center w-4/5 h-2/5 bg-primary400/30 border border-solid border-blue200/20 rounded cursor-pointer">
            <I.Image width="60px" height="60px" color="rgb(212, 212, 212)" />
            <h3 className="text-sm font-normal text-white select-none ">solte seus arquivos ou clique aqui</h3>
            <p className="text-xs font-normal text-gray300  select-none">formatos suportados:  xlsx, xls e xlsm</p>
          </div>

          <Button
            loading={loading}
            disabled={loading}
            onClick={() => setLoading(!loading)}
            className=" bg-blue270 h-10 font-medium text-sm mt-auto mb-10 w-1/2   " 
            title={loading ? "" : "Finalizar"}
          />
        </aside>
      </div>
    </Modal>
  );
};
