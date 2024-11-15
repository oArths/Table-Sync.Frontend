interface InputView {
  label: string;
  value: string | number;
}
export default function InputView(props: InputView) {
  return (
    <div className="flex flex-col gap-2 w-full items-start ">
      <label className="font-medium text-base  text-white">{props.label}</label>
      <p className="h-10 rounded w-full p-2 text-sm text-start flex items-center justify-start border border-solid border-gray200">{props.value}</p>
    </div>
  );
}
