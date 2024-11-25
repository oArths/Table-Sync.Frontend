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
// fazer a modal se fechar ao iniciar o download
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (loading) {
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
          className={`flex flex-col items-center justify-start  w-2/6 h-auto  space-y-10 pb-10 rounded  bg-primary100  border border-solid border-black400 ${
            props.open ? " animate-fadeInDown" : "animate-fadeOutUp "
          }`}
        >
          <div className="w-4/5 flex flex-col items-start mb-auto  mt-10">
            <aside className="flex w-full flex-row items-center justify-end ">
              <div
                onClick={props.close}
                className="fle w-7 h-7 cursor-pointer ultrawide:h-10  ultrawide:w-10 "
              >
              <I.X width="100%" height="100%+
              " color="rgb(212, 212, 212)" />
              </div>
              </aside>
              <h1 className="text-left h-auto text-3xl desktop-xl:text-4xl 4k:text-5xl w-auto text-white  font-regular">
                Baixar Tabela
              </h1>
            <h2 className="text-left  text-base ultrawide:text-lg 4k:text-2xl h-auto mt-3 font-normal text-white  ">
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
            className=" bg-blue270 h-10 ultrawide:h-14  font-medium text-sm mt-auto mb-10 w-4/5   "
            title={loading ? "" : "Baixar"}
          />
        </aside>
      </div>
    </Modal>
  );
};
export default Download;
