"use client";
import { useState } from "react";
import { Button } from "../components/button";
import Filter from "../components/dropdown/filter";
import { Download } from "../template/download";

export default function Home() {
  const [filter, setFilter] = useState(false);
  const [download, setDownload] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["KU"]);
  const data = ["KU", "KA", "KL", "KD"];

  const handleSelect = (selected: string[]) => {
    setSelectedOptions(selected);
  };

  return (
    <div className="flex-col  w-full h-screen-minus-80 items-start bg-primary100 justify-items-center  ">
      <h1 className="w-11/12 mt-11 text-white text-5xl text-left font-medium">
        Home
      </h1>
      <nav className="flex flex-row items-center justify-between w-11/12 mt-10">
        <div className="flex flex-row items-start ">
          <Button
            loading={false}
            disabled={false}
            onClick={() => console.log("wd")}
            className="bg-primary200 font-medium text-lg  rounded text-center w-32 h-10 "
            title="Atualizar"
          />
          <Button
            loading={false}
            onClick={() => setDownload(!download)}
            className=" bg-primary200 ml-12 font-medium text-lg  rounded text-center w-32  h-10 "
            title="Baixar"
          />
        </div>
        <div className="flex flex-row items-start ">
          <input
            type="text"
            autoComplete="off"
            placeholder="Pesquisar..."
            className="w-80  py-2 px-3 h-10 rounded  mr-12  text-white border border-solid  border-primary200  focus:ease-in  focus:border-blue200 bg-primary100 transition-colors duration-300 focus:outline-none"
          />
          <Filter
            options={data}
            open={filter}
            onClick={() => setFilter(!filter)}
            selectedOptions={selectedOptions}
            onSelect={handleSelect}
          />
          <Download
          close={() => setDownload(!download)}
          open={download}
          
          />
        </div>
      </nav>
    </div>
  );
}
