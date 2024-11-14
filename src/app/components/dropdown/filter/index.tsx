import * as I from "lucide-react";
interface IFilter {
  open: boolean;
  options: string[];
  selectedOptions: string[];
  onClick: () => void;
  onSelect: (selected: string[]) => void;
}

export default function Filter(props: IFilter) {
  const handleOptionClick = (value: string) => {
    const isSelected = props.selectedOptions.includes(value);
    if (isSelected && props.selectedOptions.length === 1) {
      return;
    }
    const newSelectedOptions = isSelected
      ? props.selectedOptions.filter((option) => option !== value)
      : [...props.selectedOptions, value];

    props.onSelect(newSelectedOptions);
  };
  return (
    <div className="relative  w-32 h-10 cursor-pointer ">
      <p
        onClick={props.onClick}
        className={`cursor-pointer select-none font-medium text-base text-gray500 px-4 flex flex-row items-center justify-between w-full h-full bg-primary200 rounded`}
      >
        Status
        <I.ChevronDown
          widths="24px"
          height="24px"
          color="rgb(144, 144, 144)"
          className={`  transition ease-linear  duration-200 ${
            props.open ? "rotate-180 " : "rotate-0"
          }`}
        />
      </p>
      {props.open && (
        <div
          className={`absolute flex flex-col items-center justify-center py-1 z-10 w-32 mt-1 bg-primary300 rounded ${
            props.open ? "animate-fadeInDown" : "animate-fadeOutUp"
          }`}
        >
          {props.options.map((value, index) => {
            const isSelected = props.selectedOptions.includes(value);
            return (
              <p
                key={index}
                onClick={() => handleOptionClick(value)}
                className="flex flex-row items-center px-1 font-regular text-base text-gray500 justify-between w-11/12 rounded-sm hover:bg-primary400 cursor-pointer select-none"
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
