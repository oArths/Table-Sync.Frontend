"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface IModal {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function Modal({ isOpen, children }: IModal) {
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setShowModal(false), 300); 
      return () => clearTimeout(timer); 
    } else {
      setShowModal(true); 
    }
  }, [isOpen]);

  if (!mounted) {
    return null;
  }
  const element = document.getElementById("modal");
  if (!element) {
    return null;
  }

  return showModal ? ReactDOM.createPortal(<div>{children}</div>, element) : null;
}
