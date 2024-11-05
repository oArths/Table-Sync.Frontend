"use client";
import SuspenseImage from "@/app/shared/suspenseImage";
import { usePathname } from "next/navigation";
import { Menu } from "../menu";

export const Header = () => {
  let path = usePathname();
  if (path === "/") {
    return;
  }

  return (
    <header className=" flex flex-row items-center justify-between w-full h-16 px-20  bg-primary100 border border-solid  border-b-gray100/50  ">
      <div className=" w-[100px] h-[30px]">
        <SuspenseImage
          src="/LogoGrenke.webp"
          alt="Logo da Grenke"
          width={100}
          height={30}
          priority={true}
        />
      </div>
      <div className="  cursor-pointer flex items-center justify-center rounded-full border border-solid border-primary200  h-11 w-11 bg-primary100">
        <SuspenseImage
          src="/UserIcon.svg"
          alt="Logo da Grenke"
          width={25}
          className="rounded-full"
          height={25}
          priority={true}
        />
      </div>
      <Menu name="clara" position="grenke" open={true} />
    </header>
  );
};
