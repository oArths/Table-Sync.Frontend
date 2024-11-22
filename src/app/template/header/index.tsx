import SuspenseImage from "@/app/shared/suspenseImage";
import { Menu } from "../menu";
import { useDispatch } from "react-redux";
import { setStateMenu } from "@/redux/menu/slice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";

export const Header = () => {
  
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.menu.open);
  const handleClick = () => {
    dispatch(setStateMenu(!isOpen));
  };

    return (
      <header className="flex items-center justify-center w-full h-20 py-3 bg-primary100 border border-solid  border-b-gray100/50 border-x-0 border-t-0  ">
        <div className="w-11/12  h-full flex flex-row items-center justify-between ">
          <div className=" w-[100px] h-[30px]">
            <SuspenseImage
              src="/LogoGrenke.webp"
              alt="Logo da Grenke"
              width={100}
              height={30}
              priority={true}
            />
          </div>
          <div
            onClick={handleClick}
            className="cursor-pointer flex items-center justify-center rounded-full border border-solid border-primary200  h-11 w-11 bg-primary100"
          >
            <SuspenseImage
              src="/UserIcon.svg"
              alt="Logo da Grenke"
              width={25}
              className="rounded-full"
              height={25}
              priority={true}
            />
          </div>
        </div>
        <Menu
          name="Janaina Mendes"
          position="Grenke"
          close={handleClick}
          open={isOpen}
        />
      </header>
    );
  
};
