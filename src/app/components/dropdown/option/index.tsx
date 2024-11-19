import * as I from "lucide-react";
import React from "react";
interface IOption {
  open: boolean;
  options: string[];
  select: string;
  label: string;
  onClick: () => void;
  onSelect: (selected: string) => void;
}

  const Options = React.forwardRef<HTMLDivElement, IOption>(( {open, options, select, label, onClick, onSelect},ref) =>{
  return (
    <div ref={ref} className=" flex flex-col gap-2 items-start relative h-full w-full cursor-pointer ">
      <>
      <label className="font-medium text-base   text-white">{label}</label>
      <p
        onClick={onClick}
        className={`cursor-pointer select-none   text-white  p-2 text-sm  h-10 flex flex-row items-center justify-between w-full bg-black200 border border-solid  border-gray200 rounded`}
      >
        {select}
        <I.ChevronDown
          widths="24px"
          height="24px"
          color="rgb(144, 144, 144)"
          className={`  transition ease-linear  duration-200 ${
            open ? "rotate-180 " : "rotate-0"
          }`}
        />
      </p>
      </>
      {open && (
        <div
          className={`absolute flex flex-col top-full items-center justify-center py-1 z-10 w-full mt-1 bg-primary300 rounded ${
            open ? "animate-fadeInDown" : "animate-fadeOutUp"
          }`}
        >
          {options.map((value, index) => {
            return (
              <p
                key={index}
                onClick={() => onSelect(value)}
                className="flex flex-row items-center px-2 font-regular text-base text-gray500 justify-between w-11/12 rounded-sm hover:bg-primary400 cursor-pointer select-none"
              >
                {value}
                {value === select && (
                  <I.Check
                    width="15px"
                    height="15px"
                    color="rgb(212, 212, 212)"
                  />
                )}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
})
export default Options
Options.displayName = "Options";