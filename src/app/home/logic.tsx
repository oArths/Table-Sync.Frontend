"use client"
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import response from "../data/response.json";
import { Options } from "./data";

const useLogic = () => {
  const [filter, setFilter] = useState(false);
  const [download, setDownload] = useState(false);
  const [upload, setUpload] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(Options);
  const [filteredData, setFilteredData] = useState(response);
  const [searchValue, setSearchValue] = useState("");
  const menu = useSelector((state: RootState) => state.menu.open);

  const normalizeString = (str: string) => {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handleSelect = (selected: string[], searchValueParam?: string) => {
    setSelectedOptions(selected);

    const searchValueToUse = searchValueParam !== undefined ? searchValueParam : searchValue;
    const searchNormalize = normalizeString(searchValueToUse);

    const filteredByOptions = response.filter((item) =>
      selected.includes(item.Cliente.Status)
    );

    const filteredBySearch = filteredByOptions.filter((item) => {
      const dataToSearch = [
        item.Processo["Número do Processo"],
        item.Cliente["Número do Cliente"],
        item.Cliente.Status,
        item.Cliente.Locatario,
        item.Processo["Última movimentação"],
        item.Contratos["Fim do contrato"],
        item.Processuais.Fase,
        item.Cliente.CNPJ,
      ].join(" ");

      return normalizeString(dataToSearch).includes(searchNormalize);
    });

    setFilteredData(filteredBySearch);
  };

  return {
    filter,
    setFilter,
    download,
    setDownload,
    upload,
    setUpload,
    selectedOptions,
    setSelectedOptions,
    filteredData,
    setFilteredData,
    searchValue,
    setSearchValue,
    handleSelect,
    menu,
  };
};

export default useLogic;
