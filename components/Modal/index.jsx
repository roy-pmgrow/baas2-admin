import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, onClose }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const modal = document.createElement("div");
    modal.setAttribute("id", "modal");
    document.body.appendChild(modal);

    ref.current = modal;
    return () => {
      document.body.removeChild(modal);
    };
  }, []);

  return ref.current && mounted
    ? createPortal(
        <div className="fixed top-0 left-0 max-w-lg h-full z-10 select-none">
          <div className="opacity-40 bg-black w-full h-full fixed z-20"></div>
          <div className="flex items-center w-full h-full fixed z-30">
            <div className="flex flex-col w-full relative z-[999]">
              <div className="bg-white mx-auto p-5 rounded-lg space-y-[1rem] text-center">{children}</div>
            </div>
          </div>
        </div>,
        ref.current,
      )
    : null;
};

export default Modal;
