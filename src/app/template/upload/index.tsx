"use client";
import axios from "axios";
import { useState } from "react";
import * as I from "lucide-react";
import Modal from "@/app/components/modal";
import FileInput from "../../components/fileinput";

interface IUpload {
  open: boolean;
  close: () => void;
}

const Upload: React.FC<IUpload> = (props) => {
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<File | null>(null);

  const SendFile = async (file: any) => {
    console.log("send", file);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/api/fake-endpoint", formData, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          if (total === undefined) {
            return 0;
          }
          const percentCompleted = Math.round((loaded * 100) / total);
          setProgress(percentCompleted);
          console.log(`Progresso: ${percentCompleted}%`);
        },
      });
      console.log(res);
    } catch (error) {
      console.error("Erro:", error);
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(file);
    if (file) {
      e.preventDefault();
      return;
    }
    props.close();
  };
  return (
    <Modal isOpen={props.open}>
      <div
        onClick={(e) => handleClick(e)}
        className={`flex items-center justify-center fixed  top-0 w-full h-full ${
          props.open ? " animate-colorOutUp" : "animate-colorInDown"
        }`}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`flex flex-col items-center justify-start  w-2/5 h-auto  max-h-[900px] rounded  bg-primary100  border border-solid border-black400 ${
            props.open ? " animate-fadeInDown" : "animate-fadeOutUp "
          }`}
        >
          <div className="w-4/5 flex flex-col items-start pb-10 pt-5 desktop:pt-7 desktop-xl:pt-10  ultrawide:pt-15 ">
          <aside className="flex w-full flex-row items-center justify-end">
              <div
                onClick={(e) => handleClick(e)}
                className="w-7 h-7  cursor-pointer  desktop-xl:h-10 desktop-xl:w-10  "
              >
                <I.X width="100%" height="100%" color="rgb(212, 212, 212)" />
              </div>
            </aside>
              <h1 className="text-left h-auto text-3xl desktop-xl:text-4xl 4k:text-5xl w-auto text-white  font-regular">
                Atualizar Tabela
              </h1>
            <h2 className="text-left text-base ultrawide:text-lg 4k:text-2xl h-auto mt-2 font-normal text-white  ">
              Selecione um arquivo em Excel, com base no modelo da Legal Control
            </h2>
          </div>
          <form className="w-4/5 h-3/5 pb-10  ultrawide:pb-20 ">
            <FileInput
              FileSelect={(selectedFile: File | null) => (
                setFile(selectedFile), SendFile(selectedFile)
              )}
              progress={progress}
            />
          </form>
        </aside>
      </div>
    </Modal>
  );
};
export default Upload;
