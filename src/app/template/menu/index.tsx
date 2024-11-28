"use client";
import Modal from "@/app/components/modal";
import { Button } from "@/app/components/button";
import { useState } from "react";
import { signOut } from "next-auth/react";

interface IMenu {
  open: boolean;
  name: string;
  position: string;
  close: () => void;
}

export const Menu: React.FC<IMenu> = (props) => {
  const [loading, setLoading] = useState(false);

  const  HandleClose = async() => {
    setLoading(true)
    console.log("fachar")
    await signOut({ redirect: true, callbackUrl: "/" });
      props.close() 
      setLoading(false)
    console.log("fechou")
  
  }

  return (
    <Modal isOpen={props.open}>
      <div
        onClick={props.close}
        className={`flex items-start justify-end fixed  top-0 w-full h-full  `}
      >
        <aside onClick={(e) => e.stopPropagation()}  className={`flex flex-col items-center py-1 justify-around ml-auto mr-20 mt-16 w-40 h-28  rounded  bg-primary200 ${props.open ? " animate-fadeInDown": "animate-fadeOutUp " }`}>
          <div className="w-4/5 flex flex-col items-start ">
            <h1 className="text-left h-auto text-base text-white  font-medium">{props.name}</h1>
            <h2 className="text-left text-xs h-auto mt-1 font-light text-white  ">{props.position}</h2>
          </div>
          <p className=" w-full h-[1px] bg-primary400"/>
          <Button
            loading={loading}
            disabled={loading}
            onClick={() => HandleClose()}
            className="h-7 bg-red100/70 font-medium text-sm  w-4/5 "
            title={loading ? "" : "Sair"}
          />
        </aside>
      </div>
    </Modal>
  );
};
