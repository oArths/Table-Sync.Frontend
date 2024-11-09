"use client";
import * as I from "lucide-react";
import Modal from "@/app/components/modal";
import { FileInput } from "@/app/components/fileinput";
import AxiosMockAdapter from "axios-mock-adapter";
import axios from "axios";
import {useState} from "react"

interface IUpload {
  open: boolean;
  close: () => void;
}

export const Upload: React.FC<IUpload> = (props) => {
  const [progress ,setProgress] = useState(0)
  const mock = new AxiosMockAdapter(axios);


  mock.onPost("/api/fake-endpoint").reply((config) => {
    const fileSize = 1024 * 1024; // Simulate a 1MB file size
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          200,
          {
            'Content-Length': fileSize,
            'Content-Type': 'application/json',
          },
          { message: "Requisição bem-sucedida!", data: "Simulated Data" }
        ]);
      }, 2000);
    });
  });

  const SendFile = async (file: any) => {
    try {
      const res = await axios.post("/api/fake-endpoint", file, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          if (total === undefined) {
            console.log('ksd')
            return 0; 
          }
          const percentCompleted = Math.round((loaded * 100) / total);
          setProgress(percentCompleted);
          console.log(`Progresso: ${percentCompleted}%`);
        }
      });
      console.log(res)

    } catch (error) {
      console.error("Erro:", error);
    }
  };
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
          <div className="w-4/5 flex flex-col items-start py-5">
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
            <h2 className="text-left text-base h-auto mt-2 font-normal text-white  ">
              Selecione um arquivo em Excel, com base no modelo da Legal Control
            </h2>
          </div>
          <form className="w-4/5 h-3/5">
            <FileInput FileSelect={() => SendFile(File)}  progress={progress}/>
          </form>
        </aside>
      </div>
    </Modal>
  );
};
