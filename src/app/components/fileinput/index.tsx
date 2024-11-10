"use client";
import * as I from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "@/app/components/button";
import { DropzoneState, useDropzone } from "react-dropzone";

interface InputProps {
  dropzone: DropzoneState;
}

interface HasFileProps {
  file?: File;
  removeFile: () => void;
  sendFile : (file: File) => void ;
  progress: number

}


interface IFileInput{
    FileSelect: (file: File) => void
    progress: number
}
 const FileInput: React.FC<IFileInput> = ({FileSelect, progress}) => {
  const [file, setFile] = useState<File | null>(null);

  const removeFile = useCallback(() => {
    setFile(null);
  }, [file]);

  const onDrop = useCallback((files: File[]) => {
    setFile(files[0]);
  }, []);

  function sendFile (data: File){
    FileSelect(data)

  }

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "application/vnd.ms-excel": [".xls", ".xlsm"],
    },
  });

  if (file) return <HasFile file={file} removeFile={removeFile}  sendFile={() =>sendFile(file)} progress={progress}/>;

  return <Input dropzone={dropzone} />;
};

const Input = ({ dropzone }: InputProps) => {
  const { getRootProps, getInputProps, isDragActive } = dropzone;

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center w-full h-full  transition-all delay-100 ease-linear border-2 border-dashed  border-gray300/50 hover:border-gray400/50  bg-primary350/30 hover:bg-primary400/30 rounded-md cursor-pointer
      ${isDragActive ? "border-blue-500" : "border-gray-600"}`}
    >
      <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
        <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
          <I.UploadIcon
            color="rgb(212, 212, 212)"
            className={`w-10 h-10 mb-3  ${
              isDragActive ? "text-blue-500" : "text-gray-400"
            }`}
          />
          {isDragActive ? (
            <p className="font-bold text-lg text-blue-400">
              Solte para adicionar
            </p>
          ) : (
            <>
              <h3 className="text-sm font-normal text-gray500 select-none ">
                solte seus arquivos ou clique aqui
              </h3>
              <p className="text-xs font-normal text-gray300  select-none">
                formatos suportados: xlsx, xls e xlsm
              </p>
            </>
          )}
        </div>
      </label>
      <input {...getInputProps()} className="hidden" />
    </div>
  );
};

const HasFile = ({ file, removeFile , sendFile, progress}: HasFileProps) => {
  const [loading, setLoading] = useState(false);
  function formatFileSize(bytes: number | undefined) {
    if (bytes === 0 || bytes === undefined) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  return (
    <div className="w-full h-full  flex  flex-col justify-between items-center">
      <div className="bg-primary300 w-full rounded-md shadow-md flex flex-col mt-10  overflow-hidden">
        <div className="w-full flex flex-row items-center justify-start px-4 gap-3 ">
        <p className="  flex items-center p-2 justify-center rounded bg-primary200">
          <I.FileText className="text-gray500 w-5 h-5 " />
        </p>
        <span className="flex flex-col w-full my-4 ">
          <p className="text-sm text-gray500 ">{file?.name}</p>
        {progress ?  (<p className="text-xs text-gray500 ">{progress}</p>) :
          (<p className="text-xs text-gray500 ">{formatFileSize(file?.size)}</p>)}
        </span>
        <button
          type="button"
          onClick={removeFile}
          className="place-self-center ml-auto mr-4 p-1"
        >
          <I.XCircle className="w-5 h-5  " color="rgb(211, 47, 47)" />
        </button>
        </div>
        <div className="h-2 bg-green200 animate-pulse" style={{width:`${loading ? "100%" : "0%"}`}}></div>
      </div>
      <Button
        loading={loading}
        disabled={loading}
        type="button"
        onClick={() => {
            file && sendFile(file); setLoading(!loading)
        }}
        className=" bg-blue270 h-10 font-medium text-sm w-full"
        title={loading ? "" : "Enviar"}
      />
    </div>
  );
};
export default FileInput;