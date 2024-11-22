"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import response from "../data/response.json";
import { Options } from "./data";
import { useDispatch } from "react-redux";
import { setInitialResponse } from "@/redux/response/slice";
import { simplifiedResponseSelector } from "@/redux/response/responseSelects";

const useLogic = () => {
  const [filter, setFilter] = useState(false);
  const [download, setDownload] = useState(false);
  const [upload, setUpload] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(Options);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  
  dispatch(setInitialResponse(response));

  const responseClear = useSelector((state: RootState) =>
    simplifiedResponseSelector(state)
  );

  const [filteredData, setFilteredData] = useState(responseClear);


  const normalizeString = (str: string) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const handleSelect = (selected: string[], searchValueParam?: string) => {
    setSelectedOptions(selected);

    const searchValueToUse =
      searchValueParam !== undefined ? searchValueParam : searchValue;
    const searchNormalize = normalizeString(searchValueToUse);

    if(!responseClear ){
      return null;
    }
    const filteredByOptions = responseClear.filter((item) =>
      selected.includes(item.status)
    );

    const filteredBySearch = filteredByOptions.filter((item) => {
      const dataToSearch = [
        item.id,
        item.processNumber,
        item.clientNumber,
        item.status,
        item.tenant,
        item.lastMovement,
        item.contractEnd,
        item.phase,
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
  };
};

export default useLogic;
