"use client";
import * as I from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "@/app/components/button";
import { useDropzone } from "react-dropzone";
import { IFileInput, HasFileProps, InputProps } from "./types.d";

const FileInput: React.FC<IFileInput> = ({ FileSelect, progress }) => {
  const [file, setFile] = useState<File | null>(null);

  const removeFile = useCallback(() => {
    setFile(null);
    sendFile(null)
  }, [file]);

  const onDrop = useCallback((files: File[]) => {
    setFile(files[0]);
  }, []);

  function sendFile(data: File | null) {
    FileSelect(data);
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

  if (file) {
    return (
      <HasFile
        file={file}
        removeFile={removeFile}
        sendFile={() => sendFile(file)}
        progress={progress}
      />
    );
  }

  return <Input dropzone={dropzone} />;
};

const Input = ({ dropzone }: InputProps) => {
  const { getRootProps, getInputProps, isDragActive } = dropzone;

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center w-full min-h-[300px] ultrawide:min-h-[500px] transition-all delay-100 ease-linear border-2 border-dashed  border-gray300/50 hover:border-gray400/50  bg-primary350/30 hover:bg-primary400/30 rounded-md cursor-pointer
      ${isDragActive ? "border-blue-500" : "border-gray-600"}`}
    >
      <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full ">
        <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
          <I.UploadIcon
            color="rgb(212, 212, 212)"
            className={`w-10 h-10 mb-3 desktop-xl:h-14 desktop-xl:w-14  ultrawide:h-20 ultrawide:w-20 ${
              isDragActive ? "text-blue-500" : "text-gray-400"
            }`}
          />
          {isDragActive ? (
            <p className="text-sm  desktop-xl:text-base  ultrawide:text-lg  4k:text-xl font-normal text-gray500 select-none ">
              Solte para adicionar
            </p>
          ) : (
            <>
              <h3 className="text-sm desktop-xl:text-base  ultrawide:text-lg  4k:text-xl font-normal text-gray500 select-none ">
                solte seus arquivos ou clique aqui
              </h3>
              <p className="text-xs desktop-xl:text-sm  ultrawide:text-base  4k:text-lg font-normal text-gray300  select-none">
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

const HasFile = ({ file, removeFile, sendFile, progress }: HasFileProps) => {
  const [loading, setLoading] = useState(false);
  function formatFileSize(bytes: number | undefined) {
    if (bytes === 0 || bytes === undefined) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  return (
    <div className="w-full h-full  flex  flex-col justify-between items-center space-y-10">
      <div className="bg-primary300 w-full rounded-md shadow-md flex flex-col   overflow-hidden">
        <div className="w-full flex flex-row items-center justify-center px-4 gap-3 ">
          <p className="  flex items-center p-2 justify-center rounded bg-primary200">
            <I.FileText className="text-gray500 w-5 h-5 desktop-xl:h-8 desktop-xl:w-8  ultrawide:h-10 ultrawide:w-10 " />
          </p>
          <span className="flex flex-col w-full my-4 ">
            <p className="text-sm desktop-xl:text-base  ultrawide:text-lg  4k:text-xl text-gray500 ">{file?.name}</p>
            {progress ? (
              <p className="text-xs desktop-xl:text-sm  ultrawide:text-base  4k:text-lg  text-gray500 ">{progress}%</p>
            ) : (
              <p className="text-xs desktop-xl:text-sm  ultrawide:text-base  4k:text-lg  text-gray500 ">
                {formatFileSize(file?.size)}
              </p>
            )}
          </span>
          <button
            type="button"
            onClick={removeFile}
            className="place-self-center ml-auto mr-4 p-1"
          >
            <I.XCircle className="w-5 h-5 desktop-xl:h-6 desktop-xl:w-6  ultrawide:h-8 ultrawide:w-8  " color="rgb(211, 47, 47)" />
          </button>
        </div>
        <div
          className="h-2 bg-green200 animate-pulse"
          style={{ width: `${loading ? "100%" : "0%"}` }}
        ></div>
      </div>
      <Button
        loading={loading}
        disabled={loading}
        type="button"
        onClick={() => {
          file && sendFile(file);
          setLoading(!loading);
        }}
        className=" bg-blue270 h-10 ultrawide:h-14  font-medium text-sm w-full"
        title={loading ? "" : "Enviar"}
      />
    </div>
  );
};
export default FileInput;
