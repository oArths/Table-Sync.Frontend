interface InputView {
  label: string;
  value: string | number;
  className?: string;
}
export default function InputView(props: InputView) {
  return (
    <div className="flex flex-col gap-2 w-full items-start ">
      <label className="font-medium text-base  text-white">{props.label}</label>
      <p className={` rounded w-full p-2 text-sm  border border-solid border-gray200  ${props.className ? props.className : 'flex items-center justify-start text-start  h-10'} `}>{props.value}</p>
    </div>
  );
}
