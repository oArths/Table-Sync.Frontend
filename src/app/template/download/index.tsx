"use client";
import * as I from "lucide-react";
import Modal from "@/app/components/modal";
import { useState } from "react";
import { Button } from "@/app/components/button";
import { DateRange } from "react-day-picker";
import DatePickerWithRange from "../../components/datapiker";

interface IDownload {
  open: boolean;
  close: () => void;
}

const Download: React.FC<IDownload> = (props) => {
  const [loading, setLoading] = useState(false);
  const handleDateChange = (date: DateRange | undefined) => {
    console.log("Data selecionada:", date);
  };
 

  return (
    <Modal isOpen={props.open}>
      <div
        onClick={props.close}
        className={`flex items-center justify-center fixed  top-0 w-full h-full ${
          props.open ? " animate-colorOutUp" : "animate-colorInDown"
        }`}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`flex flex-col items-center justify-start  w-2/6 h-3/6  rounded  bg-primary100  border border-solid border-black400 ${
            props.open ? " animate-fadeInDown" : "animate-fadeOutUp "
          }`}
        >
          <div className="w-4/5 flex flex-col items-start mb-auto  mt-10">
            <aside className="flex w-full flex-row items-center justify-between">
              <h1 className="text-left h-auto text-3xl w-auto text-white  font-regular">
                Baixar Tabela
              </h1>
              <div
                onClick={props.close}
                className="fle w-7 h-full cursor-pointer  "
              >
                <I.X width="30px" height="30px" color="rgb(212, 212, 212)" />
              </div>
            </aside>
            <h2 className="text-left  text-base h-auto mt-3 font-normal text-white  ">
              Selecione o periodo que deseja baixar
            </h2>
          </div>
          <DatePickerWithRange
            className=" w-4/5 "
            onDateChange={handleDateChange}
          />

          <Button
            loading={loading}
            disabled={loading}
            onClick={() => setLoading(!loading)}
            className=" bg-blue270 h-10 font-medium text-sm mt-auto mb-10 w-4/5   "
            title={loading ? "" : "Baixar"}
          />
        </aside>
      </div>
    </Modal>
  );
};
export default Download;