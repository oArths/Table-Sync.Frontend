"use client";
import SuspenseImage from "@/app/shared/suspenseImage";
import { usePathname } from "next/navigation";
import { Menu } from "../menu";
import { useState } from "react";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  let path = usePathname();
  if (path === "/home") {
    return (
      <header className="flex items-center justify-center w-full h-20 py-3 bg-primary100 border border-solid  border-b-gray100/50  ">
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
            onClick={() => setMenu(!menu)}
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
          close={() => setMenu(false)}
          open={menu}
        />
      </header>
    );
  }
};
