"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface IModal {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function Modal({ isOpen, children }: IModal) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const element = document.getElementById("modal");
  if (!element) {
    return null;
  }

  return isOpen ? ReactDOM.createPortal(<div>{children}</div>, element) : null;
}
