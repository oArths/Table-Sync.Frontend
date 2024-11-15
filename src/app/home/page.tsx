"use client";
import useLogic from "./logic";
import { Options } from "./data";
import dynamic from "next/dynamic";
import Table from "../template/table";
import { Header } from "../template/header";
import { Button } from "../components/button";
import Filter from "../components/dropdown/filter";

export default function Home() {
  const {
    filter,
    setFilter,
    download,
    setDownload,
    upload,
    setUpload,
    selectedOptions,
    searchValue,
    setSearchValue,
    handleSelect,
    filteredData,
    menu,
  } = useLogic();

  const Upload = dynamic(() => import("../template/upload"), {
    loading: () => null,
  });
  const Download = dynamic(() => import("../template/download"), {
    loading: () => null,
  });

  return (
    <div
      className={`flex-col  w-full h-screen-minus-80   pb-20 items-start bg-primary100 justify-items-center  transition-all delay-200 ${
        (download || upload || menu) && "overflow-y-hidden"
      }`}
    >
      <Header />
      <h1 className="w-11/12 mt-11 text-white text-5xl text-left font-medium">
        Home
      </h1>
      <nav className="flex flex-row items-center justify-between w-11/12 mt-10">
        <div className="flex flex-row items-start ">
          <Button
            loading={false}
            disabled={false}
            onClick={() => setUpload(!upload)}
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
            value={searchValue}
            onChange={(e) => {
              const newSearchValue = e.target.value;
              setSearchValue(newSearchValue);
              handleSelect(selectedOptions, newSearchValue);
            }}
            className="w-80  py-2 px-3 h-10 rounded  mr-12  text-white border border-solid  border-primary200  focus:ease-in  focus:border-blue200 bg-primary100 transition-colors duration-300 focus:outline-none"
          />
          <Filter
            options={Options}
            open={filter}
            onClick={() => setFilter(!filter)}
            selectedOptions={selectedOptions}
            onSelect={handleSelect}
          />
        </div>
      </nav>
      <Table data={filteredData} />
      <Download close={() => setDownload(!download)} open={download} />
      <Upload close={() => setUpload(!upload)} open={upload} />
    </div>
  );
}
