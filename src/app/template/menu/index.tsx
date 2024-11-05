import Modal from "@/app/components/modal";
interface IMenu {
  open: boolean;
  name: string;
  position: string;
  close: () => void;
}

export const Menu: React.FC<IMenu> = (props) => {
  return (
    <Modal isOpen={props.open}>
      <div onClick={props.close} className="flex items-center justify-center absolute  top-0 w-screen h-screen  bg-primary100/50 backdrop-blur-sm ">
      SDSDSksmksdmksmdksdmksmksdksmdkksd
      </div>
    </Modal>
  );
};
