"use client";
import * as I from "lucide-react";
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
        className="flex items-center justify-center absolute  top-0 w-screen h-screen  bg-black300/50 backdrop-blur-sm  "
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center justify-start  w-2/5 h-3/5  rounded  bg-primary100  border border-solid border-black400"
        >
          <div className="w-4/5 flex flex-col items-start  mt-10">
            <aside className="flex w-full flex-row items-center justify-between">
              <h1 className="text-left h-auto text-4xl w-auto text-white  font-medium">
                Baixar Tabela
              </h1>
              <div
                onClick={props.close}
                className="fle w-7 h-full cursor-pointer  "
              >
                <I.X width="30px" height="30px" color="rgb(212, 212, 212)" />
              </div>
            </aside>
            <h2 className="text-left text-xl h-auto mt-3 font-medium text-white  ">
              Selecione o periodo que deseja baixar
            </h2>
          </div>

         

          <Button
            loading={loading}
            disabled={loading}
            onClick={() => setLoading(!loading)}
            className=" bg-blue270 h-10 font-medium text-sm  w-4/5  "
            title={loading ? "" : "Baixar"}
          />
        </aside>
      </div>
    </Modal>
  );
};
