interface InputView {
  label: string;
  value: string | number;
  className?: string;
}
export default function InputView(props: InputView) {
  return (
    <div className="flex flex-col gap-2 w-full items-start ">
      <label className="font-medium text-base  desktop-xl:text-lg  ultrawide:text-xl  4k:text-2xl  text-white">{props.label}</label>
      <p className={` rounded w-full p-2 text-sm desktop-xl:text-base  ultrawide:text-lg  4k:text-xl border border-solid border-gray200  desktop-xl:h-12  ultrawide:h-14  4k:h-16 ${props.className ? props.className : 'flex items-center justify-start text-start  h-10'} `}>{props.value}</p>
    </div>
  );
}
