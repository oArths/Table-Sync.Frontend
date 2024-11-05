import ReactDOM from "react-dom";
interface IModal {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function Modal({ isOpen, children }: IModal) {
  let element = document.getElementById("modal");
  if (!element) {
    return;
  }
  if (isOpen) {
    return ReactDOM.createPortal(<div>{children}</div>, element);
  }
}
