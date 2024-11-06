import * as I from "lucide-react";
interface IFilter {
  open: boolean;
  options: string[];
  selectedOptions: string[];
  onClick: () => void;
  onSelect: (selected: string[]) => void;
}

export default function Filter({
  options,
  open,
  selectedOptions,
  onClick,
  onSelect,
}: IFilter) {
  const handleOptionClick = (value: string) => {
    const isSelected = selectedOptions.includes(value);
    if (isSelected && selectedOptions.length === 1) {
      return;
    }
    const newSelectedOptions = isSelected
      ? selectedOptions.filter((option) => option !== value)
      : [...selectedOptions, value];

    onSelect(newSelectedOptions);
  };
  return (
    <div className="relative  w-32 h-10  ">
      <p
        onClick={onClick}
        className="cursor-pointer select-none font-medium text-base text-gray500 px-4 flex flex-row items-center justify-between w-full h-full bg-primary200 rounded"
      >
        Status
        <I.ChevronDown
          widths="24px"
          height="24px"
          color="rgb(144, 144, 144)"
          className={`  transition ease-linear  duration-200 ${
            open ? "rotate-180 " : "rotate-0"
          }`}
        />
      </p>
      {open && (
        <div
          className={`absolute flex flex-col items-center justify-center py-1 z-10 w-32 mt-1 bg-primary200 rounded ${
            open ? "animate-fadeInDown" : "animate-fadeOutUp"
          }`}
        >
          {options.map((value, index) => {
            const isSelected = selectedOptions.includes(value);
            return (
              <p
                key={index}
                onClick={() => handleOptionClick(value)}
                className="flex flex-row items-center px-1 font-regular text-base text-gray500 justify-between w-5/6 rounded-sm hover:bg-primary400 cursor-pointer select-none"
              >
                {value}
                {isSelected && (
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
}
